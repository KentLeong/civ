import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { Game, User } from "../../mongo"
import { perm, expireReply, displayGame, validateChannel } from "../../lib";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("host")
    .setDescription("Creates a game lobby")
    .addStringOption(option =>
      option.setName("mode")
        .setDescription("The game mode.")
        .setRequired(true)
        .addChoices(
          { name: "Normal", value: "normal" },
          { name: "Ranked", value: "ranked" }
        )),
  async execute(interaction: ChatInputCommandInteraction) {
    const mode = interaction.options.getString("mode") || "normal";
    if (!validateChannel(interaction, "game")) {
      await interaction.reply({ content: "Invalid channel.", ephemeral: true });
      expireReply(interaction);
      return;
    }
    if (perm(interaction, "mod") == false) {
      await interaction.reply("You do not have permission to use this command.");
      expireReply(interaction);
      return;
    }

    // checks if there is a game already
    const exists = await Game.findOne({
      $or: [{ state: "lobby" }, {state: "draft"}]
    });
    if (exists) {
      await interaction.reply("There is a lobby already in progress.");
      expireReply(interaction);
      return;
    }

    // find user
    const user = await User.findOne({
      discordId: interaction.user.id
    });
    if (!user) {
      await interaction.reply("User not found.");
      expireReply(interaction);
      return;
    }

    const gameCount = await Game.countDocuments({})+1;
    // create a new game
    const newGame = await Game.create({
      id: gameCount,
      host: interaction.user.id,
      state: "init",
      lobbyEvents: [],
      gameEvents: [],
      notes: [],
      players: [
        {
          discordId: interaction.user.id,
          name: user.name,
          bans: user.bans,
          alive: true,
          civ: "",
          team: 0,
          pool: [],
          trade: [],
          ready: false,
          selected: 0
        }
      ],
      settings: {
        bans: 3,
        pool: 4,
        mode: mode,
        ranked: true,
        modVer: "LekMod_v32.2",
        map: "LekMap_v5.1"
      }
    });

    await displayGame(interaction, newGame);
    await interaction.deferReply({ ephemeral: true})
    await interaction.deleteReply();
  },
}
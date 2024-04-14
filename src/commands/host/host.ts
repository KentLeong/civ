import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { Game, User } from "../../mongo"
import { perm, lobby } from "../../lib";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("host")
    .setDescription("Creates a game lobby"),
  async execute(interaction: ChatInputCommandInteraction) {
    if (perm(interaction, "mod") == false) {
      await interaction.reply("You do not have permission to use this command.");
      return;
    }

    // checks if user is already hosting a game
    const exists = await Game.findOne({
      host: interaction.user.id,
      $or: [{ state: "lobby" }, { state: "started" }, {state: "draft"}]
    });
    if (exists) {
      await interaction.reply("You are already hosting a game.");
      return;
    }

    // find user
    const user = await User.findOne({
      discordId: interaction.user.id
    });
    if (!user) {
      await interaction.reply("User not found.");
      return;
    }

    const gameCount = await Game.countDocuments({});
    // create a new game
    const newGame = await Game.create({
      id: gameCount,
      host: interaction.user.id,
      state: "lobby",
      players: [
        {
          discordId: interaction.user.id,
          name: user.name,
          role: "host",
          bans: [],
          civ: "",
          team: 1,
          pool: []
        }
      ],
      settings: {
        bans: 3,
        mode: "standard",
        ranked: true,
        modVer: "LekMod_v32.2",
        map: "LekMap_v5.1"
      }
    });
    await newGame.save();

    let display = await lobby(newGame);
    await interaction.channel?.send({ embeds: [display]});
  },
}
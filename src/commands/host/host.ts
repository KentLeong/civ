import { SlashCommandBuilder, ChatInputCommandInteraction, ButtonBuilder, ButtonStyle, ActionRowBuilder } from "discord.js";
import { Game, User } from "../../mongo"
import { perm, lobby, expireReply } from "../../lib";
import { set } from "mongoose";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("host")
    .setDescription("Creates a game lobby"),
  async execute(interaction: ChatInputCommandInteraction) {
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

    const join = new ButtonBuilder()
      .setCustomId("joinLobby")
      .setLabel("Join")
      .setStyle(ButtonStyle.Primary);

    const leave = new ButtonBuilder()
      .setCustomId("leaveLobby")
      .setLabel("Leave")
      .setStyle(ButtonStyle.Danger);

    const draft = new ButtonBuilder()
      .setCustomId("draftLobby")
      .setLabel("Draft")
      .setStyle(ButtonStyle.Success);

    const row: any = new ActionRowBuilder()
      .addComponents(join, leave, draft);
    let display = await lobby(newGame);
    await interaction.channel?.send({ embeds: [display], components: [row]})
      .then(async (msg) => {
        newGame.messageId = msg.id;
        await newGame.save();
      });
    await interaction.reply({ content: "Game lobby created.", ephemeral: true});
    expireReply(interaction);
  },
}
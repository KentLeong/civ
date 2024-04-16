import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { displayGame, expireReply } from "../../lib";
import { Game, User } from "../../mongo";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("note")
    .setDescription("Sets a note for game")
    .addStringOption(option =>
      option.setName("note")
        .setDescription("The note to set")
        .setRequired(true)
    ),
  async execute(interaction: ChatInputCommandInteraction) {
    const note = interaction.options.getString("note") || "";

    const user = await User.findOne({
      discordId: interaction.user.id
    });

    if (!user) {
      await interaction.reply({ content: "User not found.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    const game = await Game.findOne({
      state: "ingame"
    });

    if (!game) {
      await interaction.reply({ content: "Game not found.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    // check if user is host
    if (game.host !== interaction.user.id) {
      await interaction.reply({ content: "You are not the host.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    game.notes.push(note);
    await Game.findOneAndUpdate({ state: "ingame" }, { notes: game.notes });

    await interaction.reply({ content: "Note added.", ephemeral: true });
    expireReply(interaction);

    await displayGame(interaction, game);
  },
}
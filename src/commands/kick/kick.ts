import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { displayGame, expireReply, perm, validateChannel } from "../../lib";
import { User, Game } from "../../mongo";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("kicks player from lobby")
    .addUserOption(option =>
      option.setName("user")
        .setDescription("The user to kick.")
        .setRequired(true)),
  async execute(interaction: ChatInputCommandInteraction) {
    if (!validateChannel(interaction, "game")) {
      await interaction.reply({ content: "Invalid channel.", ephemeral: true });
      expireReply(interaction);
      return;
    }
    if (perm(interaction, "mod") == false) {
      await interaction.reply({ content: "You do not have permission to use this command.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    const kickuser:any = interaction.options.getUser("user");
    const user = await User.findOne({
      discordId: interaction.user.id
    });
    if (!user) {
      await interaction.reply({ content: "User not found.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    const game = await Game.findOne({
      $or: [{ state: "lobby" }, {state: "draft"}]
    });
    if (!game) {
      await interaction.reply({ content: "No lobby found.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    const player = game.players.find(p => p.discordId == kickuser.id);
    if (!player) {
      await interaction.reply({ content: "Player not found.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    // remove player from game
    game.players = game.players.filter(p => p.discordId != kickuser.id);
    await game.save();

    await displayGame(interaction, game);
    await interaction.deferReply({ ephemeral: true });
    await interaction.deleteReply();
  },
}
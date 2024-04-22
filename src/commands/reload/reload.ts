import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { displayGame, expireReply, perm, validateChannel } from "../../lib";
import { Game, User } from "../../mongo";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Reload's the game data in match history")
    .addStringOption(option =>
      option.setName("gameid")
        .setDescription("The game ID to reload")
        .setRequired(true)
    ),
  async execute(interaction: ChatInputCommandInteraction) {
    if (perm(interaction, "mod") == false) {
      await interaction.reply("You do not have permission to use this command.");
      expireReply(interaction);
      return;
    }
    
    const gameid = interaction.options.getString("gameid") || "";
    const user = await User.findOne({
      discordId: interaction.user.id
    });
    if (!user) {
      await interaction.reply({ content: "Please signup", ephemeral: true });
      expireReply(interaction);
      return;
    }
    const game = await Game.findOne({
      id: gameid
    });
    if (!game) {
      await interaction.reply({ content: "Game not found", ephemeral: true });
      expireReply(interaction);
      return;
    }

    await displayGame(interaction, game);
    await interaction.reply({ content: "Game data reloaded", ephemeral: true });
    expireReply(interaction);
  },
}
import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { expireReply } from "../../lib";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.reply({ content: "Pong!", ephemeral: true});
    expireReply(interaction);
  },
}
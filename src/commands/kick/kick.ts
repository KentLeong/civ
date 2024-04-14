import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { expireReply } from "../../lib";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("kicks player from lobby"),
  async execute(interaction: ChatInputCommandInteraction) {
  },
}
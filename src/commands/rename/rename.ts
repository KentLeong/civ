import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { User } from "../../mongo";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rename")
    .setDescription("renames user"),
  async execute(interaction: ChatInputCommandInteraction) {

  },
}
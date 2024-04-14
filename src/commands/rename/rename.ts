import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { User } from "../../mongo";
import { perm } from "../../lib/perm";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rename")
    .setDescription("renames user"),
  async execute(interaction: ChatInputCommandInteraction) {
    if (perm(interaction, "leong") == false) {
      await interaction.reply("You do not have permission to use this command.");
      return;
    }
  },
}
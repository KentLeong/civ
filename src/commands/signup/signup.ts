import { SlashCommandBuilder, CommandInteraction } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("signup")
    .setDescription("User signup command."),
  async execute(interaction: CommandInteraction) {
    
  },
}
import { SlashCommandBuilder, CommandInteraction } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Replies with Pong!"),
  async execute(msg: CommandInteraction, args: any) {
    console.log("Pong!")
    await msg.reply("Pong!");
  },
}
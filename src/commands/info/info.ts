import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { Civs } from "../../data/civs";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Gives info of civs.")
    .addStringOption(option =>
      option.setName("civ")
        .setDescription("The name of the civilization")
        .setRequired(true)
    ),
  async execute(msg: ChatInputCommandInteraction) {
    console.log(msg)
    const opt = msg.options.getString("civ") || "";
    await msg.reply(opt);
  },
}
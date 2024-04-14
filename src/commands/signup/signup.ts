import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { User } from "../../mongo";
import { perm } from "../../lib/perm";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("signup")
    .setDescription("User signup command.")
    .addUserOption(option =>
      option.setName("user")
        .setDescription("The user to signup.")
        .setRequired(true))
    .addStringOption(option =>
      option.setName("name")
        .setDescription("The name of the user.")
        .setRequired(true)),
  async execute(interaction: ChatInputCommandInteraction) {
    if (perm(interaction, "leong") == false) {
      await interaction.reply("You do not have permission to use this command.");
      return;
    }
    const user = interaction.options.getUser("user");
    const name = interaction.options.getString("name");

    const exists = await User.findOne({
      discordId: user?.id
    });

    if (exists) {
      await interaction.reply("User already signed up.");
      return;
    }

    const newUser = await User.create({
      name: name,
      discordId: user?.id
    });
    await newUser.save();
    await interaction.reply("User signed up.");
  },
}
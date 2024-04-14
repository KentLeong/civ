import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { User } from "../../mongo";
import { perm } from "../../lib";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rename")
    .setDescription("renames user")
    .addUserOption(option =>
      option.setName("user")
        .setDescription("The user to rename.")
        .setRequired(true))
    .addStringOption(option =>
      option.setName("name")
        .setDescription("The new name of the user.")
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

    if (!exists) {
      await interaction.reply("User not found.");
      return;
    }

    await User.updateOne({ discordId: user?.id }, { name: name });
    await interaction.reply("User renamed.");
  },
}
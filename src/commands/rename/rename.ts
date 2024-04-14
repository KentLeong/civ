import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { User } from "../../mongo";
import { expireReply, perm } from "../../lib";

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
      await interaction.reply({ content: "You do not have permission to use this command.", ephemeral: true });
      expireReply(interaction);
      return;
    }
    const user = interaction.options.getUser("user");
    const name = interaction.options.getString("name");

    const exists = await User.findOne({
      discordId: user?.id
    });

    if (!exists) {
      await interaction.reply({ content: "User not found.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    await User.updateOne({ discordId: user?.id }, { name: name });
    await interaction.reply({ content: "User renamed.", ephemeral: true});
    expireReply(interaction);
  },
}
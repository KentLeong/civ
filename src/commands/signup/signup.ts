import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { User } from "../../mongo";
import { expireReply, perm } from "../../lib";

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
      await interaction.reply({ content: "You do not have permission to use this command.", ephemeral: true });
      expireReply(interaction);
      return;
    }
    const user = interaction.options.getUser("user");
    const name = interaction.options.getString("name");

    const exists = await User.findOne({
      discordId: user?.id
    });

    if (exists) {
      await interaction.reply({ content: "User already exists.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    const newUser = await User.create({
      name: name,
      discordId: user?.id
    });
    await newUser.save();
    await interaction.reply({content: "User signed up.", ephemeral: true});
    expireReply(interaction);
  },
}
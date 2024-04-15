import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { User, Game } from "../../mongo";
import { expireReply, perm, displayGame } from "../../lib";

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

    // refresh the game lobby if game is in lobby state
    const game = await Game.findOne({
      $or: [{ state: "lobby" }, {state: "draft"}, {state: "ingame"}]
    });
    if (game) {
      game.players.forEach((player: any) => {
        if (player.discordId == user?.id) {
          player.name = name;
        }
      });
      await Game.findOneAndUpdate({
        $or: [{ state: "lobby" }, {state: "draft"}, {state: "ingame"}]
      }, game, { new: true });
      await displayGame(interaction, game);
    }
    await interaction.deferReply({ ephemeral: true})
    await interaction.deleteReply();
  },
}
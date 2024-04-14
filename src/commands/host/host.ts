import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { Game } from "../../mongo"
import { perm } from "../../lib/perm";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("host")
    .setDescription("Creates a game lobby"),
  async execute(interaction: ChatInputCommandInteraction) {
    if (perm(interaction, "mod") == false) {
      await interaction.reply("You do not have permission to use this command.");
      return;
    }

    // checks if user is already hosting a game
    const exists = await Game.findOne({
      host: interaction.user.id,
      $or: [{ status: "lobby" }, { status: "started" }, {status: "draft"}]
    });
    if (exists) {
      await interaction.reply("You are already hosting a game.");
      return;
    }

    const gameCount = await Game.countDocuments({});
    // create a new game
    const newGame = await Game.create({
      id: gameCount,
      host: interaction.user.id,
      state: "lobby"
    });
  },
}
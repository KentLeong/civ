import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { expireReply, displayGame } from "../../lib";
import { Game, User } from "../../mongo";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("undo")
    .setDescription("undo event or note")
    .addSubcommand(subcommand =>
      subcommand
        .setName("event")
        .setDescription("undo event")
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("note")
        .setDescription("undo note")
    ),
  async execute(interaction: ChatInputCommandInteraction) {
    const subcommand = interaction.options.getSubcommand();
    const user = await User.findOne({ discordId: interaction.user.id });
    if (!user) {
      await interaction.reply({ content: "User not found.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    const game = await Game.findOne({
      state: "ingame"
    });

    if (!game) {
      await interaction.reply({ content: "Game not found.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    // check if user is host
    if (game.host !== interaction.user.id) {
      await interaction.reply({ content: "You are not the host.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    if (subcommand === "event") {
      const event = game.gameEvents[game.gameEvents.length - 1];
      if (event.type === "kill") {
        game.players.forEach((player) => {
          if (player.discordId === event.players[1].discordId) {
            player.alive = true;
          }
        });
      } else if (event.type === "irr") {
        game.players.forEach((player) => {
          if (player.discordId === event.players[0].discordId) {
            player.alive = true;
          }
        });
      }
      game.gameEvents.pop();
    } else if (subcommand === "note") {
      game.notes.pop();
    }

    await Game.findOneAndUpdate({ state: "ingame" }, { gameEvents: game.gameEvents, notes: game.notes });

    await interaction.reply({ content: "Undo successful.", ephemeral: true });
    expireReply(interaction);

    await displayGame(interaction, game);
  },
}
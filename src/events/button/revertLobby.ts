import { User, Game } from "../../mongo";
import { displayGame, expireReply, perm } from "../../lib";
import { ButtonInteraction } from "discord.js";
import { Civs } from "../../assets/civs";
import { Civilization } from "../../types";

export default async (interaction: any) => {
  if (!perm(interaction, "mod")) {
    await interaction.reply({ content: "You do not have permission to do that.", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  const game = await Game.findOne({
    messageId: interaction.message.id,
  })

  if (!game) {
    await interaction.reply({ content: "Game not found.", ephemeral: true });
    expireReply(interaction);
    return false;
  } else if (game.state !== "draft") {
    await interaction.reply({ content: "Game is not in draft state.", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  // downgrade game draft to init state
  game.state = "init";
  game.players.forEach((player) => {
    player.civ = "";
    player.pool = [];
    player.trade = [];
    player.ready = false;
  });

  await Game.findOneAndUpdate({
    messageId: interaction.message.id,
  }, game, { new: true });

  // delete message
  await interaction.client.channels.cache.get(process.env.GAME_CHANNEL_ID).messages.fetch(interaction.message.id)
    .then((message: any) => message.delete());
  await displayGame(interaction, game);

  await interaction.deferReply({ ephemeral: true})
  await interaction.deleteReply();
}
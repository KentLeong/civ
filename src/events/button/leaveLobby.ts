import { User, Game } from "../../mongo";
import { displayGame, isPlayerInLobby, expireReply } from "../../lib";

export default async (interaction: any) => {
  const user = await User.findOne({ discordId: interaction.user.id });
  if (!user) {
    await interaction.reply({ content: "You need to sign up first.", ephemeral: true });
    expireReply(interaction);
    return;
  }

  const game = await Game.findOne({
    messageId: interaction.message.id,
  })
  if (!game) {
    await interaction.reply({ content: "Game not found.", ephemeral: true });
    expireReply(interaction);
    return;
  } else if (game.state !== "lobby") {
    await interaction.reply({ content: "Game is not in lobby state.", ephemeral: true });
    expireReply(interaction);
    return;
  }

  let exists = await isPlayerInLobby(game, interaction);
  if (!exists) {
    await interaction.reply({ content: "You are not in the game.", ephemeral: true });
    expireReply(interaction);
    return;
  } else if (game.host === interaction.user.id) {
    // delete game if host leaves
    await Game.deleteOne({ messageId: interaction.message.id });
    await interaction.reply({ content: "Game deleted.", ephemeral: true });
    expireReply(interaction);
    await interaction.client.channels.cache.get(process.env.GAME_CHANNEL_ID).messages.fetch(interaction.message.id)
      .then((message: any) => message.delete());
    return;
  }

  // remove player
  game.players = game.players.filter((player) => player.discordId !== interaction.user.id);
  await game.save();

  await displayGame(interaction, game);
  await interaction.deferReply({ ephemeral: true})
  await interaction.deleteReply();
}
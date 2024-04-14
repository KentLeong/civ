import { User, Game } from "../../mongo";
import { lobby, isPlayerInLobby, expireReply } from "../../lib";

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
    await interaction.reply("You are not in the game.", { ephemeral: true });
    expireReply(interaction);
    return;
  } else if (game.host === interaction.user.id) {
    await interaction.reply("You are the host. You cannot leave the game.", { ephemeral: true });
    expireReply(interaction);
    return;
  }

  // remove player
  game.players = game.players.filter((player) => player.discordId !== interaction.user.id);
  await game.save();

  // update message
  let display = await lobby(game);
  interaction.message.edit({
    embeds: [display]
  });

  await interaction.reply({ content: "You have left the game.", ephemeral: true })
  expireReply(interaction);
}
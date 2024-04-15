import { User, Game } from "../../mongo";
import { displayGame, isPlayerInLobby, expireReply } from "../../lib";
import { ButtonInteraction } from "discord.js";

export default async (interaction: ButtonInteraction) => {
  const user = await User.findOne({ discordId: interaction.user.id });
  if (!user) {
    await interaction.reply({ content: "You need to sign up first.", ephemeral: true });
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
  } else if (game.state !== "lobby") {
    await interaction.reply({ content: "Game is not in lobby state.", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  let exists = await isPlayerInLobby(game, interaction);
  if (exists) {
    await interaction.reply({ content: "You are already in the game.", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  const playerCount = game.players.length;
  if (playerCount >= 8) {
    await interaction.reply({ content: "Game is full.", ephemeral: true });
    expireReply(interaction);
    return;
  }

  const newPlayer = {
    discordId: interaction.user.id,
    name: user.name,
    bans: user.bans,
    civ: "",
    team: 0,
    pool: [],
    trade: [],
    ready: false
  }

  game.players.push(newPlayer);
  await game.save();

  await displayGame(interaction, game);

  await interaction.deferReply({ ephemeral: true})
  await interaction.deleteReply();
}
import { User, Game } from "../../mongo";
import { lobby, isPlayerInLobby } from "../../lib";

export default async (interaction: any) => {
  const user = await User.findOne({ discordId: interaction.user.id });
  if (!user) {
    await interaction.reply("You need to sign up first.");
    return false;
  }

  const game = await Game.findOne({
    messageId: interaction.message.id,
  })
  if (!game) {
    await interaction.reply("Game not found.");
    return false;
  } else if (game.state !== "lobby") {
    await interaction.reply("Game is not in lobby state.");
    return false;
  }

  let exists = await isPlayerInLobby(game, interaction);
  if (exists) {
    await interaction.reply("You are already in the game.", { ephemeral: true });
    return false;
  }

  const playerCount = game.players.length;
  if (playerCount >= 8) {
    await interaction.reply("Game is full.");
    return;
  }

  const newPlayer = {
    discordId: interaction.user.id,
    name: user.name,
    role: "player",
    bans: [],
    civ: "",
    team: playerCount +1,
    pool: []
  }

  game.players.push(newPlayer);
  await game.save();

  // update message
  let display = await lobby(game);
  interaction.message.edit({
    embeds: [display]
  });

  await interaction.reply("You have joined the game.", { ephemeral: true });
}
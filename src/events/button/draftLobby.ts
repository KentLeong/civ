import { User, Game } from "../../mongo";
import { displayGame, expireReply } from "../../lib";
import { ButtonInteraction } from "discord.js";
import { Civs } from "../../assets/civs";
import { Civilization } from "../../types";



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

  // check if player is the host
  if (game.host !== interaction.user.id) {
    await interaction.reply({ content: "You are not the host.", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  const pool:string[] = [];
  Civs.forEach((civ: Civilization) => {
    pool.push(civ.name);
  });

  // upgrade game lobby to draft
  game.state = "draft";

  // retrieve all bans from players
  const bans:string[] = [];
  game.players.forEach((player) => {
    player.bans.forEach((ban) => {
      if (!bans.includes(ban)) {
        bans.push(ban);
      }
    });
  });

  // remove banned civs from the pool
  pool.forEach((civ) => {
    if (bans.includes(civ)) {
      pool.splice(pool.indexOf(civ), 1);
    }
  });

  // add 4 random civs from pool to each player
  game.players.forEach((player) => {
    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * pool.length);
      player.pool.push(pool[random]);
      pool.splice(random, 1);
    }
  });

  await Game.findOneAndUpdate({ messageId: interaction.message.id }, game, { new: true })
  await displayGame(interaction, game);

  // send each player their pool
  game.players.forEach(async (player) => {
    const user = await interaction.client.users.fetch(player.discordId);
    await user.send(`Your pool: ${player.pool.join(", ")}`);
  });

  await interaction.deferReply({ ephemeral: true})
  await interaction.deleteReply();
}
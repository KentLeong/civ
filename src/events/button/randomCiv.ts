import { User, Game, Civ } from "../../mongo";
import { displayGame, expireReply, displayInfo } from "../../lib";
import { ButtonBuilder, ButtonStyle, ActionRowBuilder } from "discord.js";
import { Civs } from "../../assets/civs";
import { Civilization, Player } from "../../types";

export default async (interaction: any) => {
  // get game
  const game = await Game.findOne({
    state: "draft"
  })
  if (!game) {
    await interaction.reply({ content: "Game not found.", ephemeral: true });
    expireReply(interaction);
    return false;
  }
  // get user
  const user = await User.findOne({ discordId: interaction.user.id });
  if (!user) {
    await interaction.reply({ content: "What you doing bro", ephemeral: true });
    expireReply(interaction);
    return false;
  }
  // check if current message belongs to player
  let player: Player = game.players.find((player) => player.discordId === interaction.user.id) as Player
  if (!player) {
    await interaction.reply({ content: "What you doing bro", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  // check if messageid belongs to player
  if (player.messageId !== interaction.message.id) {
    await interaction.reply({ content: "What you doing bro", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  // import all civs
  const civs:string[] = [];
  Civs.forEach(async (civ: Civilization) => {
    civs.push(civ.name);
  });

  // create a banned pool of civs
  const bannedCivs:string[] = [];

  // pushes all players pools to bannedCivs and selected civ
  game.players.forEach((player) => {
    if (player.civ) bannedCivs.push(player.civ);
    bannedCivs.push(...player.pool);
  });
  
  // remove dupilcates
  const pool = civs.filter((civ) => !bannedCivs.includes(civ));

  // selects a random civ from pool for player
  player.civ = pool[Math.floor(Math.random() * pool.length)];
  player.ready = true;
  player.messageId = "";

  // push random event
  game.lobbyEvents.push({
    type: "random",
    players: [{
      discordId: player.discordId,
      name: player.name,
    }],
    civ: player.civ
  });

  // save game
  await Game.findOneAndUpdate({ state: "draft" }, game, { new: true });

  // delete messages
  const channel = await interaction.client.channels.cache.get(process.env.GAME_CHANNEL_ID)
  await channel.messages.fetch(interaction.message.id)
    .then((message: any) => message.delete());

  // send message to player of randomed civ in info channel
  const infoChannel = await interaction.client.channels.cache.get(process.env.INFO_CHANNEL_ID)
  const randomCiv = await Civ.findOne({ name: player.civ }) as Civilization;
  const info = await displayInfo(randomCiv);
  await infoChannel.send({ content: `<@${player.discordId}> ${player.name} Randomed: ${randomCiv.name}\n`, embeds: [info.embed], files: [info.file]});
  // check if all players are ready
  let allReady = true;
  for (let i = 0; i < game.players.length; i++) {
    if (!game.players[i].ready) {
      allReady = false;
      break;
    }
  }

  // if all players are ready, start game
  if (allReady) {
    game.state = "ingame";
    await Game.findOneAndUpdate({ state: "draft" }, game, { new: true })
  }

  // display game
  await displayGame(interaction, game);
  interaction.reply({ content: player.civ+" randomed.", ephemeral: true });
  expireReply(interaction);
}
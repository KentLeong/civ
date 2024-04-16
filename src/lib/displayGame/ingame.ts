import { EmbedBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder } from "discord.js";
import { Game } from "../../mongo";
import { expireReply } from "../../lib";
import { LobbyEvent, GameEvent, Player } from "../../types";

export default async (interaction:any, game: Game) => {
  let description = "```fix\n"+" ".repeat(20)+"Civ 5 - In Game "+" ".repeat(20)+"```\n";
  let playerField = "";
  let GameDetailsField = "";
  const embed = new EmbedBuilder()

  const done = new ButtonBuilder()
    .setCustomId("doneGame")
    .setLabel("Done")
    .setStyle(ButtonStyle.Success);
  const row: any = new ActionRowBuilder()
    .addComponents(done);

  // shows how long the game has been going on
  GameDetailsField += "```bash\n";
  GameDetailsField += "ModVer: "+game.settings.modVer+"\n";
  GameDetailsField += "Map: "+game.settings.map+"\n";
  if (!game.startedAt) {
    GameDetailsField += "Time: Just started";
    game.startedAt = new Date();
    await Game.findOneAndUpdate({ state: "ingame" }, game, { new: true });
  } else {
    let time = new Date().getTime() - game.startedAt.getTime();
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    GameDetailsField += "Time: "+hours+"h "+minutes+"m";
  }
  GameDetailsField += "```";
  
  // lists Game events
  GameDetailsField += "\n**Events:**"
  if (game.gameEvents.length > 0) {
    GameDetailsField += "```bash\n";
    game.gameEvents.forEach((event: GameEvent) => {
      // do stuff
    });
    GameDetailsField += "```";
  } else {
    GameDetailsField += "```bash\nNone```";
  }

  // lists notes
  GameDetailsField += "\n**Notes:**"
  if (game.notes.length > 0) {
    GameDetailsField += "```bash\n";
    game.notes.forEach((note: string, i) => {
      GameDetailsField += (i+1)+". "+note+"\n";
    });
    GameDetailsField += "```";
  } else {
    GameDetailsField += "```bash\nNone```";
  }

  // moves players to dead or alive list
  let alivePlayers: Player[] = [];
  let deadPlayers: Player[] = [];
  game.players.forEach((player) => {
    if (player.alive) {
      alivePlayers.push(player);
    } else {
      deadPlayers.push(player);
    }
  });

  // lists players that are alive
  alivePlayers.forEach((player, i) => {
    playerField += "```bash\n"+(i+1)+". "+player.name+" - "+player.civ+"\n#  ";
    playerField += player.pool.join(", ")+"```";
  });
  playerField += "\n";

  // lists players that are dead
  if (deadPlayers.length > 0) {
    playerField += "**Dead Players:**\n";
    deadPlayers.forEach((player, i) => {
      playerField += "```bash\n"+(i+1)+". "+player.name+" - "+player.civ+"\n#  ";
      playerField += player.pool.join(", ")+"```";
    });
  }

  embed.setDescription(description);
  embed.addFields([
    { name: "Details:", value: GameDetailsField, inline: true},
    { name: "Players:", value: playerField, inline: true}
  ]);
  const message = await interaction.client.channels.cache.get(process.env.GAME_CHANNEL_ID || "")?.messages.fetch(game.messageId);
  if (!message) {
    await interaction.reply({ content: "Game not found.", ephemeral: true });
    expireReply(interaction);
    return;
  }
  await message.edit({ embeds: [embed], components: [row], files: []});
}
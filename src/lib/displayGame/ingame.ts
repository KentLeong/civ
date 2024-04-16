import { EmbedBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder } from "discord.js";
import { Game } from "../../mongo";
import { GameEvent, Player } from "../../types";

export default async (interaction:any, game: Game) => {
  let s = "Game "+game.id+" - In Game";
  let t = 55 - s.length;
  let l = Math.floor(t/2);
  if (t % 2 == 0) {
    s = " ".repeat(l) + s + " ".repeat(l);
  } else {
    s = " ".repeat(l) + s + " ".repeat(l+1);
  }
  let description = "```fix\n"+s+"```\n";  
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
  GameDetailsField += "```";
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
    GameDetailsField += "```";
    game.gameEvents.forEach((event: GameEvent, i) => {
      if (event.type == "war") {
        GameDetailsField += `${event.turn}: ${event.players[0].name} 🪖 ${event.players[1].name}`
      } else if (event.type == "peace") {
        GameDetailsField += `${event.turn}: ${event.players[0].name} 🕊️ ${event.players[1].name}`
      } else if (event.type == "kill") {
        GameDetailsField += `${event.turn}: ${event.players[0].name} 🔪 ${event.players[1].name}`
      } else if (event.type == "irr") {
        GameDetailsField += `${event.turn}: ${event.players[0].name} 💀`
      } else if (event.type == "victory") {
        if (event.victoryType == "science") {
          GameDetailsField += `${event.turn}: ${event.players[0].name} 🚀`
        } else if (event.victoryType == "culture") {
          GameDetailsField += `${event.turn}: ${event.players[0].name} 🎭`
        } else if (event.victoryType == "domination") {
          GameDetailsField += `${event.turn}: ${event.players[0].name} 💥`
        } else if (event.victoryType == "diplomatic") {
          GameDetailsField += `${event.turn}: ${event.players[0].name} 🤝`
        } else if (event.victoryType == "draw") {
          event.players.forEach((player) => {
            GameDetailsField += `${event.turn}: ${player.name} 🏳️`
          });
        }
      }
      if (i !== game.gameEvents.length - 1) {
        GameDetailsField += "\n";
      }
    });
    GameDetailsField += "```";
  } else {
    GameDetailsField += "```bash\nNone```";
  }

  // lists notes
  GameDetailsField += "\n**Notes:**"
  if (game.notes.length > 0) {
    GameDetailsField += "```";
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
  await message.edit({ embeds: [embed], components: [row], files: []});
}
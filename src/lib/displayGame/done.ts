import { EmbedBuilder } from "discord.js";
import { Game } from "../../mongo";
import { expireReply, formatDate } from "../../lib";
import { GameEvent, Player } from "../../types";

export default async (interaction:any, game: Game) => {
  let s = "Game "+game.id;
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
  const victoryType = game.gameEvents[game.gameEvents.length - 1].victoryType as string;
  if (victoryType !== "draw") {
    GameDetailsField += "```fix\n"+victoryType.charAt(0).toUpperCase() + victoryType.slice(1)+" Victory```";
  } else {
    GameDetailsField += "```fix\nDraw```";
  }
  GameDetailsField += "```";
  GameDetailsField += "ModVer: "+game.settings.modVer+"\n";
  GameDetailsField += "Map: "+game.settings.map+"\n";
  let time = game.endedAt.getTime() - game.startedAt.getTime();
  let hours = Math.floor(time / 3600000);
  let minutes = Math.floor((time % 3600000) / 60000);
  GameDetailsField += "Time: "+hours+"h "+minutes+"m";
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
          event.players.forEach((player, i) => {
            GameDetailsField += `${event.turn}: ${player.name} 🏳️`
            if (i !== event.players.length - 1) {
              GameDetailsField += "\n";
            }
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
  if (alivePlayers.length === 1) {
    playerField += "```bash\n👑 "+alivePlayers[0].name+" - "+alivePlayers[0].civ+"\n#  ";
    playerField += alivePlayers[0].pool.join(", ")+"```";
    playerField += "\n";

  } else {
    alivePlayers.forEach((player) => {
      playerField += "```bash\n🏳️ "+player.name+" - "+player.civ+"\n#  ";
      playerField += player.pool.join(", ")+"```";
    });
    playerField += "\n";
  }

  // lists players that are dead
  if (deadPlayers.length > 0) {
    playerField += "**Dead Players:**\n";
    deadPlayers.forEach((player, i) => {
      playerField += "```bash\n"+(i+1)+". "+player.name+" - "+player.civ+"\n#  ";
      playerField += player.pool.join(", ")+"```";
    });
  }

  // get match channel
  const channel = interaction.client.channels.cache.get(process.env.MATCH_CHANNEL_ID || "");
  if (!channel) {
    await interaction.reply({ content: "Channel not found", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  embed.setDescription(description);
  embed.addFields([
    { name: "Details:", value: GameDetailsField, inline: true},
    { name: "Players:", value: playerField, inline: true}
  ]);

  embed.setFooter({ text: "Started at: "+formatDate(game.startedAt)});
  await channel.send({ embeds: [embed] }).then(async (msg: any) => {
    game.messageId = msg.id;
    await Game.findOneAndUpdate({ messageId: interaction.message.id }, game, { new: true });
  });
}
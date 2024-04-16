import { AttachmentBuilder, EmbedBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder } from "discord.js";
import { Game } from "../../mongo";
import { expireReply } from "../../lib";
import { LobbyEvent, GameEvent, Player } from "../../types";

export default async (interaction:any, game: Game) => {
  let description = "```fix\n"+" ".repeat(15)+"Civ 5 - In Game "+" ".repeat(15)+"```\n";
  let playerField = "";
  let GameDetailsField = "";
  const file = new AttachmentBuilder("src/assets/civ5.png");
  const embed = new EmbedBuilder()
    .setThumbnail("attachment://civ5.png")
  
  const cancel = new ButtonBuilder()
    .setCustomId("cancelGame")
    .setLabel("Cancel Game")
    .setStyle(ButtonStyle.Danger);

  const done = new ButtonBuilder()
    .setCustomId("doneGame")
    .setLabel("Done")
    .setStyle(ButtonStyle.Success);
  const row: any = new ActionRowBuilder()
    .addComponents(cancel, done);

  // shows how long the game has been going on
  GameDetailsField += "```bash\n";
  if (!game.startedAt) {
    GameDetailsField += "Game Duration: Just started";
  } else {
    let time = new Date().getTime() - game.startedAt.getTime();
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    GameDetailsField += "Game Duration: "+hours+"h "+minutes+"m";
  }
  GameDetailsField += "```";
  
  
  // lists lobby events
  if (game.lobbyEvents.length > 0) {
    GameDetailsField += "```bash\n";
    game.lobbyEvents.forEach((event: LobbyEvent) => {
      if (event.type == "select") {
        GameDetailsField += "\n#  "+event.players[0].name+" selected "+event.civ;
      } else if (event.type == "random") {
        GameDetailsField += "\n#  "+event.players[0].name+" randomed "+event.civ;
      } else if (event.type == "trade") {
        GameDetailsField += "\n#  "+event.players[0].name+" traded with "+event.players[1].name;
      }
    });
    GameDetailsField += "```";
  }
  
  // lists Game events
  if (game.gameEvents.length > 0) {
    GameDetailsField += "```bash\n";
    game.gameEvents.forEach((event: GameEvent) => {
      // do stuff
    });
    GameDetailsField += "```";
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
  deadPlayers.forEach((player, i) => {
    playerField += "```bash\n"+(i+1)+". "+player.name+" - "+player.civ+"\n#  ";
    playerField += player.pool.join(", ")+"```";
  });

  embed.setDescription(description);
  embed.addFields([
    { name: "Game Details", value: GameDetailsField, inline: true},
    { name: "Players", value: playerField, inline: true}
  ]);
  const message = await interaction.client.channels.cache.get(process.env.GAME_CHANNEL_ID || "")?.messages.fetch(game.messageId);
  if (!message) {
    await interaction.reply({ content: "Game not found.", ephemeral: true });
    expireReply(interaction);
    return;
  }
  await message.edit({ embeds: [embed], files: [file], components: [row]});
}
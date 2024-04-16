import { AttachmentBuilder, EmbedBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder } from "discord.js";
import { Game } from "../../mongo";
import { expireReply } from "../../lib";
import { LobbyEvent } from "../../types";

export default async (interaction:any, game: Game) => {
  let s = "Game "+game.id+" - Drafting";
  let t = 46 - s.length;
  let l = Math.floor(t/2);
  if (t % 2 == 0) {
    s = " ".repeat(l) + s + " ".repeat(l);
  } else {
    s = " ".repeat(l) + s + " ".repeat(l+1);
  }
  let description = "```fix\n"+s+"```\n";  
  const file = new AttachmentBuilder("src/assets/civ5.png");
  const embed = new EmbedBuilder()
    .setThumbnail("attachment://civ5.png")
  
  const revert = new ButtonBuilder()
    .setCustomId("revertLobby")
    .setLabel("Back")
    .setStyle(ButtonStyle.Danger);

  const row: any = new ActionRowBuilder()
    .addComponents(revert);

  // lists lobby events
  if (game.lobbyEvents.length > 0) {
    description += "```bash\n";
    game.lobbyEvents.forEach((event: LobbyEvent) => {
      if (event.type == "select") {
        description += "\n#  "+event.players[0].name+" selected "+event.civ;
      } else if (event.type == "random") {
        description += "\n#  "+event.players[0].name+" randomed "+event.civ;
      } else if (event.type == "trade") {
        description += "\n#  "+event.players[0].name+" traded with "+event.players[1].name;
      }
    });
    description += "```";
  }

  // lists the banned civs
  const bans:string[] = []
  description += "```bash\n#  Banned: ";
  game.players.forEach((player) => {
    if (player.bans.length > 0) {
      bans.push(...player.bans);
    }
  });
  // remove duplicates
  bans.filter((value, index) => bans.indexOf(value) === index);
  description += bans.join(", ")+"```";

  // lists the players and their pools
  game.players.forEach((player, i) => {
    if (player.ready) {
      description += "```bash\n"+(i+1)+". "+player.name+" - "+player.civ+" ✅\n#  ";
    } else {
      description += "```bash\n"+(i+1)+". "+player.name+"\n#  ";
    }
    description += player.pool.join(", ")+"```";
  });
  description += "\nYou can trade with other players with `/trade @player`.";
  embed.setDescription(description);
  const message = await interaction.client.channels.cache.get(process.env.GAME_CHANNEL_ID || "")?.messages.fetch(game.messageId);
  if (!message) {
    await interaction.reply({ content: "Game not found.", ephemeral: true });
    expireReply(interaction);
    return;
  }
  await message.edit({ embeds: [embed], components: [row], files: [file]});
}
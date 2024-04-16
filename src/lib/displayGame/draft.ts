import { AttachmentBuilder, EmbedBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder } from "discord.js";
import { Game } from "../../mongo";
import { expireReply } from "../../lib";

export default async (interaction:any, game: Game) => {
  let description = "```fix\n"+" ".repeat(14)+"Civ 5 - Drafting "+" ".repeat(14)+"```\n";
  const file = new AttachmentBuilder("src/assets/civ5.png");
  const embed = new EmbedBuilder()
    .setThumbnail("attachment://civ5.png")
  
  const revert = new ButtonBuilder()
    .setCustomId("revertLobby")
    .setLabel("Back")
    .setStyle(ButtonStyle.Danger);

  const row: any = new ActionRowBuilder()
    .addComponents(revert);

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
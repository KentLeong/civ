import { EmbedBuilder, AttachmentBuilder } from "discord.js";
import { Game } from "../../mongo";
import expireReply from "../expireReply";

export default async (interaction: any, game: Game) => {
  let description = "```fix\n"+" ".repeat(16)+"Civ 5 - Lobby "+" ".repeat(16)+"```\n";
  const file = new AttachmentBuilder("src/assets/civ5.png");
  const embed = new EmbedBuilder()
    .setThumbnail("attachment://civ5.png")
  game.players.forEach((player, i) => {
    description += "```bash\n"+(i+1)+". "+player.name;
    if (player.bans.length == 0) {
      description += "\n# Bans: None```";
    } else {
      description += "\n# Bans: "+player.bans.join(", ")+"```";
    }
  });
  description += "\nYou can have up to two bans using the `/ban` command."
  embed.setDescription(description);
  const message = await interaction.client.channels.cache.get(process.env.GAME_CHANNEL_ID || "")?.messages.fetch(game.messageId);
  if (!message) {
    await interaction.reply({ content: "Game not found.", ephemeral: true });
    expireReply(interaction);
    return;
  }
  await message.edit({ embeds: [embed], files: [file]});
}
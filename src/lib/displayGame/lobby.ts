import { EmbedBuilder, AttachmentBuilder } from "discord.js";
import { Game } from "../../mongo";

export default async (interaction: any, game: Game) => {
  let description = "```fix\n"+" ".repeat(20)+"Civ 5 "+" ".repeat(20)+"```\n";
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
  await interaction.message?.edit({ embeds: [embed], files: [file]});
}
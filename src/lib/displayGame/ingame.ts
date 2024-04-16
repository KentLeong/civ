import { AttachmentBuilder, EmbedBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder } from "discord.js";
import { Game } from "../../mongo";
import { expireReply } from "../../lib";

export default async (interaction:any, game: Game) => {
  let description = "```fix\n"+" ".repeat(15)+"Civ 5 - In Game "+" ".repeat(15)+"```\n";
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

  
}
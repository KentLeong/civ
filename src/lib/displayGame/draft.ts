import { AttachmentBuilder, EmbedBuilder, ButtonStyle, ButtonBuilder, ActionRowBuilder } from "discord.js";
import { Game } from "../../mongo";

export default async (interaction:any, game: Game) => {
  let description = "```fix\n"+" ".repeat(20)+"Civ 5 "+" ".repeat(20)+"```\n";
  const file = new AttachmentBuilder("src/assets/civ5.png");
  const embed = new EmbedBuilder()
    .setThumbnail("attachment://civ5.png")
  
  const revert = new ButtonBuilder()
    .setCustomId("revertLobby")
    .setLabel("Back")
    .setStyle(ButtonStyle.Danger);
  const redraft = new ButtonBuilder()
    .setCustomId("redraftLobby")
    .setLabel("Redraft")
    .setStyle(ButtonStyle.Danger);
  const ready = new ButtonBuilder()
    .setCustomId("readyLobby")
    .setLabel("Ready")
    .setStyle(ButtonStyle.Success);

  const row: any = new ActionRowBuilder()
    .addComponents(revert, redraft, ready);

  game.players.forEach((player, i) => {
    if (player.civ == "") {
      description += "```bash\n"+(i+1)+". "+player.name+"\n# ";
    } else if (!player.ready) {
      description += "```bash\n"+(i+1)+". "+player.name+" - "+player.civ+"\n# ";
    } else {
      description += "```bash\n"+(i+1)+". "+player.name+" - "+player.civ+" ✅\n# ";
    }
    player.pool.forEach((civ: string) => {
      description += (i+1)+". "+civ;
    });
    description += "```";
  });
  description += "\nYou can set your bans by using the /ban command.";
}
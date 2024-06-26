import { EmbedBuilder, AttachmentBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ButtonInteraction } from "discord.js";
import { Game } from "../../mongo";

export default async (interaction: ButtonInteraction, game: Game) => {
  let s = "Game "+game.id+" - Lobby";
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
  const join = new ButtonBuilder()
    .setCustomId("joinLobby")
    .setLabel("Join")
    .setStyle(ButtonStyle.Primary);

  const leave = new ButtonBuilder()
    .setCustomId("leaveLobby")
    .setLabel("Leave")
    .setStyle(ButtonStyle.Danger);

  const draft = new ButtonBuilder()
    .setCustomId("draftLobby")
    .setLabel("Draft")
    .setStyle(ButtonStyle.Success);

  const row: any = new ActionRowBuilder()
    .addComponents(join, leave, draft);

  game.players.forEach((player, i) => {
    description += "```bash\n"+(i+1)+". "+player.name;
    if (player.bans.length == 0) {
      description += "\n# Bans: None```";
    } else {
      description += "\n# Bans: "+player.bans.join(", ")+"```";
    }
  });
  description += "\nYou can set your bans by using the /ban command.";
  embed.setDescription(description);
  await interaction.channel?.send({ embeds: [embed], components: [row], files: [file]})
    .then(async (msg: any) => {
      game.messageId = msg.id;
      game.state = "lobby";
      const newGame = await Game.create(game);
      await newGame.save();
    });
}
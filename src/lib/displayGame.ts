import { AttachmentBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } from "discord.js";
import { Game } from "../mongo";

export default async (interaction:any, game: Game): Promise<void> => {
  const file = new AttachmentBuilder("src/assets/civ5.png");

  const embed = new EmbedBuilder()
    .setThumbnail("attachment://civ5.png")
  let description = "";
  if (game.state == "init") {
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

    embed.setTitle("Civ5 - Lobby")
    game.players.forEach((player, i) => {
      description += "```"+(i+1)+". "+player.name+"```"
    });
    description += "You can set your bans by using the /ban command.";
    embed.setDescription(description);
    await interaction.channel?.send({ embeds: [embed], components: [row], files: [file]})
      .then(async (msg: any) => {
        game.messageId = msg.id;
        game.state = "lobby";
        const newGame = await Game.create(game);
        await newGame.save();
      });
  } else if (game.state === "lobby") {
    embed.setTitle("Civ5 - Lobby")
    game.players.forEach((player, i) => {
      description += "```"+(i+1)+". "+player.name+"```"
    });
    description += "You can set your bans by using the /ban command."
    embed.setDescription(description);
    await interaction.message?.edit({ embeds: [embed] });
  } else if (game.state === "draft") {

  } else if (game.state === "ingame") {

  } else {

  }
}
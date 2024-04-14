import { EmbedBuilder } from "discord.js";
import { Game } from "../types";

export default async (game: Game): Promise<EmbedBuilder> => {
  const embed = new EmbedBuilder()
  let description = "";
  if (game.state === "lobby") {
    embed.setTitle("Civ5 - Lobby")
    game.players.forEach((player, i) => {
      description += "```"+(i+1)+". "+player.name+" - "+player.bans[0]+"```"
    });
    description += "You can set your bans by using the /ban command."
  } else if (game.state === "draft") {

  } else if (game.state === "ingame") {

  } else {

  }

  embed.setDescription(description);
  return embed;
}
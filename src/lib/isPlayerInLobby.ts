import { Game } from "../types";

export default async (game: Game, interaction: any): Promise<boolean> => {
  const playerExists = game.players.find((player) => player.discordId === interaction.user.id);
  return playerExists ? true : false;
}
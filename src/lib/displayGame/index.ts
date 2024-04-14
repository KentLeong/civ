import { Game } from "../../mongo";
import init  from './init';
import lobby from "./lobby";

const states:Record<string, any> = {
  "init": init,
  "lobby": lobby,
}

export default async (interaction:any, game: Game) => {
  return states[game.state](interaction, game);
}
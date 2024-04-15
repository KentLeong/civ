import { Game } from "../../mongo";
import init  from './init';
import lobby from "./lobby";
import draft from "./draft";

const states:Record<string, any> = {
  "init": init,
  "lobby": lobby,
  "draft": draft,
}

export default async (interaction:any, game: Game) => {
  return states[game.state](interaction, game);
}
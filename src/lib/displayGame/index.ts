import { Game } from "../../mongo";
import init  from './init';
import lobby from "./lobby";
import draft from "./draft";
import ingame from "./ingame";
import done from "./done";

const states:Record<string, any> = {
  "init": init,
  "lobby": lobby,
  "draft": draft,
  "ingame": ingame,
  "done": done
}

export default async (interaction:any, game: Game) => {
  return states[game.state](interaction, game);
}
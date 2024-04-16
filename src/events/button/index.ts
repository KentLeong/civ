import { expireReply } from "../../lib";
import joinLobby from "./joinLobby";
import leaveLobby from "./leaveLobby";
import draftLobby from "./draftLobby";
import revertLobby from "./revertLobby";
import backInfo from "./backInfo";
import nextInfo from "./nextInfo";
import selectCiv from "./selectCiv";
import randomCiv from "./randomCiv";
import doneGame from "./doneGame";

const buttons:Record<string, any> = {
  "joinLobby": joinLobby,
  "leaveLobby": leaveLobby,
  "draftLobby": draftLobby,
  "revertLobby": revertLobby,
  "backInfo": backInfo,
  "nextInfo": nextInfo,
  "selectCiv": selectCiv,
  "randomCiv": randomCiv,
  "doneGame": doneGame
}

export default (interaction: any) => {
  let id = interaction.customId;
  if (buttons[id]) {
    buttons[id](interaction);
  } else {
    interaction.reply({ content: "Button not found.", ephemeral: true});
    expireReply(interaction);
  }
}
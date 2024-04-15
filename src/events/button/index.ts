import { expireReply } from "../../lib";
import joinLobby from "./joinLobby";
import leaveLobby from "./leaveLobby";
import draftLobby from "./draftLobby";
import redraftLobby from "./redraftLobby";
import revertLobby from "./revertLobby";

const buttons:Record<string, any> = {
  "joinLobby": joinLobby,
  "leaveLobby": leaveLobby,
  "draftLobby": draftLobby,
  "redraftLobby": redraftLobby,
  "revertLobby": revertLobby,
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
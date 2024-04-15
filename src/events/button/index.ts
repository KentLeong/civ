import { expireReply } from "../../lib";
import joinLobby from "./joinLobby";
import leaveLobby from "./leaveLobby";
import draftLobby from "./draftLobby";

const buttons:Record<string, any> = {
  "joinLobby": joinLobby,
  "leaveLobby": leaveLobby,
  "draftLobby": draftLobby,
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
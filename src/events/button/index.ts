import joinLobby from "./joinLobby";
import leaveLobby from "./leaveLobby";

const buttons:Record<string, any> = {
  "joinLobby": joinLobby,
  "leaveLobby": leaveLobby
}

export default (interaction: any) => {
  let id = interaction.customId;
  if (buttons[id]) {
    buttons[id](interaction);
  } else {
    interaction.reply("Button not found.");
  }
}
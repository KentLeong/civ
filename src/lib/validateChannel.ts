const INFO_CHANNEL = process.env.INFO_CHANNEL_ID;
const GAME_CHANNEL = process.env.GAME_CHANNEL_ID;
const MATCH_CHANNEL = process.env.MATCH_CHANNEL_ID;

type channelType = "info" | "game" | "match";
export default (interaction: any, type: channelType): Boolean => {
  const channel = interaction.channel.id;
  if (type === "info" && channel === INFO_CHANNEL) {
    return true;
  } else if (type === "game" && channel === GAME_CHANNEL) {
    return true;
  } else if (type === "match" && channel === MATCH_CHANNEL) {
    return true;
  }
  return false;
}
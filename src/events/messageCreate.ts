import { Events } from "discord.js";

const GAME_CHANNEL = process.env.GAME_CHANNEL_ID || "";

module.exports = {
  name: Events.MessageCreate,
  execute(msg: any) {
    if (msg.channelId === GAME_CHANNEL && !msg.interaction && !msg.author.bot) msg.delete();
  },
}
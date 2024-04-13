import dotenv from "dotenv";
dotenv.config();
import { Client, Events, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: GatewayIntentBits.Guilds,
});

client.on(Events.ClientReady, () => {
  console.log("Ready!");
});

client.login(process.env.DISCORD_TOKEN);
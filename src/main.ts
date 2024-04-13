import dotenv from "dotenv";
dotenv.config();
import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
import fs from "fs";
import path from "node:path";

interface Command {
  name: string;
  description: string;
  execute: (interaction: any) => Promise<void>;
}

class CommandClient extends Client {
  commands: Collection<string, Command> = new Collection();

  constructor() {
    super({
      intents: GatewayIntentBits.Guilds,
    });
    this.commands = new Collection();
  }
}

const client = new CommandClient();

client.on(Events.ClientReady, () => {
  console.log("Ready!");
});

client.login(process.env.DISCORD_TOKEN);
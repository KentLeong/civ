import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
import { Command } from "./types";

// extends client class to add a commands collection
export class CommandClient extends Client {
  commands: Collection<string, Command> = new Collection();

  constructor() {
    super({
      intents: GatewayIntentBits.Guilds,
    });
    this.commands = new Collection();
  }
}
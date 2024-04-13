import dotenv from "dotenv";
dotenv.config();
import { CommandClient } from "./client";
import { Events } from "discord.js";
import { readdirSync} from "fs";
import { join } from "path";
import { Command } from "./types";

const client = new CommandClient();
// reads all files in the commands folder and filters out the ones that end with .ts or .js
const commandFiles = readdirSync(join(__dirname, "commands"))
  .filter(file => file.endsWith(".ts") || file.endsWith(".js"));

// for each file, require the file and add the command to the client.commands collection
for (const file of commandFiles) {
  const command: Command = require(join(__dirname, "commands", file)).default;
  client.commands.set(command.name, command);
}

client.on(Events.ClientReady, () => {
  console.log("Ready!");
});

client.login(process.env.DISCORD_TOKEN);
import dotenv from "dotenv";
dotenv.config();
import { REST, Routes } from "discord.js";
import fs from "fs";
import path from "path";

const commands: any = [];
const foldersPath = path.join(__dirname, "..", 'commands');
const commandFolders = fs.readdirSync(foldersPath);

const DiscordToken: string = process.env.DISCORD_TOKEN || "";
const ClientID: string = process.env.CLIENT_ID || "";
const GuildID: string = process.env.GUILD_ID || "";

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js') || file.endsWith('.ts'));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if (!command.data || !command.execute) {
      throw new Error(`Command ${file} is missing a data or execute property`);
    }
    commands.push(command.data.toJSON());
  }
}

const rest = new REST({ version: "10" }).setToken(DiscordToken);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    commands.forEach(async (command: any) => {
      console.log(`Registering ${command.name}`);
    });

    await rest.put(Routes.applicationGuildCommands(ClientID, GuildID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
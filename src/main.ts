import dotenv from "dotenv";
dotenv.config();
import { CommandClient } from "./models/client";
import { Events } from "discord.js";
import fs from "fs";
import path from "path";

const client = new CommandClient();
// registers all commands
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    if (!command.data || !command.execute) {
      throw new Error(`Command ${file} is missing a data or execute property`);
    }

    client.commands.set(command.data.name, command);
  }
}

client.on(Events.ClientReady, () => {
  console.log("Ready!");
});


// handles command interactions
client.on(Events.InteractionCreate, async interaction => {
  console.log("hello")
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  const command = client.commands.get(commandName);

  if (!command) return;

  try {
    await command.execute(interaction, interaction.options);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: "There was an error while executing this command!", ephemeral: true });
  }
});

client.login(process.env.DISCORD_TOKEN);
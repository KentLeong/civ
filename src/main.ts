import dotenv from "dotenv";
dotenv.config();
import { CommandClient } from "./models/client";
import { Events } from "discord.js";
import fs from "fs";
import path from "path";

console.log("Starting bot...");

const client = new CommandClient();
// registers all commands
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    console.log("Registering command: " + file)
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    if (!command.data || !command.execute) {
      throw new Error(`Command ${file} is missing a data or execute property`);
    }

    client.commands.set(command.data.name, command);
  }
}

// handles bot events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js') || file.endsWith('.ts'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (!event.name || !event.execute) {
    throw new Error(`Event ${file} is missing a name or execute property`);
  }
  if (event.once) {
    client.once(event.name, (...args) => event.execute(client, ...args));
  } else {
    client.on(event.name, (...args) => event.execute(client, ...args));
  }
}

// handles command interactions
client.on(Events.InteractionCreate, async interaction => {
  if (interaction.isChatInputCommand()) {
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
  } else if (interaction.isAutocomplete()) {
		const command:any = client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.autocomplete(interaction);
		} catch (error) {
			console.error(error);
		}
  }

});

client.login(process.env.DISCORD_TOKEN || "");
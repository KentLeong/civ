import { Events } from "discord.js";
import buttonHandler from "./button";

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction: any) {
    if (interaction.isChatInputCommand()) {
      const { commandName } = interaction;
      const command = interaction.client.commands.get(commandName);
      if (!command) return;
      try {
        await command.execute(interaction, interaction.options);
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: "There was an error while executing this command!", ephemeral: true });
      }
    } else if (interaction.isAutocomplete()) {
      const command:any = interaction.client.commands.get(interaction.commandName);
  
      if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
      }
      try {
        await command.autocomplete(interaction);
      } catch (error) {
        console.error(error);
      }
    } else if (interaction.isButton()) {
      await buttonHandler(interaction)
    }
  },
}
import { AttachmentBuilder, EmbedBuilder, SlashCommandBuilder, ChatInputCommandInteraction, AutocompleteInteraction } from "discord.js";
import { Civ } from "../../mongo";
import { Civs } from "../../assets/civs";
import { Civilization } from "../../types";
import { expireReply, displayInfo, validateChannel } from "../../lib";

const civs:string[] = []
Civs.forEach((civ:Civilization) => {
  civs.push(civ.name);
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Gives info of civs.")
    .addStringOption(option =>
      option.setName("civ")
        .setDescription("The name of the civilization")
        .setAutocomplete(true)
        .setRequired(true)
    ),
  async autocomplete(interaction: AutocompleteInteraction) {
    const focusedValue = interaction.options.getFocused()?.toLocaleLowerCase();
    if (!focusedValue) return;

    const civsLowerCase = civs.map(civ => civ.toLowerCase());
    const filtered = civsLowerCase.filter(civ => civ.startsWith(focusedValue));
    const suggestions = filtered.map(civLowerCase => {
      const originalCiv = civs[civsLowerCase.indexOf(civLowerCase)];
      return { name: originalCiv, value: originalCiv };
    });
  
    await interaction.respond(suggestions);
  },
  async execute(interaction: ChatInputCommandInteraction) {
    if (!validateChannel(interaction, "info")) {
      await interaction.reply({ content: "Invalid channel.", ephemeral: true });
      expireReply(interaction);
      return;
    }
    const opt = interaction.options.getString("civ") || "";

    const civ = await Civ.findOne({
      name: opt
    });
    if (!civ) {
      await interaction.reply({ content: "Civ not found.", ephemeral: true });
      expireReply(interaction);
      return;
    }
    const info = await displayInfo(civ);
    await interaction.channel?.send({ embeds: [info.embed], files: [info.file]});
    (await interaction.deferReply({ ephemeral: true })).delete();
  },
}
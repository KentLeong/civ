import { SlashCommandBuilder, ChatInputCommandInteraction, AutocompleteInteraction } from "discord.js";
import { Civ } from "../../mongo";
import { Civs } from "../../data/civs";
import { Civilization } from "../../types";

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
    const opt = interaction.options.getString("civ") || "";
    await interaction.reply(opt);

    const civ = await Civ.findOne({
      name: opt
    });

    console.log(civ);
  },
}
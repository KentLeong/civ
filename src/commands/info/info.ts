import { AttachmentBuilder, EmbedBuilder, SlashCommandBuilder, ChatInputCommandInteraction, AutocompleteInteraction } from "discord.js";
import { Civ } from "../../mongo";
import { Civs } from "../../assets/civs";
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

    const civ = await Civ.findOne({
      name: opt
    });
    if (!civ) {
      await interaction.reply("Civ not found");
      return;
    }

    //remove spaces
    let civName = civ.name.replace(/ /g, "");
    const file = new AttachmentBuilder("src/data/icons/cb_"+civName.toLowerCase()+".png");

    const embed = new EmbedBuilder()
      .setTitle(civ.name +" - " + civ.leader)
      .setThumbnail("attachment://cb_"+civName.toLowerCase()+".png")

    // Bias and Avoid
    let description = "```Bias: None";
    if (civ.bias.length > 0) {
      description = "```Bias: " + civ.bias.join(", ");
    }
    if (civ.avoid.length > 0) {
      description += "\nAvoid: " + civ.avoid.join(", ");
    }
    description += "```\n";

    // Ability Name
    let t = 46 - civ.ability.name.length;
    let l = Math.floor(t/2);
    if (t % 2 == 0) {
      description += "```fix\n" + " ".repeat(l) +civ.ability.name + " ".repeat(l) + "```";
    } else {
      description += "```fix\n" + " ".repeat(l) +civ.ability.name + " ".repeat(l+1) + "```";
    }

    // Ability Description
    description += "```"+civ.ability.description + "```\n";

    // Uniques
    civ.unique.forEach((unique:any) => {
      // unique type + replacement
      if (unique.replaces == "Nothing") {
        unique.replaces = "Unique";
      }
      let t = 46 - unique.name.length - unique.replaces.length - 3;
      let l = Math.floor(t/2);
      if (t % 2 == 0) {
        description += "```fix\n" + " ".repeat(l) + unique.name + " - "+unique.replaces + " ".repeat(l)+"```";
      } else {
        description += "```fix\n" + " ".repeat(l) + unique.name + " - "+unique.replaces + " ".repeat(l+1)+"```";
      }

      // unique description
      description += "```"+unique.description + "```\n";
    });
    embed.setDescription(description);
    await interaction.reply({ embeds: [embed], files: [file]});
    console.log(civ);
  },
}
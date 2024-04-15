import { EmbedBuilder, AttachmentBuilder } from "discord.js";
import { Civilization } from "../types";

export default async (civ: Civilization):Promise<InfoFormat> => {
  //remove spaces
  let civName = civ.name.replace(/ /g, "");
  const file = new AttachmentBuilder("src/assets/icons/cb_"+civName.toLowerCase()+".png");

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

  const info:InfoFormat = {
    embed: embed,
    file: file
  }
  return info;
}

interface InfoFormat {
  embed: any;
  file: any;
}
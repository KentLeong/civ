import { Civ } from "../main";
import { Civs } from "../data/civs";
import { Civilization } from "../types";

export const importCivs = async () => {
  await Civs.forEach(async (civ: Civilization) => {
    try {
      const existingCiv = await Civ.findOne({ name: civ.name });
      if (existingCiv) {
        Civ.deleteOne({
          name: civ.name
        });
      }
      const newCiv = await Civ.create(civ);
      await newCiv.save();
    } catch (error) {
      console.error(error);
    }
  });
}
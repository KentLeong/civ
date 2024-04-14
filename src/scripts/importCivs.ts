import dotenv from "dotenv";
dotenv.config();
import { Civ } from "../mongo";
import { Civs } from "../assets/civs";
import { Civilization } from "../types";

console.log("Importing civs...");
try {
  Civs.forEach(async (civ: Civilization) => {
    console.log("Importing civ: " + civ.name)
    try {
      const existingCiv = await Civ.findOne({ name: civ.name });
      if (existingCiv) {
        await Civ.deleteOne({
          name: civ.name
        });
      }
      const newCiv = await Civ.create(civ);
      await newCiv.save();
    } catch (error) {
      console.error(error);
    }
  });
} catch (error) {
  console.error(error);
}
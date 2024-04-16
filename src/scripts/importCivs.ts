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
        // update the civ if found
        await Civ.updateOne({ name: civ.name }, civ);
      } else {
        // create the civ if not found
        const newCiv = await Civ.create(civ);
        await newCiv.save();
      }
    } catch (error) {
      console.error(error);
    }
  });
} catch (error) {
  console.error(error);
}
import mongoose from "mongoose";
import { CivSchema } from "./models/civ";
import { Civilization } from "./types";

var mongo: mongoose.Connection;
var Civ: mongoose.Model<Civilization>

try {
  mongo = mongoose.createConnection(process.env.MONGO_CRED || "").useDb("civ");
  Civ = mongo?.model("Civilizations", CivSchema);
} catch (error) {
  console.error(error);
}

export {
  mongo,
  Civ
}
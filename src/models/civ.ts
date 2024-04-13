import mongoose from "mongoose";
import { Civilization } from "../types";

const CivSchema = new mongoose.Schema<Civilization>({
  name: String,
  leader: String,
  ability: {
    name: String,
    description: String,
  },
  unique: [
    {
      type: String,
      name: String,
      replaces: String,
      description: String,
    },
  ],
  bias: [String],
  avoid: [String],
});

module.exports = mongoose.model<Civilization>("Civ", CivSchema);
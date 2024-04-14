import mongoose from "mongoose";
import { Civilization } from "../types";

export const CivSchema = new mongoose.Schema<Civilization>({
  name: {type: String, unique: true, required: true},
  leader: String,
  ability: {
    name: String,
    description: String,
  },
  unique: [{
    type: Object,
    value: {
      type: String,
      name: String,
      replaces: String,
      description: String,
    }
  }],
  bias: [String],
  avoid: [String],
});
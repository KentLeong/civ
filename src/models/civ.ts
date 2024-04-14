import mongoose from "mongoose";
import { Civilization } from "../types";

// const uniqueSchema = new mongoose.Schema({
//   type: String,
//   name: String,
//   replaces: String,
//   description: String
// });

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

// export default mongoose.model<Civilization>("Civilization", CivSchema);
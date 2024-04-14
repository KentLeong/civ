import mongoose from "mongoose";
import { Game } from "../types";

export const GameSchema = new mongoose.Schema<Game>({
  id: {type: String, unique: true, required: true},
  host: {type: String, required: true},
  state: String,
  mode: String,
  players: [{
    type: Object,
    value: {
      name: String,
      discordId: String,
      bans: [String],
      civ: String,
      team: Number,
      pool: [String]
    }
  }],
  season: {type: Number, required: true},
  turn: Number,
  startedAt: Date,
  endedAt: Date,
  gameLength: Number,
  outcome: String,
  ranked: Boolean,
  modVer: String,
});
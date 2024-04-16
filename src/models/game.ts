import mongoose from "mongoose";
import { Game } from "../types";

export const GameSchema = new mongoose.Schema<Game>({
  id: {type: String, unique: true, required: true},
  messageId: String,
  host: {type: String, required: true},
  state: {type: String, required: true},
  startedAt: Date,
  lobbyEvents: [{
    type: Object,
    value: {
      type: String,
      players: [{
        type: Object,
        value: {
          name: String,
          discordId: String
        }
      }],
      civ: String
    }
  }],
  notes: [String],
  gameEvents: [{
    type: Object,
    value: {
      type: String,
      turn: Number,
      players: [{
        type: Object,
        value: {
          name: String,
          discordId: String
        }
      }]
    }
  }],
  players: [{
    type: Object,
    value: {
      name: {type: String, required: true},
      discordId: {type: String, required: true},
      bans: [String],
      civ: String,
      alive: Boolean,
      team: Number,
      pool: [String],
      trade: [String],
      ready: Boolean,
      messageId: String,
      selected: Number
    }
  }],
  settings: {
    type: Object,
    value: {
      bans: Number,
      mode: String,
      ranked: Boolean,
      modVer: String,
      map: String,
      pool: Number
    }
  }
});
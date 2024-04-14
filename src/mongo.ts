import mongoose from "mongoose";
import { CivSchema } from "./models/civ";
import { UserSchema } from "./models/user";
import { GameSchema } from "./models/game";
import { Civilization, User, Game } from "./types";

var mongo: mongoose.Connection;
var Civ: mongoose.Model<Civilization>;
var User: mongoose.Model<User>;
var Game: mongoose.Model<Game>;

try {
  mongo = mongoose.createConnection(process.env.MONGO_CRED || "").useDb("civ");
  Civ = mongo?.model("Civilizations", CivSchema);
  User = mongo?.model("Users", UserSchema);
  Game = mongo?.model("Games", GameSchema);
} catch (error) {
  console.error(error);
}

export {
  mongo,
  Civ,
  User,
  Game
}
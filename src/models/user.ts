import mongoose from "mongoose";
import { User } from "../types";

export const UserSchema = new mongoose.Schema<User>({
  name: {type: String, unique: true, required: true},
  discordId: {type: String, unique: true, required: true},
});
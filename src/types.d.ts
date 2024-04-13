import { CommandInteraction } from "discord.js";

export interface Command {
  name: string;
  description: string;
  execute: (msg: any, args: any) => Promise<void>;
}

export interface Civilization {
  name: string;
  leader: string;
  ability: {
    name: string;
    description: string;
  };
  unique: {
    type: UniqueType;
    name: string;
    description: string;
  }[];
  bias: Bias;
}
type UniqueType = "Building" | "Unit";
type Bias = "None" | "Aggressive" | "Defensive" | "Expansionist" | "Cultural" | "Scientific" | "Religious";
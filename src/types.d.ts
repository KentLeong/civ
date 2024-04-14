import { CommandInteraction } from "discord.js";

export interface Command {
  name: string;
  description: string;
  execute: (msg: any, args: any) => Promise<void>;
}

export interface User {
  name: string;
  discordId: string;
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
    replaces: string;
    description: string;
  }[];
  bias: Terrain[];
  avoid: Terrain[];
}
export type UniqueType = "Building" | "Unit" | "Improvement" | "Great Person" | "Promotion";
export type Terrain = "Hills" | "Desert" | "Jungle" | "Tundra" | "Coast" | "Forest" | "Plains" | "Grassland" | "Wetlands" | "River";
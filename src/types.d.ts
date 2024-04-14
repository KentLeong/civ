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

export interface Game {
  id: string;
  host: string;
  state: string;
  mode: string;
  players: Player[];
  season: number;
  turn: number;
  startedAt: Date;
  endedAt: Date;
  gameLength: number;
  outcome: string;
  ranked: boolean;
  modVer: string;
}

export interface Player {
  name: string;
  discordId: string;
  bans: string[];
  civ: string;
  team: number;
  pool: string[];
}

export interface Civilization {
  name: string;
  leader: string;
  ability: CivAbility;
  unique: CivUnique[];
  bias: Terrain[];
  avoid: Terrain[];
}

export interface CivAbility {
  name: string;
  description: string;
}

export interface CivUnique {
  type: UniqueType;
  name: string;
  replaces: string;
  description: string;
}

export type UniqueType = "Building" | "Unit" | "Improvement" | "Great Person" | "Promotion";
export type Terrain = "Hills" | "Desert" | "Jungle" | "Tundra" | "Coast" | "Forest" | "Plains" | "Grassland" | "Wetlands" | "River";
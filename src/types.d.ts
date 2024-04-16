import { CommandInteraction } from "discord.js";

export interface Command {
  name: string;
  description: string;
  execute: (msg: any, args: any) => Promise<void>;
}

export interface User {
  name: string;
  discordId: string;
  bans: string[];
}

export interface Game {
  id: string;
  messageId: string;
  host: string;
  startedAt: Date;
  endedAt: Date;
  state: GameState;
  players: Player[];
  settings: GameSettings;
  lobbyEvents: LobbyEvent[];
  gameEvents: GameEvent[];
  notes: [string];
}

export interface LobbyEvent {
  type: LobbyEventType;
  players: EventPlayer[];
  civ?: string;
}

export interface GameEvent {
  type: string;
  turn: number;
  victoryType?: string;
  players: EventPlayer[];
}

export interface EventPlayer {
  discordId: string;
  name: string;
}

type GameEventType = "war" | "peace" | "killed" | "irr" | "victory";

type LobbyEventType = "select" | "random" | "trade";

type GameState = "init" | "lobby" | "started" | "draft" | "ingame" | "done";

export interface GameStats {
  season: number;
  turn: number;
  startedAt: Date;
  endedAt: Date;
  gameLength: number;
  outcome: string;
}
export interface GameSettings {
  bans: number;
  mode: string;
  ranked: boolean;
  modVer: string;
  map: string;
  pool: number;
}

export interface Player {
  name: string;
  discordId: string;
  bans: string[];
  alive: boolean;
  civ: string;
  team: number;
  pool: string[];
  trade: string[];
  ready: boolean;
  messageId: string;
  selected: number;
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
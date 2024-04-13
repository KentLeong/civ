import { CommandInteraction } from "discord.js";

export interface Command {
  name: string;
  description: string;
  execute: (msg: any, args: any) => Promise<void>;
}
import { InteractionResponse } from "discord.js";

export interface Command {
  name: string;
  description: string;
  execute: (message: InteractionResponse, args: any) => Promise<void>;
}
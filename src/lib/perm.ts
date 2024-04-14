import { ChatInputCommandInteraction } from "discord.js";

export const perm = (interaction: ChatInputCommandInteraction, type: permType): boolean => {
  if (type == "leong" && interaction.user.id !== "752025586171510865") {
    return false;
  } else if (type == "mod" && interaction.user.id !== "752025586171510865") {
    return false;
  }
  return true;
}

type permType = "leong" | "mod";
export interface Command {
  name: string;
  description: string;
  execute: (interaction: any) => Promise<void>;
}
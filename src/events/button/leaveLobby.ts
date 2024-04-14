import { User, Game } from "../../mongo";
import { lobby } from "../../lib";

export default async (interaction: any) => {
  const user = await User.findOne({ discordId: interaction.user.id });
  if (!user) {
    await interaction.reply("You need to sign up first.");
    return;
  }

  const game = await Game.findOne({
    messageId: interaction.message.id,
  })
  if (!game) {
    await interaction.reply("Game not found.");
    return;
  } else if (game.state !== "lobby") {
    await interaction.reply("Game is not in lobby state.");
    return;
  }
}
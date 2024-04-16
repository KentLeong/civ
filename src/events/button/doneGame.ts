import { User, Game } from "../../mongo";
import { displayGame, expireReply } from "../../lib";

export default async (interaction: any) => {
  const user = await User.findOne({ discordId: interaction.user.id });

  if (!user) {
    await interaction.reply({ content: "You need to sign up first.", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  const game = await Game.findOne({
    messageId: interaction.message.id,
  })

  if (!game) {
    await interaction.reply({ content: "Game not found.", ephemeral: true });
    expireReply(interaction);
    return false;
  } else if (game.state !== "ingame") {
    await interaction.reply({ content: "Game is not in in game state.", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  // check if player is the host
  if (game.host !== interaction.user.id) {
    await interaction.reply({ content: "You are not the host.", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  // set game state to done
  game.state = "done";
  game.endedAt = new Date();

  // check if there is a victor
  const event = game.gameEvents[game.gameEvents.length - 1];
  if (event.type !== "victory") {
    await interaction.reply({ content: "No victor found.", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  // delete game message
  const channel = interaction.client.channels.cache.get(process.env.GAME_CHANNEL_ID || "");
  if (!channel) {
    await interaction.reply({ content: "Channel not found", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  await channel.messages.fetch(game.messageId)
    .then((message: any) => {
      message.delete();
    })
    .catch((err: any) => {
      console.error(err);
    });
  await displayGame(interaction, game);

  await interaction.deferReply({ ephemeral: true });
  await interaction.deleteReply();
}
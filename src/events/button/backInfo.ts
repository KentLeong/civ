import { User, Game, Civ } from "../../mongo";
import { expireReply, displayInfo } from "../../lib";
import { EmbedBuilder } from "discord.js";
import { Civilization, Player } from "../../types";

export default async (interaction: any) => {
  // get game
  const game = await Game.findOne({
    state: "draft"
  })
  if (!game) {
    await interaction.reply({ content: "Game not found.", ephemeral: true });
    expireReply(interaction);
    return false;
  }
  // get user
  const user = await User.findOne({ discordId: interaction.user.id });
  if (!user) {
    await interaction.reply({ content: "What you doing bro", ephemeral: true });
    expireReply(interaction);
    return false;
  }
  // check if current message belongs to player
  let player: Player = game.players.find((player) => player.discordId === interaction.user.id) as Player
  if (!player) {
    await interaction.reply({ content: "What you doing bro", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  // check if messageid belongs to player
  if (player.messageId !== interaction.message.id) {
    await interaction.reply({ content: "What you doing bro", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  // moves current selection to the left
  let poolLength = player.pool.length;
  if (player.selected === 0) {
    player.selected = poolLength-1;
  } else {
    player.selected -= 1;
  }

  // update message
  const civ = await Civ.findOne({ name: player.pool[player.selected] }) as Civilization;
  if (!civ) {
    await interaction.reply({ content: "Civ not found", ephemeral: true });
    expireReply(interaction);
    return false;
  }
  const info = await displayInfo(civ);

  // get channel
  const channel = interaction.client.channels.cache.get(process.env.GAME_CHANNEL_ID || "");
  if (!channel) {
    await interaction.reply({ content: "Channel not found", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  // create info
  const embed = new EmbedBuilder()
  let description = "```";
  player.pool.forEach((c, i) => {
    if (i == player.selected) {
      description += `[${c}]`
    } else {
      description += `${c}`
    }
    if (i != player.pool.length-1) {
      description += " - "
    }
  });
  description += "```";
  description += "\n*WARNING: Pressing 'Select' or 'Random' will lock in your choice permanently*"
  embed.setDescription(description);

  // edit message
  await channel.messages.fetch(player.messageId).then(async (message: any) => {
    await message.edit({ embeds: [info.embed, embed ], files: [info.file] });
  });

  // save game
  await Game.findOneAndUpdate({ state: "draft" }, game, { new: true });

  await interaction.deferReply({ ephemeral: true})
  await interaction.deleteReply();
}
import { User, Game, Civ } from "../../mongo";
import { displayGame, expireReply, displayInfo } from "../../lib";
import { ButtonBuilder, ButtonStyle, ActionRowBuilder, EmbedBuilder } from "discord.js";
import { Civs } from "../../assets/civs";
import { Civilization } from "../../types";

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
  } else if (game.state !== "lobby") {
    await interaction.reply({ content: "Game is not in lobby state.", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  // check if player is the host
  if (game.host !== interaction.user.id) {
    await interaction.reply({ content: "You are not the host.", ephemeral: true });
    expireReply(interaction);
    return false;
  }

  const pool:string[] = [];
  Civs.forEach((civ: Civilization) => {
    pool.push(civ.name);
  });

  // upgrade game lobby to draft
  game.state = "draft";

  // retrieve all bans from players
  const bans:string[] = [];
  game.players.forEach((player) => {
    player.bans.forEach((ban) => {
      if (!bans.includes(ban)) {
        bans.push(ban);
      }
    });
  });

  // remove banned civs from the pool
  pool.forEach((civ) => {
    if (bans.includes(civ)) {
      pool.splice(pool.indexOf(civ), 1);
    }
  });

  // add 4 random civs from pool to each player
  game.players.forEach((player) => {
    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * pool.length);
      player.pool.push(pool[random]);
      pool.splice(random, 1);
    }
  });

  await Game.findOneAndUpdate({ messageId: interaction.message.id }, game, { new: true })
  await displayGame(interaction, game);

  // send each player their pool
  game.players.forEach(async (player) => {
    const back = new ButtonBuilder()
      .setCustomId("backInfo")
      .setLabel("←")
      .setStyle(ButtonStyle.Secondary);

    const next = new ButtonBuilder()
      .setCustomId("nextInfo")
      .setLabel("→")
      .setStyle(ButtonStyle.Secondary);

    const select = new ButtonBuilder()
      .setCustomId("selectCiv")
      .setLabel("Select")
      .setStyle(ButtonStyle.Success);

    const random = new ButtonBuilder()
      .setCustomId("randomCiv")
      .setLabel("Random")
      .setStyle(ButtonStyle.Primary);
    const row: any = new ActionRowBuilder()
      .addComponents(back, next, select, random);

    const civ = await Civ.findOne({ name: player.pool[0] }) as Civilization;
    const info = await displayInfo(civ);

    // create new embed
    const embed = new EmbedBuilder()
    let description = "```";
    player.pool.forEach((civ, i) => {
      if (i == 0) {
        description += `[ ${civ} ] -`
      } else if (i == player.pool.length - 1) {
        description += ` ${civ}`
      } else {
        description += ` ${civ} -`
      }
    });
    description += "```";
    description += "\n*WARNING: Pressing 'Select' or 'Random' will lock in your choice permanently*"
    embed.setDescription(description);
    interaction.client.channels.cache.get(process.env.GAME_CHANNEL_ID)
      .send({ content: `<@${player.discordId}>\n`, embeds: [info.embed, embed], files: [info.file], components: [row]})
      .then(async (msg: any) => {
        player.messageId = msg.id;
        await Game.findOneAndUpdate({ messageId: interaction.message.id }, game, { new: true });
      }
    );
  });

  await interaction.deferReply({ ephemeral: true})
  await interaction.deleteReply();
}
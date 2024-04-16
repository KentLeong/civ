import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } from "discord.js";
import { displayGame, expireReply, displayInfo } from "../../lib";
import { User, Game, Civ } from "../../mongo";
import { Civilization, Player } from "../../types";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("trade")
    .setDescription("Initiate a trade with another player")
    .addUserOption(option => option.setName("player").setDescription("The player to trade with").setRequired(true)),
  async execute(interaction: ChatInputCommandInteraction) {
    const player: any = interaction.options.getUser("player");
    const user = await User.findOne({
      discordId: interaction.user.id
    });
    if (!user) {
      await interaction.reply({ content: "You need to sign up first.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    const game = await Game.findOne({
      state: "draft",
    });
    if (!game) {
      await interaction.reply({ content: "Game not found.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    // check if player is in lobby
    let exists = false;
    game.players.forEach((p) => {
      if (p.discordId === player.id) {
        exists = true;
      }
    });
    if (!exists) {
      await interaction.reply({ content: "Player not found in game.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    // check if player is himself
    if (player.id === interaction.user.id) {
      await interaction.reply({ content: "You can't trade with yourself.", ephemeral: true });
      expireReply(interaction);
      return;
    }
    
    // add player to user trade list and check if other player has user in trade list
    let trade = false;
    game.players.forEach((p) => {
      if (p.discordId === interaction.user.id) {
        p.trade.push(player.id);
      }
      if (p.discordId === player.id) {
        if (p.trade.includes(interaction.user.id)) {
          trade = true;
        }
      }
    });

    // if trade is successful, remove players from trade list and swap players civ pool
    if (trade) {
      let p1Name = "";
      let p2Name = "";

      let tempPool1: string[] = [];
      let tempPool2: string[] = [];
      // empties both players pools into a temporary pool and removes trade list also sets player names
      game.players.forEach((p) => {
        if (p.discordId === interaction.user.id) {
          p1Name = p.name;
          tempPool1 = p.pool;
          p.pool = [];
          p.trade = [];
          p.selected = 0;
        } else if (p.discordId === player.id) {
          p2Name = p.name;
          tempPool2 = p.pool;
          p.pool = [];
          p.trade = [];
          p.selected = 0;
        }
      });

      // swaps pools
      game.players.forEach((p) => {
        if (p.discordId === interaction.user.id) {
          p.pool = tempPool2;
        } else if (p.discordId === player.id) {
          p.pool = tempPool1;
        }
      });
      
      // push trade event
      game.lobbyEvents.push({
        type: "trade",
        players: [
          {
            discordId: interaction.user.id,
            name: p1Name,
          },
          {
            discordId: player.id,
            name: p2Name,
          }
        ]
      });
      // update display lobby
      await displayGame(interaction, game);

      await Game.findOneAndUpdate({ state: "draft" }, game, { new: true });

      // update both player civ info's (lol this is so bad, please refactor this)
      const channel: any = interaction.client.channels.cache.get(process.env.GAME_CHANNEL_ID || "");
      if (!channel) {
        await interaction.reply({ content: "Channel not found", ephemeral: true });
        expireReply(interaction);
        return;
      }

      game.players.forEach(async (p) => {
        if (p.discordId === interaction.user.id || p.discordId === player.id) {
          const civ = await Civ.findOne({ name: p.pool[p.selected] }) as Civilization;
          if (!civ) {
            await interaction.reply({ content: "Civ not found", ephemeral: true });
            expireReply(interaction);
            return;
          }

          const info = await displayInfo(civ);

          // create info
          const embed = new EmbedBuilder()
          let description = "```";
          p.pool.forEach((c, i) => {
            if (i == p.selected) {
              description += `[${c}]`
            } else {
              description += `${c}`
            }
            if (i != p.pool.length-1) {
              description += " - "
            }
          });
          description += "```";
          description += "\n*WARNING: Pressing 'Select' or 'Random' will lock in your choice permanently*"
          embed.setDescription(description);

          // edit message
          await channel.messages.fetch(p.messageId).then(async (message: any) => {
            await message.edit({ embeds: [info.embed, embed ], files: [info.file] });
          });
        }
      });
    } else {
      await Game.findOneAndUpdate({ state: "draft" }, game, { new: true });
    }
    // save game

    await interaction.deferReply({ ephemeral: true })
    await interaction.deleteReply();
  },
}
import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { expireReply,displayGame, validateChannel } from "../../lib";
import { User, Game } from "../../mongo";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("victory")
    .setDescription("inputs victory event")
    .addSubcommand(subcommand =>
      subcommand
        .setName("science")
        .setDescription("inputs science event")
        .addUserOption(option =>
          option
            .setName("user")
            .setDescription("The user that won")
            .setRequired(true)
        )
        .addNumberOption(option =>
          option
            .setName("turn")
            .setDescription("The turn of the event")
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("domination")
        .setDescription("inputs domination event")
        .addUserOption(option =>
          option
            .setName("user")
            .setDescription("The user that drew")
            .setRequired(true)
        )
        .addNumberOption(option =>
          option
            .setName("turn")
            .setDescription("The turn of the event")
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("culture")
        .setDescription("inputs culture event")
        .addUserOption(option =>
          option
            .setName("user")
            .setDescription("The user that won")
            .setRequired(true)
        )
        .addNumberOption(option =>
          option
            .setName("turn")
            .setDescription("The turn of the event")
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("diplomatic")
        .setDescription("inputs diplomatic event")
        .addUserOption(option =>
          option
            .setName("user")
            .setDescription("The user that won")
            .setRequired(true)
        )
        .addNumberOption(option =>
          option
            .setName("turn")
            .setDescription("The turn of the event")
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName("draw")
        .setDescription("inputs draw event")
        .addNumberOption(option =>
          option
            .setName("turn")
            .setDescription("The turn of the event")
            .setRequired(true)
        )
    ),
  async execute(interaction: ChatInputCommandInteraction) {
    if (!validateChannel(interaction, "game")) {
      await interaction.reply({ content: "Invalid channel.", ephemeral: true });
      expireReply(interaction);
      return;
    }
    const subcommand = interaction.options.getSubcommand();
    const u: any = interaction.options.getUser("user");
    const turn: any = interaction.options.getNumber("turn");

    const host = await User.findOne({ discordId: interaction.user.id });
    if (!host) {
      await interaction.reply({ content: "User not found.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    const game = await Game.findOne({ state: "ingame" });
    if (!game) {
      await interaction.reply({ content: "Game not found.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    if (game.host !== interaction.user.id) {
      await interaction.reply({ content: "You are not the host.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    // check if turn is valid
    if (game.gameEvents.length !== 0) {
      if (turn < game.gameEvents[game.gameEvents.length - 1].turn) {
        await interaction.reply({ content: "Invalid turn.", ephemeral: true });
        expireReply(interaction);
        return;
      }
    }

    if (subcommand === "draw") {
      // create draw event for every player thats alive
      const winners:any = [];
      game.players.forEach((player) => {
        if (player.alive) {
          winners.push({
            discordId: player.discordId,
            name: player.name,
          });
        }
      });
      game.gameEvents.push({
        type: "victory",
        victoryType: "draw",
        players: winners,
        turn: turn,
      });
    } else {
      const user = await User.findOne({ discordId: u.id });
      if (!user) {
        await interaction.reply({ content: "User not found.", ephemeral: true });
        expireReply(interaction);
        return;
      }
  
      // check if user is in game and alive
      const player = game.players.find((player) => player.discordId === user.discordId);
      if (!player) {
        await interaction.reply({ content: "User is not in game.", ephemeral: true });
        expireReply(interaction);
        return;
      } else if (!player.alive) {
        await interaction.reply({ content: "User is not alive.", ephemeral: true });
        expireReply(interaction);
        return;
      }
  
  
      
      // set all players to dead expect the winner
      game.players.forEach((player) => {
        if (player.discordId !== user.discordId && player.alive) {
          player.alive = false;
          // push irr event
          game.gameEvents.push({
            type: "irr",
            players: [{
              discordId: player.discordId,
              name: player.name,
            }],
            turn: turn,
          });
        }
      });
  
      if (subcommand === "science") {
        game.gameEvents.push({
          type: "victory",
          victoryType: "science",
          players: [{
            discordId: player.discordId,
            name: player.name,
          }],
          turn: turn,
        });
      } else if (subcommand === "domination") {
        game.gameEvents.push({
          type: "victory",
          victoryType: "domination",
          players: [{
            discordId: player.discordId,
            name: player.name,
          }],
          turn: turn,
        });
      } else if (subcommand === "culture") {
        game.gameEvents.push({
          type: "victory",
          victoryType: "culture",
          players: [{
            discordId: player.discordId,
            name: player.name,
          }],
          turn: turn,
        });
      } else if (subcommand === "diplomatic") {
        game.gameEvents.push({
          type: "victory",
          victoryType: "diplomatic",
          players: [{
            discordId: player.discordId,
            name: player.name,
          }],
          turn: turn,
        });
      }
    }

    await Game.findOneAndUpdate({ state: "ingame" }, game, { new: true });
    await interaction.reply({ content: "Event added.", ephemeral: true });
    expireReply(interaction);
    await displayGame(interaction, game);
  },
}
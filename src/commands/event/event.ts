import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { displayGame, expireReply } from "../../lib";
import { User, Game } from "../../mongo";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("event")
    .setDescription("Creates a game event")
    .addSubcommand(subcommand =>
      subcommand
        .setName("war")
        .setDescription("creates a war event")
        .addUserOption(option =>
          option
            .setName("user")
            .setDescription("The user to declared war")
            .setRequired(true)
        )
        .addUserOption(option =>
          option
            .setName("user2")
            .setDescription("The user that got attacked")
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
        .setName("peace")
        .setDescription("creates a peace event")
        .addUserOption(option =>
          option
            .setName("user")
            .setDescription("The user to declared peace")
            .setRequired(true)
        )
        .addUserOption(option =>
          option
            .setName("user2")
            .setDescription("The user that got peace")
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
        .setName("kill")
        .setDescription("creates a kill event")
        .addUserOption(option =>
          option
            .setName("user")
            .setDescription("The user that killed")
            .setRequired(true)
        )
        .addUserOption(option =>
          option
            .setName("user2")
            .setDescription("The user that got killed")
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
        .setName("irr")
        .setDescription("creates a irr event")
        .addUserOption(option =>
          option
            .setName("user")
            .setDescription("The user that irr'd")
            .setRequired(true)
        )
        .addNumberOption(option =>
          option
            .setName("turn")
            .setDescription("The turn of the event")
            .setRequired(true)
        )
    ),
  async execute(interaction: ChatInputCommandInteraction) {
    const user: any = interaction.options.getUser("user");
    const user2: any = interaction.options.getUser("user2");
    const turn: any = interaction.options.getNumber("turn");

    const isIrrCommand = interaction.options.getSubcommand() === "irr";

    const u = await User.findOne({ discordId: interaction.user.id });
    if (!u) {
      await interaction.reply({ content: "You need to sign up first.", ephemeral: true });
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

    const u1: any = await User.findOne({ discordId: user.id });
    let u2: any = null;
    if (!isIrrCommand) {
      u2 = await User.findOne({ discordId: user2.id });

      if (u1.discordId === u2.discordId) {
        await interaction.reply({ content: "User 1 and User 2 cannot be the same.", ephemeral: true });
        expireReply(interaction);
        return;
      }
    }
    //check if u1 is in game
    let u1InGame = false;
    let u1Dead = false;
    let u2InGame = false;
    let u2Dead = false;
    game.players.forEach((player) => {
      if (!isIrrCommand && player.discordId === u2?.discordId) {
        u2InGame = true;
        if (!player.alive) {
          u2Dead = true;
        }
      }
      if (player.discordId === u1?.discordId) {
        u1InGame = true;
        if (!player.alive) {
          u1Dead = true;
        }
      }
    });
    if (!u1InGame) {
      await interaction.reply({ content: "User 1 not found.", ephemeral: true });
      expireReply(interaction);
      return;
    }
    if (u1Dead) {
      await interaction.reply({ content: "User 1 is dead.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    if (!isIrrCommand && !u2InGame) {
      await interaction.reply({ content: "User 2 not found.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    if (!isIrrCommand && u2Dead) {
      await interaction.reply({ content: "User 2 is dead.", ephemeral: true });
      expireReply(interaction);
      return;
    }

    if (interaction.options.getSubcommand() === "war") {
      // push war event
      game.gameEvents.push({
        type: "war",
        players: [{
          name: u1.name,
          discordId: u1.discordId
        }, {
          name: u2.name,
          discordId: u2.discordId
        }],
        turn: turn
      });
    } else if (interaction.options.getSubcommand() === "peace") {
      // push peace event
      game.gameEvents.push({
        type: "peace",
        players: [{
          name: u1.name,
          discordId: u1.discordId
        }, {
          name: u2.name,
          discordId: u2.discordId
        }],
        turn: turn
      });
    } else if (interaction.options.getSubcommand() === "kill") {
      // push kill event
      game.gameEvents.push({
        type: "kill",
        players: [{
          name: u1.name,
          discordId: u1.discordId
        }, {
          name: u2.name,
          discordId: u2.discordId
        }],
        turn: turn
      });
      game.players.forEach((player: any) => {
        if (player.discordId === u2.discordId) {
          player.alive = false;
        }
      });
    } else if (interaction.options.getSubcommand() === "irr") {
      // push irr event
      game.gameEvents.push({
        type: "irr",
        players: [{
          name: u1.name,
          discordId: u1.discordId
        }],
        turn: turn
      });
      game.players.forEach((player: any) => {
        if (player.discordId === u1.discordId) {
          player.alive = false;
        }
      });
    }

    await Game.findOneAndUpdate({ state: "ingame" }, game, { new: true });

    // update lobby
    await displayGame(interaction, game);
    await interaction.reply({ content: "Event created.", ephemeral: true });
    expireReply(interaction);
  },
}
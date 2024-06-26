import { SlashCommandBuilder, ChatInputCommandInteraction, AutocompleteInteraction } from "discord.js";
import { Civs } from "../../assets/civs";
import { User, Game } from "../../mongo";
import { Civilization } from "../../types";
import { expireReply, displayGame, validateChannel } from "../../lib";

const civs:string[] = []
Civs.forEach((civ:Civilization) => {
  civs.push(civ.name);
});
civs.push("None");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Sets default civ ban")
    .addStringOption(option =>
      option.setName("civban1")
        .setDescription("The civ to ban.")
        .setRequired(true)
        .setAutocomplete(true))
    .addStringOption(option =>
      option.setName("civban2")
        .setDescription("The civ to ban.")
        .setAutocomplete(true))
    .addStringOption(option =>
      option.setName("civban3")
        .setDescription("The civ to ban.")
        .setAutocomplete(true)),
  async autocomplete(interaction: AutocompleteInteraction) {
    const focusedValue = interaction.options.getFocused()?.toLocaleLowerCase();
    if (!focusedValue) return;

    const civsLowerCase = civs.map(civ => civ.toLowerCase());
    const filtered = civsLowerCase.filter(civ => civ.startsWith(focusedValue));
    const suggestions = filtered.map(civLowerCase => {
      const originalCiv = civs[civsLowerCase.indexOf(civLowerCase)];
      return { name: originalCiv, value: originalCiv };
    });
  
    await interaction.respond(suggestions);
  },
  async execute(interaction: ChatInputCommandInteraction) {
    if (!validateChannel(interaction, "game")) {
      await interaction.reply({ content: "Invalid channel.", ephemeral: true });
      expireReply(interaction);
      return;
    }
    const user = await User.findOne({
      discordId: interaction.user.id
    });
    if (!user) {
      await interaction.reply({ content: "Please signup", ephemeral: true });
      expireReply(interaction);
      return;
    }
    const civban1 = interaction.options.getString("civban1") || "";
    const civban2 = interaction.options.getString("civban2") || "";
    const civban3 = interaction.options.getString("civban3") || "";

    // set first char to uppercase
    user.bans = [civban1, civban2, civban3].map(ban => ban.charAt(0).toUpperCase() + ban.slice(1).toLowerCase());

    // remove empty strings and None and Duplicate bans
    user.bans = user.bans.filter((ban, index, self) =>
      ban !== "" && ban !== "None" && index === self.indexOf(ban)
    );

    // check if each ban is a valid civ
    for (let i = 0; i < user.bans.length; i++) {
      if (!civs.includes(user.bans[i])) {
        await interaction.reply({ content: `${user.bans[i]} is not a valid civ`, ephemeral: true });
        expireReply(interaction);
        return;
      }
    }

    await user.save();

    // check if user is in a game
    const game = await Game.findOne({
      players: {$elemMatch: { discordId: interaction.user.id }},
      state: "lobby"
    });

    if (game) {
      await game.players.forEach(async player => {
        if (player.discordId == interaction.user.id) {
          player.bans = user.bans;
        }
      });

      await Game.findOneAndUpdate({
        players: {$elemMatch: { discordId: interaction.user.id }},
        state: "lobby"
      }, {
        $set: {
          players: game.players
        }
      })

      await displayGame(interaction, game);
    }
    await interaction.deferReply({ ephemeral: true})
    await interaction.deleteReply();
  },
}
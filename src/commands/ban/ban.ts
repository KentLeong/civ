import { SlashCommandBuilder, ChatInputCommandInteraction, AutocompleteInteraction } from "discord.js";
import { Civs } from "../../assets/civs";
import { User, Game } from "../../mongo";
import { Civilization } from "../../types";
import { expireReply, displayGame } from "../../lib";

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

    if (civban1 == "None") {
      user.bans = [];
    } else {
      const civban1exists = civs.find(civ => civ == civban1);
      if (!civban1exists) {
        await interaction.reply({ content: "Civ not found.", ephemeral: true });
        expireReply(interaction);
        return;
      }
      if (civban2 !== "" && civban2 !== "None") {
        const civban2exists = civs.find(civ => civ == civban2);
        if (!civban2exists) {
          await interaction.reply({ content: "Civ not found.", ephemeral: true });
          expireReply(interaction);
          return;
        }
        user.bans = [civban1, civban2];
      } else {
        user.bans = [civban1];
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
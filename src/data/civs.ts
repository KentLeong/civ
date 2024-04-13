import { Civilization } from "../types";

export const Civs:Record<string, Civilization> = {
  Akkad: {
    name: "Akkad",
    leader: "Sargon",
    ability: {
      name: "The Great Unification",
      description: "+3 Culture, +2 Happiness and +1 Production from conquered cities. Great Generals grant nearby Units a +15% Combat Bonus when initiating combat with enemy Cities."
    },
    unique: [
      {
        type: "Building",
        name: "Akkadian Library",
        description: "Replaces the Library. Provides +1 additional Science and does not require Gold maintenance. Costs less to produce (40 hammers vs. 50)."
      },
      {
        type: "Unit",
        name: "Laputtu",  
        description: "Replaces Spearmen. 3 Movement (vs. 2). Units that start their turn on the same tile as this unit copy this unit’s Movement stat."
      }
    ],
    bias: "None"
  },
}
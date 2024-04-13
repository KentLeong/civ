import { Civilization } from "../types";

export const Civs:Array<Civilization> = [
  {
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
        replaces: "Library",
        description: "Provides +1 additional Science and does not require Gold maintenance. Costs less to produce (40 hammers vs. 50)."
      },
      {
        type: "Unit",
        name: "Laputtu",  
        replaces: "Spearman",
        description: "3 Movement (vs. 2). Units that start their turn on the same tile as this unit copy this unit's Movement stat."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Aksuym",
    leader: "Ezana",
    ability: {
      name: "Saint Elesbaan's Blessing",
      description: "Upon founding a Religion, your cities immediately follow it. Your cities do not exert Religious pressure on foreign cities."
    },
    unique: [
      {
        type: "Improvement",
        name: "Rock-Hewn Church",
        replaces: "Quarries",
        description: `Available at Mining instead of Masonry. Provides +2 Faith and +1 Production. +1 Faith at Theology.
        (Note that Cities captured by Aksum will not have their Quarries converted.)`
      },
      {
        type: "Building",
        name: "King Ezana's Stele",
        replaces: "National Epic",
        description: "Requires a Shrine in every city to build instead of Monuments. Provides +3 Culture and +4 Faith in addition to its base yields. All Shrines in the empire provide an additional +2 Food, +1 Production, +1 Gold and +1 Faith."
      }
    ],
    bias: ["Hills"],
    avoid: []
  },
  {
    name: "America",
    leader: "Washington",
    ability: {
      name: "Manifest Destiny",
      description: "Military Land Units gain +1 Sight. Gold costs for purchasing territory are halved."
    },
    unique: [
      {
        type: "Unit",
        name: "Minuteman",
        replaces: "Musketman",
        description: "Ignores terrain costs, arrives trained with Drill I (+15% bonus in Rough terrain), and earns 100% of foe's Strength as points towards a Golden Age from kills."
      },
      {
        type: "Unit",
        name: "Pioneer",
        replaces: "Settler",
        description: "Has the same combat and movement properties as the Scout (preventing instant capture) and may Settle."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Arabia",
    leader: "Harun al-Rashid",
    ability: {
      name: "Ships of the Desert",
      description: "Caravans can reach Cities +50% further away. Trade Routes apply Religious Pressure twice as effectively. Receive twice as many Oil resources when improved."
    },
    unique: [
      {
        type: "Unit",
        name: "Camel Archer",
        replaces: "Knight",
        description: "A Mounted Ranged Unit with 20 Ranged Strength (from 21) and 14 Combat Strength (from 17, vs. 20). Receives no penalty when initiating combat with an enemy City."
      },
      {
        type: "Building",
        name: "Bazaar",
        replaces: "Market",
        description: "Yields an additional +1 Gold and provides +2 Gold to all Oasis and Oil resource tiles in the City. Gain a copy of every Luxury resource connected in the City. Trade Routes sent by rival Civilizations to Cities with a Bazaar will generate an additional +1 Gold for both players."
      }
    ],
    bias: ["Desert"],
    avoid: []
  },
  {
    name: "Argentina",
    leader: "Eva Perón",
    ability: {
      name: "Pride of the People",
      description: "Construct Pastures and Farms twice as fast."
    },
    unique: [
      {
        type: "Unit",
        name: "Gaucho",
        replaces: "Knight",
        description: "Receives a 50% chance to withdraw from Melee attacks. Flanking bonuses are tripled. Capable of building Pastures and Farms."
      },
      {
        type: "Building",
        name: "Ocupada Estable",
        replaces: "Stable",
        description: "Gain +1 Food from Pasture resources and +1 Production from Maize in addition to the regular benefits of the Stable."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Armenia",
    leader: "Tiridates III",
    ability: {
      name: "Splendor of the Caucasus",
      description: "+1 Food, +2 Production and +1 Gold from Mountains (including mountainous Natural Wonders - i.e. Kilimanjaro, Uluru, Mt. Fuji, Mt. Sinai, Mt. Kailash, Rock of Gibraltar and Sri Pada)."
    },
    unique: [
      {
        type: "Unit",
        name: "Sparapet",
        replaces: "Horseman",
        description: "Requires 80 Production and 2 Horse resources. Boasts a mighty 17 Combat Strength (vs. 12) and grants the Great General Combat Bonus to nearby allies. Does not obsolete."
      },
      {
        type: "Building",
        name: "Darbas",
        replaces: "Observatory",
        description: "In addition to the typical perks, provides +4 Culture in the City and +2 Culture on Mountain tiles and Wonders for a total of +5 Science and +2 Culture on those tiles."
      }
    ],
    bias: ["Hills"],
    avoid: ["Jungle"]
  },
  {
    name: "Assyria",
    leader: "Ashurbanipal",
    ability: {
      name: "Siege Warfare",
      description: "Siege Units receive +1 Movement. Receive a free Great Writer at Philosophy, and receive a free Great Work of Writing upon completion of the Royal Library in the Capital."
    },
    unique: [
      {
        type: "Building",
        name: "Royal Library",
        replaces: "Library",
        description: "Provides an additional +1 Culture and Science and provides +15 (from 10) XP to Units trained in the City when its Great Work of Writing slot is filled."
      },
      {
        type: "Unit",
        name: "Siege Tower",
        replaces: "Catapult",
        description: "A Melee Siege Unit with 12 Strength (vs. 7) only capable of combat with enemy Cities. Arrives trained with Cover I (+33% bonus defending against Ranged attacks). When adjacent to an enemy City, Units within 2 tiles of the Siege Tower gain a +50% Combat Bonus when initiating combat with that City."
      }
    ],
    bias: [],
    avoid: ["Tundra"]
  },
  {
    name: "Australia",
    leader: "Henry Parker",
    ability: {
      name: "Dreamtime",
      description: "+5 Faith from Natural Wonders. Gain 10 Faith upon discovering a Natural Wonder."
    },
    unique: [
      {
        type: "Unit",
        name: "Ngangkari",
        replaces: "Worker",
        description: "3 Movement (vs. 2), receives an additional +1 Movement while embarked, and arrives with Medic I and II (adjacent allies heal an additional +10 HP while Fortified)."
      },
      {
        type: "Building",
        name: "Convict Penitentiary",
        replaces: "Constabulary",
        description: "Available at Machinery (instead of Banking). In addition to slowing the rate of Technology theft, provides +1 Gold and Production, and +5% Gold and Production in the City. Requires no Gold maintenance and is appreciably cheaper to construct (80 hammers vs. 106)."
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Austria",
    leader: "Maria Theresa",
    ability: {
      name: "Diplomatic Marriage",
      description: "May spend Gold to annex a City-State that has been your ally for at least 5 turns."
    },
    unique: [
      {
        type: "Unit",
        name: "Hussar",
        replaces: "Cavalry",
        description: "+1 Sight and Movement and is 50% more effective at Flank attacks (bonus from each ally adjacent to foe increases from +10% to +15% per ally)."
      },
      {
        type: "Building",
        name: "Coffee House",
        replaces: "Windmill",
        description: "Available at Printing Press (instead of Economics). In addition to the typical perks, provides a +5% Production bonus and a +25% Great Person generation bonus in the City. Much cheaper to construct (100 hammers from 167, vs. 167)."
      }
    ],
    bias: ["Hills"],
    avoid: []
  },
  {
    name: "Ayyubids",
    leader: "Saladin",
    ability: {
      name: "Justice of Saladin",
      description: "Receive a free Burial Tomb in each City you conquer. Workers construct improvements +25% faster. (The Burial Tomb is a unique building of Egypt that replaces the Temple. If the Temple in a captured City survives, the City will house both buildings.)"
    },
    unique: [
      {
        type: "Building",
        name: "Madrasah",
        replaces: "University",
        description: "In addition to the typical perks, provides +2 Faith in the City; +1 Science from Flood Plains, +2 Science from Oases."
      },
      {
        type: "Unit",
        name: "Mamluk",
        replaces: "Knight",
        description: "Gains a +50% bonus vs. Melee units, +25% vs. Gunpowder units. Slightly more expensive to produce (85 hammers vs. 80)."
      }
    ],
    bias: ["Desert"],
    avoid: []
  },
  {
    name: "Aztecs",
    leader: "Montezuma",
    ability: {
      name: "Sacrificial Captives",
      description: "Earn 100% of foe’s Strength as Culture from kills."
    },
    unique: [
      {
        type: "Unit",
        name: "Jaguar",
        replaces: "Warrior",
        description: "Gains a +33% Combat Bonus in Forests and Jungles, heals 25 HP from kills, and moves unimpeded through Forests and Jungles. (These promotions are retained upon upgrade.)"
      },
      {
        type: "Building",
        name: "Floating Gardens",
        replaces: "Watermill",
        description: "In addition to the typical perks, provides +10% Food (from +15%) in the City and each Lake tile in the City provides an additional +1 (from +2) Food. In addition to Rivers, the Floating Gardens may also be constructed when adjacent to Lakes. Costs less Gold maintenance (1 Gold vs. 2)."
      }
    ],
    bias: ["Jungle"],
    avoid: ["Tundra"]
  },
  {
    name: "Babylon",
    leader: "Nebuchadnezzar II",
    ability: {
      name: "Ingenuity",
      description: "Great Scientists are earned 50% faster. Receive a free Great Scientist upon researching Writing."
    },
    unique: [
      {
        type: "Building",
        name: "Walls of Babylon",
        replaces: "Walls",
        description: "Available at Masonry (instead of Construction). Provides +2 Science and +1 Culture. Provides a free Great Scientist when constructed."
      },
      {
        type: "Unit",
        name: "Sabum Kibittum",
        replaces: "Spearman",
        description: "Has a 50% chance to withdraw from Melee attacks. Receives a +25% Combat Bonus when attacking and a +25% Combat Bonus when defending in friendly territory."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Babylon",
    leader: "Nebuchadnezzar II",
    ability: {
      name: "Ingenuity",
      description: "Receive a free Great Scientist in the Capital when you discover Philosophy (previously Writing). Earn Great Scientists +25% (from +50%) faster."
    },
    unique: [
      {
        type: "Building",
        name: "Walls of Babylon",
        replaces: "Walls",
        description: "Boosts City Strength by +6 (vs. 5) and raises City health by +100 (vs. 50). Cheaper to construct (44 hammers vs. 50)."
      },
      {
        type: "Unit",
        name: "Bowman",
        replaces: "Archer",
        description: "7 Melee Strength (vs. 5) and 9 Ranged Strength (vs. 7)."
      }
    ],
    bias: [],
    avoid: ["Tundra"]
  },
  {
    name: "Belguim",
    leader: "Leopold II",
    ability: {
      name: "Colonialist Riches",
      description: "+1 Production from Plantations. +1 Gold from Strategic Resources."
    },
    unique: [
      {
        type: "Building",
        name: "Stade",
        replaces: "Zoo",
        description: "In addition to the typical perks, provides an additional +1 Happiness, Culture, and Gold, and does not require Gold maintenance. Cheaper to construct (100 hammers vs. 120). Does not require a Colosseum to be built."
      },
      {
        type: "Unit",
        name: "Force Publique",
        replaces: "Great War",
        description: "51 Strength (vs. 50), arrives with Drill I (+15% bonus in Rough terrain) and Charge (+33% bonus vs. wounded Units)."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Boers",
    leader: "Stephanus Johannes Paulus Kruger",
    ability: {
      name: "The Great Trek",
      description: "+1 Food from non-freshwater Farms, +1 Culture from Farms after the discovery of Fertilizer."
    },
    unique: [
      {
        type: "Building",
        name: "Staatsmuseum",
        replaces: "Opera House",
        description: "Provides +1 additional Culture and houses an Artist Specialist slot. Cheaper to construct (117 hammers vs. 134)."
      },
      {
        type: "Unit",
        name: "Voortrekker",
        replaces: "Great War Infantry",
        description: "Gains a +25% Bonus when foes initiate combat against this Unit. Heals completely from kills. Capable of building Farms in 2 turns. Slightly cheaper to construct (200 hammers vs. 210)."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Bolivia",
    leader: "Tata Belzu",
    ability: {
      name: "Revolución Nacional",
      description: "Expending a Great Artist improves the yield of Mines with +1 Production and expending a Great Writer improves them with +1 Food instead. (When one yield has already been chosen, choosing the opposite will swap them instead of stacking. This ability cannot be triggered by unique Artist or Writer replacements.)"
    },
    unique: [
      {
        type: "Great Person",
        name: "Comparsa Folklorica",
        replaces: "Great Musician",
        description: "Moves further (4 Movement vs. 2) and may be consumed to spread Tourism, begin a Golden Age, or gain a large amount of Culture."
      },
      {
        type: "Unit",
        name: "Colorado",
        replaces: "Anti-Tank Rifle",
        description: "40 Strength (vs. 30). Available at Dynamite. Only receives a +100% Bonus vs. Armored Units (vs. 200), but gains +2 Strength for every 5 points of excess Happiness in the empire. (Rounds up. Updates when a unit is moved or when a new turn begins.)"
      }
    ],
    bias: ["Hills"],
    avoid: []
  },
  {
    name: "Brazil",
    leader: "Pedro II",
    ability: {
      name: "Carnival!",
      description: "Output +100% more Tourism and generate Great Artists, Writers, and Musicians +100% (from 50%) faster during Golden Ages."
    },
    unique: [
      {
        type: "Unit",
        name: "Pracinha",
        replaces: "Infantry",
        description: "80 Strength (from 70, vs. 70) and earns 100% of foe’s Strength as points towards a Golden Age from kills. Gains a +20% Combat Bonus outside of friendly territory."
      },
      {
        type: "Improvement",
        name: "Brazilwood Camp",
        replaces: "Nothing",
        description: "Available at Bronze Working (instead of Machinery). May be constructed on Jungle OR Forest tiles. Provides +1 Production. Gains +2 Gold at Machinery and +2 Culture at Acoustics."
      }
    ],
    bias: ["Jungle"],
    avoid: []
  },
  {
    name: "Brunei",
    leader: "Bolkiah",
    ability: {
      name: "Sea Nomads",
      description: "All Naval Units may heal outside friendly territory and pay 33% less Gold maintenance. Melee Naval Units can create improvements on Coast and Ocean tiles."
    },
    unique: [
      {
        type: "Building",
        name: "BMPC Plant",
        replaces: "Oil Refineries",
        description: "In addition to the typical perks, provides +3 Gold and +5 Production. Doesn’t require nearby Oil to build. Upon completion, provides 2 Oil resources."
      },
      {
        type: "Improvement",
        name: "Kampong Ayer",
        replaces: "Optics",
        description: "May be built on any Coastal tile adjacent to land tiles. Provides +1 Food, Culture and Gold. +1 Production at Navigation, and +1 additional Culture at Flight."
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Bulgaria",
    leader: "Asparukh Khan",
    ability: {
      name: "Cyrillic Script",
      description: "Writer Specialists provide +5 Science; Science buildings provide +1 Culture."
    },
    unique: [
      {
        type: "Unit",
        name: "Konnitsa",
        replaces: "Knight",
        description: "Similar to an Impi, performs a Ranged attack when initiating combat."
      },
      {
        type: "Building",
        name: "Khambar",
        replaces: "Granary",
        description: "Cheaper to construct (32 hammers vs. 40). In addition to the typical perks, yields +1 Gold from Wheat and Cattle resources."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Burma",
    leader: "Anawrahta",
    ability: {
      name: "Pyu City States",
      description: "+1 Happiness in every City."
    },
    unique: [
      {
        type: "Unit",
        name: "Akyat Cannon",
        replaces: "Cannon",
        description: "Available at Gunpowder (instead of Chemistry). Identical combat capabilities and production cost to the Trebuchet, but wields 3 Range instead of 2."
      },
      {
        type: "Building",
        name: "Kyawwat",
        replaces: "Stoneworks",
        description: "In addition to the typical perks, the Kyawwat extends its yield bonuses to Salt and Iron resources and does not require any resources within the City to construct."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Byzantium",
    leader: "Theodora",
    ability: {
      name: "Patriarchate of Constantinople",
      description: "Choose an additional Pantheon, Follower, Founder or Enhancer Belief when founding a Religion."
    },
    unique: [
      {
        type: "Building",
        name: "Hippodrome",
        replaces: "Amphitheater",
        description: "Slightly less costly to produce (63 hammers vs. 67). In addition to the typical perks, also provides +2 Faith and +1 Happiness in the City."
      },
      {
        type: "Unit",
        name: "Cataphract",
        replaces: "Horseman",
        description: "15 Strength (vs. 12), but 3 Movement (vs. 4). Able to receive defensive Terrain Bonuses and is penalized slightly less for attacking Cities (-25% vs. -33%)."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Canada",
    leader: "John A. MacDonald",
    ability: {
      name: "Canadian Fur Trade",
      description: "+2 Gold from Camps, +2 Gold and +1 Culture from Lake tiles."
    },
    unique: [
      {
        type: "Unit",
        name: "Combat Engineer",
        replaces: "Rifleman",
        description: "Available at Industrialization. Identical Strength, but +1 Movement (3 vs. 2). May construct Roads, Railroads and Forts, and clear Forests, Jungles and Marsh tiles."
      },
      {
        type: "Building",
        name: "Tim Horton’s",
        replaces: "Stock Exchange",
        description: "In addition to the typical perks, provides +2 Happiness in the City and +1 Gold to river tiles worked by this City. Significantly cheaper to construct (200 hammers vs. 280)."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Carthage",
    leader: "Dido",
    ability: {
      name: "Phoenician Heritage",
      description: "All Coastal Cities receive a free Harbor. Units may cross mountains, receiving 50 HP damage if they end their turn on one. (The ability to cross mountains is no longer tied to earning a Great General). (Note: Harbors will only form City Connections after the discovery of the Wheel, but will still provide the appropriate Gold.)"
    },
    unique: [
      {
        type: "Building",
        name: "Cothon",
        replaces: "Lighthouse",
        description: "+1 Food in the City in addition to the typical perks."
      },
      {
        type: "Unit",
        name: "African Forest Elephant",
        replaces: "Horsemen",
        description: "Does not require Horses to construct. 14 Strength (vs. 12), but 3 Movement (vs. 4). Possesses the Feared Elephant (enemy Units adjacent to this Unit receive a -10% combat penalty), Great Generals II (earns Great General points faster) promotion and Hannibal’s Charge (+20% Strength when initiating combat from a higher elevation than foe; enemy Units will retreat if they receive more damage than this Unit, this Unit deals +50% damage to defenders incapable of retreat). (Feared Elephant will not stack.)"
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Celts",
    leader: "Boudicca",
    ability: {
      name: "Druidic Lore",
      description: "Cities with an adjacent unimproved Forest tile generate +1 Faith, increasing to +2 Faith with three adjacent tiles."
    },
    unique: [
      {
        type: "Building",
        name: "Silversmith",
        replaces: "Mint",
        description: "Provides +2 Production and +1 Gold (vs. +2 Gold) and does not require resources to construct, but retains the typical perks of a Mint. Less costly to produce (50 hammers vs. 66)."
      },
      {
        type: "Unit",
        name: "Pictish Warrior",
        replaces: "Spearmen",
        description: "Earn 100% of your foe’s Combat Strength as Faith from kills (previously 50%). Gains a +20% Combat Bonus outside of friendly territory and may pillage without movement penalties."
      }
    ],
    bias: ["Forest"],
    avoid: []
  },
  {
    name: "Chile",
    leader: "Bernardo O'Higgins",
    ability: {
      name: "By Reason or By Force",
      description: `Claim all surrounding neutral tiles upon the completion of Fishing Boat or Drydock improvements.
      Receive a free Great Admiral at Compass.
      Friendly Melee & Gunpowder Units inflict a -25% Combat Penalty to adjacent enemy Naval Units; Melee Naval Units inflict this penalty to adjacent enemy Land Units.
      (Embarked Units do not apply these penalties.)`
    },
    unique: [
      {
        type: "Building",
        name: "Cooperative",
        replaces: "Factory",
        description: `In addition to the typical perks, provides +2 Happiness and houses an additional Engineer Specialist (3 vs. 2). 
        Does not require Gold maintenance. Ideologies are unlocked for Chile after the completion of only 1 Cooperative (compared to 3 Factories).
        `
      },
      {
        type: "Unit",
        name: "Cardoen",
        replaces: "Helicopter Gunship",
        description: `Stronger (85 Strength vs. 70). In addition to the typical bonuses, the Cardoen is capable of attacking and capturing Cities and receives a +100% Combat Bonus defending against ranged attacks.`
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "China",
    leader: "Wu Zetian",
    ability: {
      name: "Art of War",
      description: "Great Generals provide an additional +15% Combat Bonus to nearby Units and are generated +50% faster."
    },
    unique: [
      {
        type: "Building",
        name: "Paper Maker",
        replaces: "Library",
        description: "Requires no Gold maintenance and provides +2 Gold."
      },
      {
        type: "Unit",
        name: "Chu-Ko-Nu",
        replaces: "Crossbowman",
        description: "Weaker at base (14 Strength vs. 18), but may attack twice each turn."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Colombia",
    leader: "Simón Bolívar",
    ability: {
      name: "Independence of the People",
      description: "+1 Food and Gold from Lumber Mills. Lumber Mills receive an additional +1 Science at Chemistry. Earn 100 Golden Age points when capturing or liberating Cities."
    },
    unique: [
      {
        type: "Building",
        name: "Cacicazgo",
        replaces: "Granary",
        description: "In addition to the typical perks, provides +1 Production and Gold and allows the City to send Production through Trade Routes (as a Workshop would). Doesn't require Gold maintenance. Slightly more expensive to construct (44 hammers vs. 40)."
      },
      {
        type: "Unit",
        name: "Llanero",
        replaces: "Cavalry",
        description: "Capable of receiving defensive terrain bonuses and Fortifying."
      }
    ],
    bias: ["Forest", "Plains"],
    avoid: []
  },
  {
    name: "Cuba",
    leader: "Fidel Castro",
    ability: {
      name: "¡Viva la Revolución!",
      description: "Receive +1 Culture per turn in your Capital for every 5 Culture per turn generated in the Capital of Civilizations you’ve met. Upon selecting your first Ideology Tenet, receive 2 Guerrilleros in the Capital. Receive -50% less Unhappiness from Ideology pressure."
    },
    unique: [
      {
        type: "Unit",
        name: "Guerrillero",
        replaces: "Great War Infantry",
        description: "Available to produce only after the adoption of Cuba’s first Ideology Tenet (as opposed to Replaceable Parts). Weaker (44 Strength vs. 50), but boasts 3 Movement (vs. 2) and can be built for significantly less (176 hammers vs. 221)."
      },
      {
        type: "Building",
        name: "Dance Hall",
        replaces: "Opera House",
        description: "In addition to the typical perks, the Dance Hall provides +1 Happiness, +4 Culture, and +15% Production towards military Units in the City when its Great Work slot is filled. (This bonus is updated at the start of every turn.) Cheaper to construct (100 hammers vs. 134)."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Denmark",
    leader: "Harald Bluetooth",
    ability: {
      name: "Viking Fury",
      description: "Embarked Units gain +1 Movement and may disembark for only 1 Movement. Melee Units pillage without movement penalties. +1 Production from Fish resources."
    },
    unique: [
      {
        type: "Unit",
        name: "Berserker",
        replaces: "Longswordsman",
        description: "Available at Metal Casting instead of Steel. 3 Movement (vs. 2) and ignores penalties for attacking over rivers or while embarked."
      },
      {
        type: "Unit",
        name: "Longship",
        replaces: "Trireme",
        description: "6 Movement (vs. 4). Embarked Units that begin their turn on the same tile as a Longship are granted 6 Movement for that turn. (This Movement bonus is retained after disembarkation. Promoted Longships with bonus Movement will also confer this bonus to the embarked Unit.)"
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Egypt",
    leader: "Ramesses II",
    ability: {
      name: "Monument Builders",
      description: "+15% (from 20%) Production towards the construction of World Wonders."
    },
    unique: [
      {
        type: "Building",
        name: "Burial Tomb",
        replaces: "Temple",
        description: "In addition to the typical perks, provides +2 Happiness and does not require Gold maintenance. Cities with a Burial Tomb double the amount of Gold plundered for the conqueror."
      },
      {
        type: "Unit",
        name: "War Chariot",
        replaces: "Chariot Archer",
        description: "5 Movement (vs. 4) and does not require Horse resources to construct."
      }
    ],
    bias: ["Desert"],
    avoid: []
  },
  {
    name: "England",
    leader: "Elizabeth",
    ability: {
      name: "Sun Never Sets",
      description: "English Naval Units receive +2 Movement. Receive an additional Spy upon entering the Renaissance. Constabularies and Police Stations are built twice as fast and provide +1 Happiness."
    },
    unique: [
      {
        type: "Unit",
        name: "Longbowman",
        replaces: "Crossbowman",
        description: "12 Melee Strength (vs. 13) and 18 Ranged Strength (from 17, vs. 18), but wields 3 Range (vs. 2)."
      },
      {
        type: "Unit",
        name: "Ship of the Line",
        replaces: "Frigate",
        description: "+1 Sight. 25 Combat Strength (from 30, vs. 25) and 30 Ranged Strength (from 35, vs. 27). (The Ship of the Line has 5 Movement at base (vs. a Frigate’s 6), increasing effectively to 7 due to Sun Never Sets.)"
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Ethiopia",
    leader: "Haile Selassie",
    ability: {
      name: "Spirit of Adwa",
      description: "Ethiopian Units gain a +20% Bonus in combat with Civilizations with more Cities than Ethiopia."
    },
    unique: [
      {
        type: "Building",
        name: "Stele",
        replaces: "Monument",
        description: "In addition to the Culture yield, provides +2 Faith."
      },
      {
        type: "Unit",
        name: "Mehal Sefari",
        replaces: "Riflemen",
        description: "35 Strength (from 34, vs. 34). Arrives trained with Drill I (+15% Bonus in Rough terrain) and gains Strength according to distance from the Capital, peaking at +30% when the Mehal Sefari is stationed inside the Capital and decreasing by -3% per tile away. Cheaper to produce (134 hammers vs. 150)."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Finland",
    leader: "Mannerheim",
    ability: {
      name: "Finnish Mobility",
      description: "All Melee and Mounted Units receive a +50% increased flanking bonus (+15% per ally adjacent to foe vs. 10%). +1 Culture from unimproved Forest tiles."
    },
    unique: [
      {
        type: "Unit",
        name: "Sissi",
        replaces: "Machine Gun",
        description: "Ignores terrain costs and receives a +25% Combat Bonus vs. Armored Units. Does not spend movement when pillaging tiles, but cannot attack twice. 60 Ranged Strength (vs. 50), 50 Melee Strength. Cheaper to construct (234 hammers vs. 260)."
      },
      {
        type: "Building",
        name: "Sauna",
        replaces: "Shrine",
        description: "+2 Culture from Lake tiles. Units trained in Cities with a Sauna heal +10 HP inside friendly territory."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "France",
    leader: "Napoleon",
    ability: {
      name: "City of Light",
      description: "+1 Culture in the Capital, increasing by an additional +15 upon the discovery of Acoustics. Theming bonuses are doubled in the Capital."
    },
    unique: [
      {
        type: "Improvement",
        name: "Chateau",
        replaces: "Nothing",
        description: `
        Provides +2 Science, +2 Culture and +1 Gold, increasing by +1 Culture and +2 Gold at Flight, and +1 Science after adopting the Free Thought policy. Provides the same defensive bonus as a Fort (+50% bonus when foe initiates combat).
        Chateaus must be constructed adjacent to a luxury resource, non-adjacent to another Chateau, and not atop an existing Resource tile. (Resources discovered after the construction of the Chateau will provide their yield bonus to the tile, but the Chateau will not ‘connect’ those resources.)
        `
      },
      {
        type: "Unit",
        name: "Musketeer",
        replaces: "Musketman",
        description: "28 Strength (vs. 24)"
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Franks",
    leader: "Charlemagne",
    ability: {
      name: "Holy Roman Empire",
      description: "+1 Faith from Farms. Frankish Units receive +25% additional Movement when traveling along friendly and neutral Roads and Railroads."
    },
    unique: [
      {
        type: "Building",
        name: "Mead Hall",
        replaces: "Colosseum",
        description: "Provides an additional point of Happiness (3 vs. 2) and a bonus +1 Culture."
      },
      {
        type: "Unit",
        name: "Seaxman",
        replaces: "Longswordsmen",
        description: "Available at Chivalry instead of Steel. 22 Strength (vs. 21). Arrives trained with the Cover I (+33% bonus defending against ranged attacks) and Amphibious (attack from the sea or over rivers without penalty) promotions. Almost negligibly cheaper to construct (76 hammers vs. 80)."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Gaul",
    leader: "Vercingetorix",
    ability: {
      name: "Oppidum of Bibracte",
      description: "Receive a Murus Gallicus in the Capital upon the discovery of Mining."
    },
    unique: [
      {
        type: "Building",
        name: "Murus Gallicus",
        replaces: "Walls",
        description: "Slightly cheaper (44 Production vs. 50) and better defense (+6 vs. +5). +1 Production and +1 Happiness; +1 additional Production after researching Metal Casting."
      },
      {
        type: "Unit",
        name: "Noble Swordsman",
        replaces: "Longswordsmen",
        description: "20 Strength (vs. 21). Gains a +25% Combat Bonus when initiating combat and a +50% Bonus in Forests. Does not require Iron resources. Becomes obsolete at Rifling (instead of Gunpowder) and upgrades into Riflemen."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Georgia",
    leader: "Tamar",
    ability: {
      name: "Ecclesiastical Architecture",
      description: "Buildings unlocked by religious beliefs (except Houses of Worship) are built using Production instead (cost equal to 50% of the required Faith); these buildings provide +2 Production."
    },
    unique: [
      {
        type: "Building",
        name: "Tsikhe",
        replaces: "Walls",
        description: "In addition to typical defensive perks, provides +3 Faith, and +1 Culture from Strategic Resources (e.g. Horses, Iron). Units trained in this City earn Golden Age points from kills."
      },
      {
        type: "Unit",
        name: "Khevsur",
        replaces: "Swordsmen",
        description: "Arrives at Guilds technology instead of Iron Working, but ignores terrain movement costs as a Scout would, and receives a +33% Combat Bonus during Golden Ages."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Germany",
    leader: "Bismarck",
    ability: {
      name: "Precision Engineering",
      description: "+1 Science and Production from Workshops, Windmills, Factories and Hydro Plants. +33% faster Great Engineer generation."
    },
    unique: [
      {
        type: "Building",
        name: "Hanse",
        replaces: "Bank",
        description: "In addition to the typical perks, gain +5% Production in the City for every Trade Route your empire currently maintains with a City-State."
      },
      {
        type: "Unit",
        name: "Panzer",
        replaces: "Tank",
        description: "80 Strength (vs. 70) and 6 Movement (vs. 5)."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Golden Horde",
    leader: "Batu Khan",
    ability: {
      name: "Golden Conquest",
      description: "Units are +50% more effective at intimidating City-States. Puppeted Cities provide +50% Production, Gold, and Science, and generate -33% less Unhappiness."
    },
    unique: [
      {
        type: "Building",
        name: "Yam Route",
        replaces: "Caravansaries",
        description: "Available at The Wheel instead of Horseback Riding. Retains Trade Route perks but doesn’t provide Gold, instead providing +3 Science. Allows Airlifting between Cities with Yam Routes."
      },
      {
        type: "Unit",
        name: "Ulan",
        replaces: "Pikemen",
        description: "Stronger than its counterpart (17 Strength vs. 16). Behaves as a Mounted Unit and requires a Horse resource. 4 Movement (vs. 2). Arrives with Charge (+33% bonus against wounded foes) and does not receive a penalty in combat with Cities."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Goths",
    leader: "Alaric I",
    ability: {
      name: "Drauhtinon",
      description: "Melee and Gunpowder units receive +1 Movement and heal 25 HP upon killing a unit."
    },
    unique: [
      {
        type: "Unit",
        name: "Gadrauht",
        replaces: "Longswordsman",
        description: "22 Strength (vs. 21). Cheaper to produce (72 hammers vs. 80) and does not require Iron to train."
      },
      {
        type: "Improvement",
        name: "Harjis",
        replaces: "Nothing",
        description: "Available at Mining. Must be adjacent to a Luxury resource (but not on a Luxury resource) and non-adjacent to another Harjis. Provides +1 Production. Gains an additional +1 Production upon the discovery of Iron Working, Gunpowder and Dynamite."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Greece",
    leader: "Pericles",
    ability: {
      name: "Hellenic League",
      description: "City-State Influence degrades half as slowly and recovers at twice the typical rate."
    },
    unique: [
      {
        type: "Building",
        name: "Odeon",
        replaces: "Amphitheater",
        description: "Provides +4 Culture (vs. 2), +1 Gold, and does not require Gold maintenance. Houses a slot for a Great Writer specialist."
      },
      {
        type: "Unit",
        name: "Hoplite",
        replaces: "Spearmen",
        description: "13 Strength (vs. 11)."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Hittites",
    leader: "Muwatallis",
    ability: {
      name: "Bronze and Iron",
      description: "+1 Gold from Mines. Start with Mining Technology."
    },
    unique: [
      {
        type: "Building",
        name: "Lion's Gate",
        replaces: "Walls",
        description: "Cheaper to construct (40 hammers vs. 50). In addition to the typical defensive perks, provides +2 Gold and +2 Culture in the City."
      },
      {
        type: "Unit",
        name: "Heavy Chariot",
        replaces: "Chariot Archer",
        description: "Identical Ranged Strength and 3 Movement (vs. 4), but 10 Melee Strength (vs. 5). Gains a +20% defensive bonus when enemies initiate combat."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Huns",
    leader: "Attila",
    ability: {
      name: "Scourge of God",
      description: "Start with Animal Husbandry Technology. +1 Production from all Pastures. Raze Cities at double speed and borrow City names from rival Civilizations."
    },
    unique: [
      {
        type: "Building",
        name: "Qara U'y",
        replaces: "Stable",
        description: "In addition to the typical perks, yields +1 Faith from Horses. Provides 2 Horse Resources for the empire upon completion."
      },
      {
        type: "Unit",
        name: "Horse Archer",
        replaces: "Chariot Archer",
        description: "7 Melee Strength (vs. 6), receives no movement penalty in Rough terrain, and arrives with Accuracy I (+15% bonus in Open terrain). Requires Horses to construct."
      }
    ],
    bias: [],
    avoid: ["Forest", "Jungle"]
  },
  {
    name: "Hungary",
    leader: "András II",
    ability: {
      name: "Verszerzodes",
      description: "Walls, Castles, Arsenals and Military Bases provide +1 Production and Culture. May construct up to 2 Palaces."
    },
    unique: [
      {
        type: "Unit",
        name: "Black Arquebusier",
        replaces: "Musketmen",
        description: "Identical strength, but is capable of setting up to perform Ranged attacks (similar to a Siege Unit). Arrives with Accuracy I (+15% bonus in Open terrain). Slightly cheaper to produce (90 vs. 100)."
      },
      {
        type: "Building",
        name: "Orszaggyules",
        replaces: "Palace",
        description: "In addition to the regular bonuses of a Palace, provides +25% faster Great Person generation and +10% Production towards buildings in the City. Receive this building in the original Capital. Upon the discovery of Mathematics, a second Orszaggyules may be constructed in another City (for 67 hammers); this City becomes the new Capital of the empire. The original Orszaggyules may be sold and reconstructed to move this designation back; the Capital is located wherever the last Orszaggyules was constructed."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Inca",
    leader: "Pachacuti",
    ability: {
      name: "Great Andean Road",
      description: "Units ignore terrain costs moving through Hills. No Gold maintenance is paid for tile improvements in Hills, and half the Gold is paid for improvements elsewhere."
    },
    unique: [
      {
        type: "Improvement",
        name: "Terrace Farm",
        replaces: "Nothing",
        description: "May only be constructed in Hills. Provides +1 Food, increasing by an additional +1 Food for every adjacent Mountain tile. Like Farms, receives an additional +1 Food if adjacent to freshwater at Civil Service, otherwise receiving this bonus at Fertilizer if not adjacent to freshwater."
      },
      {
        type: "Unit",
        name: "Slinger",
        replaces: "Archer",
        description: "5 Melee Strength (from 4, vs. 5). The Slinger has a chance to withdraw from melee combat initiated by foes, avoiding some damage depending on the available Movement of the attacker and the amount of available tiles behind the Slinger."
      }
    ],
    bias: ["Hills"],
    avoid: []
  },
  {
    name: "India",
    leader: "Gandhi",
    ability: {
      name: "Population Growth",
      description: "Settling Cities produces twice as much Unhappiness. Unhappiness generated from the number of Citizens in the empire is halved. (Cities provide an additional +3 Unhappiness.)"
    },
    unique: [
      {
        type: "Building",
        name: "Mughal Fort",
        replaces: "Castle",
        description: "In addition to the typical defensive perks, provides +4 Culture (from 2), and +2 Happiness. +2 Tourism at Flight. No longer requires Walls to construct."
      },
      {
        type: "Unit",
        name: "War Elephant",
        replaces: "Chariot Archer",
        description: "8 Melee Strength (from 9, vs. 6) and 11 Ranged Strength (vs. 10). Slightly slower (3 Movement vs. 4) and more costly to produce (46 hammers vs. 37). Does not receive Movement penalties in Rough terrain and does not require Horses to construct. Arrives with Swift Charge (+50% bonus against Melee foes; +25% against Gunpowder foes)."
      }
    ],
    bias: ["Grassland"],
    avoid: []
  },
  {
    name: "Indonesia",
    leader: "Gajah Mada",
    ability: {
      name: "Spice Islanders",
      description: "Receive 2 copies of unique Luxury Resources in the first 3 Cities founded on separate landmasses. These Cities may never be Razed. (Each City must have its own unique landmass to receive a Luxury.) (Note that the unique Luxuries spawn as resource tiles beneath these Cities; if the City is settled atop an existing resource, the new Luxury will overwrite it.)"
    },
    unique: [
      {
        type: "Building",
        name: "Candi",
        replaces: "Garden",
        description: "In addition to the typical perks, provides +2 Faith and an additional +2 Faith for each Religion with at least 1 Follower in the City. Unlike the Garden, the Candi may be built without access to freshwater. 25% less costly to construct (60 hammers vs. 80)."
      },
      {
        type: "Unit",
        name: "Kris Swordsman",
        replaces: "Swordsmen",
        description: `
        15 Strength (from 14, vs. 14).
        After its first combat, this Unit receives one of many unique promotions at random:
        Invulnerability: +30% bonus when foe initiates combat. Restore +20 additional HP while fortified.
        Sneak Attack: Flanking bonus increases to +15% per ally (vs. +10%).
        Heroism: Radiates a +15% Combat Bonus to allies within 2 tiles as if it were a Great General.
        Ambition: +50% bonus when initiating combat, but a -20% penalty when defending.
        Restlessness: +1 Movement; Unit may attack twice.
        Recruitment: Heal 50 HP from non-Barbarian kills.
        (Harmful promotions Enemy Blade and Evil Spirits have been removed.)        
        `
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Ireland",
    leader: "Michael Collins",
    ability: {
      name: "Gaelic Revival",
      description: "+2 Happiness from all National Wonders (excluding the Palace). All Cities receive a +15% Production bonus towards buildings required for National Wonders."
    },
    unique: [
      {
        type: "Unit",
        name: "Fenian",
        replaces: "Riflemen",
        description: "Significantly stronger (40 Strength vs. 34) and significantly cheaper to construct (110 hammers vs. 150)."
      },
      {
        type: "Building",
        name: "Irish Pub",
        replaces: "Zoo",
        description: "In addition to the typical perks, provides +3 Food in the City and requires no Gold maintenance. +1 Production from Wine, Tea, Coffee and Tobacco resources in the City."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Iroquois",
    leader: "Hiawatha",
    ability: {
      name: "The Great Warpath",
      description: "Units move through Forests and Jungles in friendly territory as if they were Roads. Forests and Jungles can be used to establish a City Connection upon the discovery of the Wheel, and extend the range of friendly Caravans like Roads."
    },
    unique: [
      {
        type: "Building",
        name: "Longhouse",
        replaces: "Workshop",
        description: "In addition to the typical perks, the Longhouse provides +1 Production to all worked Forest and Jungle tiles in the City. Significantly cheaper to construct (50 hammers from 66, vs. 80). The Longhouse now retains the +10% Production bonus of the Workshop."
      },
      {
        type: "Unit",
        name: "Mohawk Warrior",
        replaces: "Swordsmen",
        description: "15 Strength (from 14, vs. 14). Receives a +33% Combat Bonus fighting in Forests and Jungles. Does not require Iron."
      }
    ],
    bias: ["Forest"],
    avoid: []
  },
  {
    name: "Israel",
    leader: "David",
    ability: {
      name: "Promised Land",
      description: "+1 Culture from Pastures."
    },
    unique: [
      {
        type: "Unit",
        name: "Maccabee",
        replaces: "Swordsmen",
        description: "Earn 100% of foe's Strength as Faith from kills. Significantly cheaper to construct (40 hammers vs. 50). Does not require Iron to construct."
      },
      {
        type: "Building",
        name: "Yeshiva",
        replaces: "Temple",
        description: "In addition to the typical perks, grants +1 Food and +1 Production in the City, but is more expensive to construct (80 hammers vs. 67)."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Italy",
    leader: "Vittorio Emanuele III",
    ability: {
      name: "Rinascimento",
      description: "+1 Culture from Specialists. Receive 250 Golden Age points upon completion of a Policy Tree, and if already in a Golden Age, extends it by 3 turns."
    },
    unique: [
      {
        type: "Great Person",
        name: "Pittore",
        replaces: "Great Artist",
        description: "Golden Ages started by a Pittore last for 9 turns (vs. 6), scaling to 14 turns with Chichen Itza or Universal Suffrage, but will not increase further with both."
      },
      {
        type: "Building",
        name: "Basilica",
        replaces: "Museum",
        description: "Available at Industrialization (instead of Archeology). +20% faster Great Person generation in the City. Houses 2 slots for Great Artist Specialists, and generates 2 Great Artist Points each turn."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Japan",
    leader: "Oda Nobunaga",
    ability: {
      name: "Bushido",
      description: "Units fight at full Strength even when injured. +1 Culture from all Fishing Boats and +2 Culture from Atolls."
    },
    unique: [
      {
        type: "Building",
        name: "Dojo",
        replaces: "Barracks",
        description: "In addition to the typical perks, provides +2 Science in the City and grants Units trained in this City an unconditional +10% Combat Bonus."
      },
      {
        type: "Unit",
        name: "Samurai",
        replaces: "Longswordsmen",
        description: "Arrives with Shock I (+15% bonus in Open terrain) and Great Generals II (this Unit will boost progress towards Great Generals through combat more than normal). While embarked, the Samurai may construct Fishing Boats in 4 turns."
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Jerusalem",
    leader: "Fulk V",
    ability: {
      name: "Holy Land",
      description: "+1 Faith from Luxury Resources."
    },
    unique: [
      {
        type: "Building",
        name: "Outremer",
        replaces: "Courthouse",
        description: "In addition to the typical perks, provides +2 Culture, Faith and Happiness in the City. Requires no Gold maintenance."
      },
      {
        type: "Unit",
        name: "Crusader",
        replaces: "Longswordsmen",
        description: "Available at Theology (instead of Steel). Much weaker (17 Strength vs. 21), but receives a +20% Combat Bonus in foreign territory and may enter rival territory without Open Borders. Earns Faith from kills equal to twice the Strength of defeated foes. Cheaper to construct (70 hammers vs. 80)."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Khmer",
    leader: "Suryavarman II",
    ability: {
      name: "Grand Baray of Angkor",
      description: "Receive a free Baray in the Capital."
    },
    unique: [
      {
        type: "Building",
        name: "Baray",
        replaces: "Garden",
        description: "In addition to the typical perks, 10% of Food is carried over after a Citizen is born. +2 Food and +2 Faith at Drama and Poetry. The Baray may be built without access to freshwater."
      },
      {
        type: "Unit",
        name: "Ballista Elephant",
        replaces: "Trebuchet",
        description: `
        Available at Machinery (instead of Physics). 18 Ranged Strength (vs. 14), 20 Melee (vs. 12), and 3 Movement (vs. 2). Gains a +100% bonus initiating combat with Cities (vs. +200%).
        Unlike the Trebuchet, the Ballista Elephant does not receive a Sight penalty.
        Receives the Feared Elephant (enemy Units adjacent to this Unit receive a -10% combat penalty) promotion. (Feared Elephant will not stack.)
        Slightly more costly to construct (90 hammers vs. 80).
        `
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Kilwa",
    leader: "Ali ibn al-Hassan Shirazi",
    ability: {
      name: "Merchant Economy",
      description: "Gain +5% Growth (excess Food) in the City for each foreign Trade Route departing the City. +4 Gold from internal Trade Routes. (Extra Food is updated the turn after the Trade Route is established.)"
    },
    unique: [
      {
        type: "Unit",
        name: "Dhow",
        replaces: "Caravel",
        description: "Costs less to produce (70 hammers vs. 80), but has 17 Strength (vs. 20). Arrives with the Boarding Party I (+15% Combat Bonus against Naval Units) promotion."
      },
      {
        type: "Building",
        name: "Coral Port",
        replaces: "Workshop",
        description: "In addition to the typical perks, provides varying yields to certain Coastal resources: +2 Production from Coral, +1 Culture from Fish, Pearls, and Crabs, +2 Gold from Whales."
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Kongo",
    leader: "Mvemba a Nzinga",
    ability: {
      name: "Heart of Africa",
      description: "Borders naturally expand 33% faster."
    },
    unique: [
      {
        type: "Unit",
        name: "Ngao Mbeba",
        replaces: "Swordsman",
        description: "15 Strength (vs. 14). May not initiate combat, but gains double Strength defending from Ranged attacks. Does not require Iron to produce."
      },
      {
        type: "Building",
        name: "Slave Market",
        replaces: "Colosseum",
        description: "Subtracts 1 Citizen in the City upon completion. Provides +4 Production and +5 Gold, with an additional +3 Production and +2 Gold at Industrialization. Does not provide Happiness and does not require Gold maintenance."
      }
    ],
    bias: ["Forest"],
    avoid: []
  },
  {
    name: "Korea",
    leader: "Sejong",
    ability: {
      name: "Scholars of the Jade Hall",
      description: "+1 (from +2) Science from Specialists, +2 Science from Great Person tile improvements, and +1 Science from the Palace."
    },
    unique: [
      {
        type: "Building",
        name: "Cooperative",
        replaces: "Factory",
        description: `In addition to the typical perks, provides +2 Happiness and houses an additional Engineer Specialist (3 vs. 2). 
        Does not require Gold maintenance. Ideologies are unlocked for Korea after the completion of only 1 Cooperative (compared to 3 Factories).
        `
      },
      {
        type: "Unit",
        name: "Hwach'a",
        replaces: "Trebuchet",
        description: "Massive 26 Ranged Strength (vs. 14), but slightly less Melee Strength (11 vs. 12). Suffers no Sight penalty, but receives no bonus initiating combat with Cities. Receives the Indirect Fire promotion."
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Lithuania",
    leader: "Vytautas",
    ability: {
      name: "Baltic Mythology",
      description: "Great Prophets generated by or given to Lithuania are replaced with Krivises. Cannot found a Religion."
    },
    unique: [
      {
        type: "Unit",
        name: "Krivis",
        replaces: "Great Prophet",
        description: "Incapable of spreading or founding a Religion, instead used to create Sacred Groves."
      },
      {
        type: "Improvement",
        name: "Sacred Grove",
        replaces: "Nothing",
        description: `
        Provides +1 Food, Production, Culture, Science and Faith. Each yield increases by +1 upon the discovery of Philosophy, Theology, Acoustics, Archeology, Plastics, Computers, and the Internet (for a total of 8 of each yield).
        `
      },
      {
        type: "Unit",
        name: "Pestininkas",
        replaces: "Pikeman",
        description: "Identical combat capabilities, but is significantly cheaper to construct (40 Production vs. 60)."
      },
      {
        type: "Building",
        name: "Grand Cathedral of Vilnius",
        replaces: "Grand Temple",
        description: "Behaves like a Grand Temple but can be constructed without the presence of religion and may be built outside of a Holy City. Cheaper to construct (63 hammers vs. 84)."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Macedonia",
    leader: "Alexander",
    ability: {
      name: "Macedonian Discipline",
      description: "Barracks and Armories provide +1 Food, Culture and Happiness in the City. Receive a free Hetairoi at Horseback Riding."
    },
    unique: [
      {
        type: "Unit",
        name: "Sarissophoroi",
        replaces: "Pikemen",
        description: "Available at Philosophy (instead of Civil Service). Weaker, (14 Strength vs. 16), but gains a +100% Combat Bonus (vs. +50%) against Mounted units."
      },
      {
        type: "Great Person",
        name: "Hetairoi",
        replaces: "Great General",
        description: `
        Replaces the Great General. Considered a Mounted Unit with 15 Combat Strength and 4 Movement with identical mechanics to Horsemen, and arrives with several promotions:
        Leadership: Grants the Great General bonus to Units within 2 tiles as a General would,
        Great Generals II: This Unit will earn progress towards Great Generals through combat significantly faster,
        Charge: +33% bonus vs. wounded foes,
        Heavy Charge: Enemy Units will retreat if they receive more damage than this Unit; this Unit deals +50% damage to defenders incapable of retreat.
        Can upgrade to a Knight, but will lose its ability to create Citadels.
        Requires a Horse resource. (If no Horses are available when this unit is generated, it receives a Strategic Resource penalty!)
        `
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Madagascar",
    leader: "Ralambo",
    ability: {
      name: "Sacred Hills of Imerina",
      description: "+6 Culture and Faith from Holy Sites."
    },
    unique: [
      {
        type: "Unit",
        name: "Mpiambina",
        replaces: "Inquisitor",
        description: `
        Ranged Unit with 8 Melee Strength, 14 Ranged Strength, 1 Range, and 3 Movement. Receives one promotion from a unique pool after its first round of combat:
        Kelimazala - Allows Unit to attack twice.
        Ramahavaly - +50% defensive bonus, -50% attacking penalty.
        Manjakatsiroa - +25% Combat Bonus in friendly territory.
        Rafantaka - Adjacent allies heal +15 HP while Fortified. This Unit heals every turn, even if an action was performed.
        Mosasa - +4 Sight, +4 Range.
        Rabehaza - Gain a chance to capture defeated enemies.
        Ambohimanambola - Grant the Great General bonus to nearby allies.
        Sehatra - Heal fully from every kill.
        Lambamena - +100% bonus initiating combat with Cities.
        Famadiahona - Knock back foes that take more damage than this Unit receives during combat. This unit gains a chance to Withdraw from Melee combat.
        Razana - +3 Movement. Great Generals that start their turn on the same tile as this Unit receive +2 Movement.
        Masina - +75% bonus against wounded foes.
        `
      },
      {
        type: "Building",
        name: "Rova",
        replaces: "Walls",
        description: "In addition to the typical perks, provides +1 Happiness and +3 Faith."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Manchuria",
    leader: "Nurhaci",
    ability: {
      name: "Eight Banners",
      description: "Mounted, Armored, and Bomber Units receive the Volley promotion (+50% bonus vs. Fortified Units and Cities) and pay no Gold maintenance. Stables are built twice as fast and provide +1 Gold."
    },
    unique: [
      {
        type: "Building",
        name: "Canton Factory",
        replaces: "Bank",
        description: "In addition to the typical perks, boosts City gold output by an additional +10% (+35% vs. 25%), may house an additional Great Merchant Specialist, and is half as costly to produce (67 hammers vs. 134)."
      },
      {
        type: "Unit",
        name: "Qianlong Cavalry",
        replaces: "Cavalry",
        description: "Stronger and faster (36 Strength vs. 34 and 5 Movement vs. 4) and arrives with Great Generals I (this Unit will boost progress towards Great Generals through combat more than normal)."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Maori",
    leader: "Te Rauparaha",
    ability: {
      name: "Mana of Tumatauenga",
      description: "During the first 5 turns, all units (except Recon units) receive +2 Movement and +1 Sight. After this, units receive +2 Movement during the first turn they appear. (Captured units, such as Workers, will receive this bonus on their first available move.)"
    },
    unique: [
      {
        type: "Unit",
        name: "Maori Warrior",
        replaces: "Warrior",
        description: "9 Strength (from 8, vs. 8). Possesses the Haka War Dance (enemy Units adjacent to this Unit receive a -10% combat penalty) promotion. (Haka War Dance will not stack. In Brave New World, this unit belonged to Polynesia.)"
      },
      {
        type: "Improvement",
        name: "Pa",
        replaces: "Fort",
        description: "Available at Engineering. +2 Food and +1 Faith. May only be built on Hills without resources and cannot be constructed adjacent to one another. Gains an additional +1 Food at Civil Service and Fertilizer. Units stationed on a Pa receive a +40% defensive bonus."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Maurya",
    leader: "Ashoka",
    ability: {
      name: "Inscriptions of the Dharma",
      description: "All non-Air Units receive a -10% Combat Penalty when attacking and a +10% Combat Bonus when defending."
    },
    unique: [
      {
        type: "Unit",
        name: "Fast Worker",
        replaces: "Worker",
        description: "Ignores terrain Movement penalties."
      },
      {
        type: "Building",
        name: "Pillar of Ashoka",
        replaces: "Monument",
        description: "Half as costly to construct (13 hammers vs. 26) and requires no Gold maintenance. Available at Pottery (instead of immediate availability)."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Maya",
    leader: "Pacal",
    ability: {
      name: "The Long Count",
      description: "After researching Theology, choose a Great Person at the end of each Mayan calendar cycle (every 394 in-game ‘years’). Each type of Great Person may only be chosen once. (Great People chosen through Long Count cycles will delay the generation of the next naturally earned Great Person.) (Long Count intervals are based on fixed intervals regardless of when Theology was researched. Currently, these intervals are (on Quick speed): Turns 22 / 28 / 35 / 42 / 48 / 57 / 67 / 77 / 88 / 102 / 122 / 152)"
    },
    unique: [
      {
        type: "Building",
        name: "Pyramid",
        replaces: "Shrine",
        description: "In addition to the typical perks, provides an additional point of Faith (2 vs. 1) and +2 Science."
      },
      {
        type: "Unit",
        name: "Atlatist",
        replaces: "Archer",
        description: "Available immediately with identical combat capabilities and slightly less costly to construct (24 hammers vs. 27)"
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Mexico",
    leader: "Benito Juarez",
    ability: {
      name: "Encomienda System",
      description: "Receive a free Worker near the Capital at Pottery. City-States that are afraid of Mexico gain +6 Influence per turn when Mexico can demand tribute from them, but does not. Reveal all City-States within a 10-tile radius of your starting location after the end of the first turn."
    },
    unique: [
      {
        type: "Unit",
        name: "Ranchero",
        replaces: "Settler",
        description: "Does not halt Growth to produce, but does not protect the City from starvation. Food does not contribute to its Production."
      },
      {
        type: "Building",
        name: "Hacienda",
        replaces: "Windmill",
        description: "+1 Production from Luxury resources, +1 Gold from Bonus resources (e.g. Wheat, Fish), and +1 Food from Strategic Resources (e.g. Horses, Iron). Does not require Gold maintenance."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Mongolia",
    leader: "Genghis Khan",
    ability: {
      name: "Mongol Terror",
      description: "Gain a +30% Combat Bonus in combat with City-States and their Units. Mounted and Armored Units receive +1 additional Movement. Upon the discovery of Chivalry, reveal an additional Horse resource tile within the borders of every current Mongol city; these Cities yield an additional +1 Food from all Horse resources. (These Horses will not spawn over existing resources or features (such as forests, mountains, or Natural Wonders), but may spawn on Hills if necessary.)"
    },
    unique: [
      {
        type: "Unit",
        name: "Keshik",
        replaces: "Knight",
        description: "A Ranged Mounted Unit with 5 Movement (vs. 4), 17 Strength (from 15) and 17 Ranged Strength (from 16). May move after combat and receives no penalty in combat with Cities. Arrives trained with Great Generals I (this Unit will boost progress towards Great Generals through combat more than normal) and Quick Study (+50% XP earned through combat)."
      },
      {
        type: "Great Person",
        name: "Khan",
        replaces: "Great General",
        description: "In addition to the typical traits, the Khan may move further (5 Movement vs. 4) and greatly improves the healing capabilities of adjacent Fortified Units by an additional +15 HP. (Note that this healing bonus will not apply to Units stationed on the same tile as the Khan.)"
      }
    ],
    bias: ["Plains"],
    avoid: []
  },
  {
    name: "Moors",
    leader: "Abd-ar-Rahman III",
    ability: {
      name: "Glory of Al-Andalus",
      description: "All Cities gain a +30% Production bonus towards buildings (not including Wonders) during the Medieval Era, decreasing to +15% in the Renaissance Era. (This ability updates on each turn or when technology is gained through other means. Upon entering the Industrial Era, the production bonus ends.)"
    },
    unique: [
      {
        type: "Unit",
        name: "Granadine Cavalry",
        replaces: "Lancer",
        description: "A Ranged Mounted unit with identical Combat Strength to the Lancer in addition to 29 Ranged Strength and 2 Range. The Granadine Cavalry sees no bonuses against Mounted Units and may not move after initiating combat, but may attack Cities without penalty."
      },
      {
        type: "Building",
        name: "Alcazaba",
        replaces: "Castle",
        description: "Retains defensive capabilities in addition to providing +3 Science and +10% Food in the City."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Morocco",
    leader: "Ahmad al-Mansur",
    ability: {
      name: "Gateway to Africa",
      description: "Receive +2 Culture (from +1) and an additional +4 Gold (from +3) for each external Trade Route sent by or to Morocco. Rivals receive an additional +2 Gold for sending Trade Routes to Morocco. Receive an additional +1 Gold and Culture for every new Era entered. (In the Ancient Era, Morocco will only receive +2 / +4; increasing to +3 / +5 in Classical, etc…)"
    },
    unique: [
      {
        type: "Improvement",
        name: "Kasbah",
        replaces: "Nothing",
        description: "Available at Chivalry. May only be built on Desert tiles (excluding Oases). Provides +2 (from +1) Food, +1 Production, and +1 Gold. Units gain a +50% Combat Bonus defending this tile."
      },
      {
        type: "Unit",
        name: "Berber Cavalry",
        replaces: "Cavalry",
        description: "In addition to the typical traits, receives a +25% Combat Bonus inside friendly territory and a +50% bonus fighting in Desert, Floodplains, and Oases."
      }
    ],
    bias: ["Desert"],
    avoid: []
  },
  {
    name: "Mysore",
    leader: "Hyder Ali",
    ability: {
      name: "Brahmin Elite",
      description: "Specialists provide +1 Food and Production, but generate +50% more Unhappiness. (This Unhappiness penalty interacts additively instead of multiplicatively with other bonuses or penalties. Universal Suffrage, for example, which reduces Specialist Unhappiness by 50%, would cancel out this penalty.)"
    },
    unique: [
      {
        type: "Unit",
        name: "Rocket Corps",
        replaces: "Artillery",
        description: "Increased Melee Strength (23 vs. 21). Unlike Artillery, the Rocket Corps may attack without prior setup."
      },
      {
        type: "Building",
        name: "Mysore Palace",
        replaces: "Hermitage",
        description: "Available at Chivalry (instead of Architecture). Requires Walls to be built in all Cities. In addition to the typical perks, provides +3 Production, Science and Gold. Upon completion, the empire enters a Golden Age."
      }
    ],
    bias: ["Hills"],
    avoid: []
  },
  {
    name: "Nabataea",
    leader: "Aretas III",
    ability: {
      name: "Spring of Moses",
      description: "Freshwater Farms receive +1 Food at Mathematics rather than Civil Service."
    },
    unique: [
      {
        type: "Unit",
        name: "Zabonah",
        replaces: "Scout",
        description: `
        May not attack. 3 Movement (vs. 2).
        May discover Cities from an additional +3 tiles away. When this Unit discovers a Capital or City-State, gain +10 Gold for the Empire. Will not upgrade from Ruins.
        (The Zabonah must make Sight contact with players and City-States to ‘meet’ them and will not ‘meet’ when discovering Cities only due to its expanded range.)
        `
      },
      {
        type: "Building",
        name: "Rock-Cut Tomb",
        replaces: "Caravansary",
        description: `
        In addition to the typical perks, provides an additional +1 Gold (3 vs. 2) and +2 Food in the City. Gains an additional +1 Food for each Trade Route departing the City.
        `
      }
    ],
    bias: ["Desert"],
    avoid: []
  },
  {
    name: "Netherlands",
    leader: "William",
    ability: {
      name: "Dutch East India Company",
      description: "+1 Happiness from each unique Luxury in the empire and +1 Gold from Luxury resource tiles."
    },
    unique: [
      {
        type: "Improvement",
        name: "Polder",
        replaces: "Nothing",
        description: `
        Available at Guilds. May be built on Marsh and Floodplain tiles and on Lakes or Coastal tiles with at least 3 adjacent land tiles.
        +3 Food if constructed on Marsh, +2 Food if constructed on Lakes or Coast.
        Gains +1 Production and +2 Gold at Economics.
        `
      },
      {
        type: "Unit",
        name: "Sea Beggar",
        replaces: "Privateer",
        description: `
        27 Strength (from 25, vs. 27). Arrives with the Supply (may heal outside friendly territory; heals 15 HP each turn), Coastal Raider (+20% bonus when attacking Cities; Steal Gold equal to 33% of inflicted damage) and Boarding Party I (+15% bonus in Melee combat with Naval Units) promotions.
        `
      }
    ],
    bias: ["Coast", "Wetlands"],
    avoid: []
  },
  {
    name: "New Zealand",
    leader: "Michael Joseph Savage",
    ability: {
      name: "Where She Goes",
      description: "Earn 10 Faith, 6 Culture, 40 Gold, or 12 Science when meeting a Civilization or City-State for the first time. (This bonus is randomly chosen.)"
    },
    unique: [
      {
        type: "Unit",
        name: "Defender",
        replaces: "Ironclad",
        description: `
        50 Strength (vs. 45). Earns a +15% bonus inside friendly territory and ignores Zone of Control movement penalties when within 2 tiles of a friendly City. In addition to the typical traits, arrives with Cover I (gain a +33% bonus defending against Ranged attacks). Doesn’t require Coal.
        `
      },
      {
        type: "Unit",
        name: "Maori Battalion",
        replaces: "Infantry",
        description: `
        Possesses the promotions and traits of a Marine. Receive a Combat Bonus the further this unit is away from the Capital (+2% per tile to a maximum of +40%). Each Battalion stationed within a City-State’s borders earns +1 Influence with that City-State each turn.
        `
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Normandy",
    leader: "William the Conqueror",
    ability: {
      name: "Castle Builders",
      description: "Units gain a +10% Combat Bonus outside of friendly territory. Cities receive +5 additional Strength."
    },
    unique: [
      {
        type: "Improvement",
        name: "Motte and Bailey",
        replaces: "Nothing",
        description: `
        Available at Engineering. +1 Food and Production. +2 Culture at Flight. Cannot be built adjacent to one another.
        Units gain a +25% Combat Bonus defending this tile.
        `
      },
      {
        type: "Unit",
        name: "Pedite",
        replaces: "Longswordsman",
        description: `
        20 Strength (vs. 21). Marginally cheaper to produce (77 hammers vs. 80). Arrives with Shock I (+15% bonus vs. foes in Open terrain) and may construct Motte and Baileys.
        `
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Norway",
    leader: "Harald Hardrada",
    ability: {
      name: "Nordic Bounty",
      description: "+1 Faith from Coastal resources. +2 Food and +1 Production from Snow tiles."
    },
    unique: [
      {
        type: "Unit",
        name: "Ski Infantry",
        replaces: "Great War Infantry",
        description: `
        Matches the strength of its counterpart and arrives with Drill I and II (total of +30% bonus fighting in Rough terrain) and the unique Ski Infantry promotion (+25% bonus fighting in Snow, Tundra and Hills without Forests or Jungles; move twice as far through these tiles).
        `
      },
      {
        type: "Building",
        name: "Stave Church",
        replaces: "Temple",
        description: "Cheaper to construct (50 hammers vs. 67) and requires no Gold maintenance. +1 Production from Tundra and Snow tiles."
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Nubia",
    leader: "Amanitore",
    ability: {
      name: "Ta Seti",
      description: "Begin with a free Apedemak's Bow."
    },
    unique: [
      {
        type: "Unit",
        name: "Apedemak's Bow",
        replaces: "Scout",
        description: `
        Replaces the Scout and has identical Strength, but is classified as a Ranged unit and may attack with 3 Range. Will not upgrade from Ruins, but can upgrade with Gold like the Scout when appropriate.
        `
      },
      {
        type: "Building",
        name: "Blast Furnace",
        replaces: "Forge",
        description: `
        In addition to the typical perks, provides +2 Culture by default, +2 Culture from Iron resources, and newly-trained Ranged, Siege and Recon units receive the Accuracy I (+15% bonus in Open terrain) promotion for free. Does not require resources nearby and does not require Gold maintenance.
        `
      }
    ],
    bias: ["Desert"],
    avoid: []
  },
  {
    name: "Oman",
    leader: "Saif bin Sultan",
    ability: {
      name: "Chain of the Earth",
      description: "All Naval Units ignore Zone of Control movement penalties. Receive a free Seaport in conquered Cities."
    },
    unique: [
      {
        type: "Unit",
        name: "Baghlah",
        replaces: "Galley",
        description: `
        Greater Melee Strength (8 Strength vs. 6) and Ranged Strength (12 vs. 8). Moves further (4 Movement vs. 3) and receives Faith and Gold from kills equal to the Strength of the defeated foe.
        Arrives with the Coastal Raider I (+20% bonus initiating combat with Cities; steal Gold equal to 33% of inflicted damage) promotion.
        `
      },
      {
        type: "Building",
        name: "Minaa’",
        replaces: "Harbor",
        description: `
        Enemy Naval Units take 30 damage if they end their turn next to this City. Provides +5 City Strength, and +2 Production for each Trade Route departing the City. Allows units to Airlift between Cities with Minaa’s.
        `
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Ottomans",
    leader: "Suleiman",
    ability: {
      name: "Millets",
      description: "Each City gains +1 Local Happiness for each Religion present in the City. Receive Faith when promoting Units equal to the required experience (not when insta-healing)."
    },
    unique: [
      {
        type: "Unit",
        name: "Sipahi",
        replaces: "Lancer",
        description: `
        In addition to the typical traits, receives +1 Sight and Movement (5 vs. 4) and may Pillage without movement penalty. Available at Gunpowder (previously Metallurgy) and costs less to produce (99 hammers from 123, vs. 123).
        `
      },
      {
        type: "Unit",
        name: "Janissary",
        replaces: "Musketmen",
        description: `
        Gains a +25% bonus when initiating combat and heals 50 HP from kills. Less costly to produce (80 from 100, vs. 100).
        `
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Palmyra",
    leader: "Zenobia",
    ability: {
      name: "Pearl of the Desert",
      description: "Cities provide fresh water to all adjacent tiles. Gardens and Water Mills ignore terrain requirements."
    },
    unique: [
      {
        type: "Building",
        name: "Palmyrene Theater",
        replaces: "Amphitheater",
        description: `
        Provides +2 Gold. +1 Production, Gold, and Culture from Oases, +1 Production from Lake tiles. Does not require Gold maintenance.
        `
      },
      {
        type: "Unit",
        name: "Clibanarius",
        replaces: "Horsemen",
        description: `
        14 Strength (vs. 12), arrives with Heavy Charge (enemy Units will retreat if they receive more damage than this Unit; this Unit deals +50% damage to defenders incapable of retreat). This promotion is kept on upgrade.
        `
      }
    ],
    bias: ["Desert"],
    avoid: []
  },
  {
    name: "Papal States",
    leader: "Urban II",
    ability: {
      name: "The Holy See",
      description: "Owned occupied Cities that follow your Religion instantly receive a Courthouse. +1 Food, Gold, and Culture from Great Person Tile Improvements. Receive 2 free Delegates in the World Congress."
    },
    unique: [
      {
        type: "Unit",
        name: "Swiss Guard",
        replaces: "Landsknecht",
        description: `
        Does not require the Mercenary Army policy, but still must be purchased. Available at Economics. More expensive to purchase (210 Gold vs. 160), but is faster (3 Movement vs. 2) and significantly stronger (25 Strength vs. 16). Receives Faith and Gold from kills equal to the Strength of the defeated foe, and arrives with Medic I and II (adjacent allies heal a total of +10 additional HP while Fortified). May upgrade into Riflemen.
        `
      },
      {
        type: "Building",
        name: "Saint Peter’s Basilica",
        replaces: "Grand Temple",
        description: `
        In addition to the typical perks, provides a free Cathedral in the City and spawns a Great Prophet near the City.
        `
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Persia",
    leader: "Darius I",
    ability: {
      name: "Achaemenid Legacy",
      description: "Golden Ages last +50% longer. During a Golden Age, Units receive +1 Movement. No longer receives a +10% Combat Bonus during a Golden Age."
    },
    unique: [
      {
        type: "Building",
        name: "Satrap's Court",
        replaces: "Bank",
        description: `
        In addition to the typical perks, provides an additional +1 Gold (3 vs. 2) and +2 Happiness.
        `
      },
      {
        type: "Unit",
        name: "Immortal",
        replaces: "Spearmen",
        description: `
        12 Strength (vs. 11). In addition to the typical traits, the Immortal heals an additional +10 HP while fortified.
        `
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Philippines",
    leader: "Emilio Aguinaldo",
    ability: {
      name: "The Good Fight",
      description: "Your Civilian and Naval Units receive +2 Movement in your own territory. The first two Cities you settle (after your Capital) begin with +1 extra Citizen."
    },
    unique: [
      {
        type: "Unit",
        name: "Gerilya",
        replaces: "Expeditionary Forces",
        description: `
        Boasts a whopping 55 Strength (vs. 40). In addition to the Force’s innate promotions, the Gerilya arrives with Volley (gain a +50% bonus against Fortified Units and Cities), 3 Movement (vs. 2), +3 additional Movement while embarked, and +1 Sight while embarked.
        `
      },
      {
        type: "Building",
        name: "National Church",
        replaces: "Zoo",
        description: `
        In addition to the typical perks of a Zoo, the National Church provides +1 Culture and +4 Faith, and provides +15 XP to Units trained in the City. Less costly to construct (100 hammers vs. 120).
        `
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Phoenicia",
    leader: "Hiram",
    ability: {
      name: "Skillful Traders",
      description: "Receive a Square Sail Ship at Sailing. Upon the discovery of Optics, newly settled Cities begin with +1 extra Citizen."
    },
    unique: [
      {
        type: "Unit",
        name: "Square Sail Ship",
        replaces: "Trireme",
        description: `
        Can see 1 tile further than its counterpart and receives the Supply (may heal outside friendly territory; heals 15 HP each turn) promotion. Slightly cheaper to train (25 hammers vs. 30).
        `
      },
      {
        type: "Building",
        name: "Trade Harbor",
        replaces: "Harbor",
        description: `
        In addition to the typical perks, provides +15% production towards Naval units and +1 Production from all Coastal resources.
        `
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Poland",
    leader: "Casimir III",
    ability: {
      name: "Solidarity",
      description: "Social Policies require -10% less Culture to adopt."
    },
    unique: [
      {
        type: "Building",
        name: "Ducal Stable",
        replaces: "Stable",
        description: `
        In addition to the typical perks, provides +1 Gold from each Horse, Sheep, Cattle and Maize resource in the City. +15 XP for Mounted Units trained in the City. Requires no Gold maintenance.
        `
      },
      {
        type: "Unit",
        name: "Winged Hussar",
        replaces: "Lancer",
        description: `
        28 Strength (vs. 25) and 5 Movement (vs. 4). In addition to the Lancer’s innate promotions, arrives with the Heavy Charge (enemy Units will retreat if they receive more damage than this Unit; this Unit deals +50% damage to defenders incapable of retreat) promotion. No longer arrives with Shock (+15% bonus vs. foes in Open terrain).
        `
      }
    ],
    bias: ["Plains"],
    avoid: []
  },
  {
    name: "Polynesia",
    leader: "Kamehameha",
    ability: {
      name: "Wayfinding",
      description: "Units may embark and move through Oceans immediately. Embarked Units gain +1 Movement, +2 Sight (from +1), and double defensive Strength. Units gain a +10% Combat Bonus fighting within 2 tiles of a Moai."
    },
    unique: [
      {
        type: "Improvement",
        name: "Moai",
        replaces: "Nothing",
        description: `
        Available at Construction. Must be built on land adjacent to the coast. Provides +1 Culture and gains an additional +1 Culture for each adjacent Moai. Gains +1 Gold at Flight.
        `
      },
      {
        type: "Unit",
        name: "Koa",
        replaces: "Longswordsmen",
        description: `
        23 Strength (vs. 21), requires no Iron resources, and arrives with the Amphibious (attack from the sea or over rivers without penalty) promotion. Obsolete at Rifling (instead of Gunpowder).
        `
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Portugal",
    leader: "Maria I",
    ability: {
      name: "Mare Clausum",
      description: "Receive twice as much Gold from Resource Diversity from Trade Routes. Caravans and Cargo Ships are 33% less costly to construct."
    },
    unique: [
      {
        type: "Building",
        name: "Feitoria",
        replaces: "Harbor",
        description: `
        In addition to the typical perks, provides +1 Gold from Coastal resources. Naval units trained in this City receive +15 XP. Cheaper to construct (67 hammers vs. 80) and doesn’t require Gold maintenance.
        `
      },
      {
        type: "Unit",
        name: "Nau",
        replaces: "Caravel",
        description: `
        6 Movement (vs. 5). In addition to the typical perks, the Nau may perform a unique action when adjacent to foreign territory, gaining Gold for the empire and XP for the Unit scaling with the distance from Portugal’s Capital.
        `
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Prussia",
    leader: "Frederick",
    ability: {
      name: "Army with a State",
      description: "All Land Units may receive unique Promotions upon leveling up. +50% Food and Production from internal Trade Routes."
    },
    unique: [
      {
        type: "Building",
        name: "Fabrik",
        replaces: "Factory",
        description: `
        25% cheaper to produce (180 hammers vs. 240) and does not require Coal resources.
        `
      },
      {
        type: "Unit",
        name: "Landwehr",
        replaces: "Riflemen",
        description: `
        Available at Military Science instead of Rifling. Arrives trained with Blitz (may attack twice each turn) and Quick Study (+50% Experience earned through combat). 3 Movement (vs. 2).
        `
      },
      {
        type: "Promotion",
        name: "Gehorsam",
        replaces: "Promotion",
        description: `
        Tier 0 - Gehorsam: Designates Units capable of learning further Promotions.
        Tier 1 - Disziplin: +10% Combat Strength.
        Tier 2 - Fleiss: +25% bonus attacking, or Tapferkeit: +25% bonus defending.
        Tier 3 - Zielstrebigkeit: +1 Extra Attack (requires Fleiss),
        Härte: +50% Defensive Strength vs. Ranged Units (requires Tapferkeit),
        or Pünktlichkeit: +1 Movement (requires either).
        (Zielstrebigkeit cannot be chosen by Paradropping Units.)
        Tier 4 - Zuverlässigkeit: Gain a bonus when near Great Generals and Heal every turn (requires Zielstrebigkeit), Zurückhaltung: +30% bonus in friendly territory (requires Härte), or Pflichtbewusstsein: +50% bonus vs. Mounted and Armored Units in addition to +1 Movement (requires Pünktlichkeit).
        `
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Romania",
    leader: "Carol I",
    ability: {
      name: "Nihil Sine Deo",
      description: "Units gain a +10% Combat Bonus against wounded foes. +25% Culture output during Golden Ages (for a total of +45% Culture)."
    },
    unique: [
      {
        type: "Unit",
        name: "Vanator",
        replaces: "Gatling Gun",
        description: `
        31 Melee and Ranged Strength (vs. 30) and 2 Range (vs. 1).
        `
      },
      {
        type: "Building",
        name: "Painted Monastery",
        replaces: "Garden",
        description: `
        In addition to the typical perks, provides +1 Production, +2 Faith, and +1 Great Artist point per turn. Does not require freshwater. Cheaper to construct (67 vs. 80 hammers).
        `
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Rome",
    leader: "Augustus Caesar",
    ability: {
      name: "Glory of Rome",
      description: "Gain +25% Production towards any Buildings that already exist in the Capital."
    },
    unique: [
      {
        type: "Unit",
        name: "Ballista",
        replaces: "Catapult",
        description: `
        8 Melee Strength (vs. 7) and 10 Ranged Strength (vs. 8). May attack without prior setup. Receives the Indirect Fire promotion.
        `
      },
      {
        type: "Unit",
        name: "Legion",
        replaces: "Swordsmen",
        description: `
        16 Strength (from 17, vs. 14). May construct Roads and Forts.
        `
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Russia",
    leader: "Catherine",
    ability: {
      name: "Siberian Riches",
      description: "+1 Production from all Strategic Resources. Horse, Iron, and Uranium tiles provide twice the resources."
    },
    unique: [
      {
        type: "Building",
        name: "Krepost",
        replaces: "Barracks",
        description: "In addition to the typical perks, reduces the Culture and Gold costs of acquiring tiles in the City by -25%."
      },
      {
        type: "Unit",
        name: "Cossack",
        replaces: "Cavalry",
        description: `
        In addition to the typical traits, gains a +25% bonus in combat with wounded foes.
        `
      }
    ],
    bias: ["Tundra"],
    avoid: []
  },
  {
    name: "Scotland",
    leader: "Robert the Bruce",
    ability: {
      name: "Flower of Scotland",
      description: "+2 Production, Science and Culture from Writer's, Artist's and Musician's Guilds. +33% faster Great Person generation in the Capital."
    },
    unique: [
      {
        type: "Unit",
        name: "Gallowglass",
        replaces: "Riflemen",
        description: `
        Cheaper to construct (120 hammers vs. 150) and available at Metallurgy (instead of Rifling). 32 Strength (vs. 35). Arrives with Altitude Training (+10% bonus fighting in Hills; move twice as fast through these tiles) and Volley (+50% bonus vs. Fortified Units and Cities).
        Unlike Riflemen, requires 1 Iron resource to train.
        `
      },
      {
        type: "Building",
        name: "Ceilidh Hall",
        replaces: "Opera House",
        description: "In addition to the typical perks, provides an additional +1 Culture and +3 Happiness in the City."
      }
    ],
    bias: ["Hills"],
    avoid: []
  },
  {
    name: "Shoshone",
    leader: "Pocatello",
    ability: {
      name: "Great Expanse",
      description: "Founded Cities start with 4 additional tiles claimed. Units gain a +15% Combat Bonus in their own territory."
    },
    unique: [
      {
        type: "Unit",
        name: "Pathfinder",
        replaces: "Scout",
        description: `
        27 hammers to produce (from 30, vs. 16). 8 Strength (vs. 5). When entering Ancient Ruins, the Pathfinder may select the benefit from the available pool. (This Unit upgrades into a Composite Bowman (instead of an Archer) from Ruins.)
        `
      },
      {
        type: "Unit",
        name: "Comanche Riders",
        replaces: "Cavalry",
        description: `
        5 Movement (vs. 4) and costs less to produce (132 hammers vs. 150).
        `
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Siam",
    leader: "Ramkhamhaeng",
    ability: {
      name: "Father Governs Children",
      description: "Gain +50% more Food, Culture Faith and Happiness from friendly City-States. Units from Military City-States arrive with an additional +10 XP and arrive +50% faster."
    },
    unique: [
      {
        type: "Building",
        name: "Wat",
        replaces: "University",
        description: "In addition to the typical perks, provides +3 Culture."
      },
      {
        type: "Unit",
        name: "Naresuan's Elephant",
        replaces: "Knight",
        description: `
        25 Strength (vs. 20), but 3 Movement (vs. 4). Gains a +50% bonus against Mounted Units and does not require Horses to construct.
        `
      }
    ],
    bias: ["River"],
    avoid: []
  },
  {
    name: "Sioux",
    leader: "Sitting Bull",
    ability: {
      name: "Dwellers of the Plains",
      description: "Units receive a +15% Combat Bonus fighting in Plains."
    },
    unique: [
      {
        type: "Unit",
        name: "Buffalo Hunter",
        replaces: "Composite Bowman",
        description: `
        12 Ranged Strength (vs. 11), 8 Melee (vs. 7). Capable of constructing Tipis.
        `
      },
      {
        type: "Improvement",
        name: "Tipi",
        replaces: "Nothing",
        description: `
        Available at Trapping. May only be constructed on flat Plains or flatland Deer / Bison resources and must be adjacent to a Luxury resource. Provides +1 Food, +1 Faith. Bonus +1 Culture if adjacent to a city and +1 Gold if adjacent to a River. Gains +1 Food at Civil Service and +1 Faith at Theology.
        `
      }
    ],
    bias: ["Plains"],
    avoid: []
  },
  {
    name: "Songhai",
    leader: "Askia",
    ability: {
      name: "River Warlord",
      description: "Receive triple Gold from clearing Barbarian camps and capturing Cities. Land Units receive the Amphibious promotion and ignore terrain costs moving along or across Rivers."
    },
    unique: [
      {
        type: "Building",
        name: "Mud Pyramid Mosque",
        replaces: "Temple",
        description: "In addition to the typical perks, provides +2 Culture and requires no Gold maintenance."
      },
      {
        type: "Unit",
        name: "Mandekalu Cavalry",
        replaces: "Knight",
        description: "Receives no penalty in combat with Cities and is slightly cheaper to produce."
      }
    ],
    bias: ["River"],
    avoid: []
  },
  {
    name: "Spain",
    leader: "Isabella",
    ability: {
      name: "Seven Cities of Gold",
      description: "Gain 100 Gold and +1 additional Happiness for the empire upon the discovery of a Natural Wonder. Tile yields (including Happiness yields) from Natural Wonders are doubled."
    },
    unique: [
      {
        type: "Building",
        name: "Plaza de Toros",
        replaces: "Circus",
        description: "In addition to the typical perks, provides +2 Culture, and may also be built with an improved source of Cattle in addition to Horses and Ivory."
      },
      {
        type: "Unit",
        name: "Tercio",
        replaces: "Musketman",
        description: "26 Strength (vs. 24) and gains a +50% bonus against Mounted Units, but is slightly more expensive to construct."
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Sumeria",
    leader: "Gilgamesh",
    ability: {
      name: "Cradle of Civilization",
      description: "+2 Culture from every City upon the discovery of Drama and Poetry."
    },
    unique: [
      {
        type: "Building",
        name: "Ziggurat",
        replaces: "Temple",
        description: "In addition to the Faith yield, provides +10% Science. Only costs 1 Gold to maintain (vs. 2)."
      },
      {
        type: "Unit",
        name: "Phalanx",
        replaces: "Spearman",
        description: "+50% more effective at flanking (+15% per adjacent ally vs. +10%) and cheaper to construct (30 hammers vs. 37)."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Sweden",
    leader: "Gustavus Adolphus",
    ability: {
      name: "Nobel Prize",
      description: "+20% faster Great Person generation in all Cities. Receive 100 Influence and 200 Gold when gifting a Great Person to a City-State."
    },
    unique: [
      {
        type: "Unit",
        name: "Carolean",
        replaces: "Musketmen",
        description: `
        3 Movement (vs. 2). Identical strength; arrives with March (heal 10 HP each turn even if an action was performed).
        `
      },
      {
        type: "Building",
        name: "Falu Gruva",
        replaces: "Ironworks",
        description: `
        In addition to the typical perks, provides +1 Production to all Hill tiles in the City. Provides +6 Tourism at Flight.
        `
      }
    ],
    bias: ["Tundra"],
    avoid: []
  },
  {
    name: "Switzerland",
    leader: "Jonas Furrer",
    ability: {
      name: "Swiss Banks",
      description: "Merchant Specialists provide +2 Production and Science."
    },
    unique: [
      {
        type: "Building",
        name: "Ski Resort",
        replaces: "Stadium",
        description: `
        Available at Electricity (instead of Refrigeration). Provides +3 Happiness (vs. 2), +3 Culture, and +5 Tourism. Provides an additional +5 Tourism and +2 Gold for every Mountain within 3 tiles of the City; this bonus will only stack 5 times.
        Half as costly to construct (165 hammers vs. 330) and doesn’t require Gold maintenance. Doesn’t require a Zoo to construct.
        `
      },
      {
        type: "Building",
        name: "Reisläufer Post",
        replaces: "Armory",
        description: `
        Trained units receive the Mountaineer promotion (+10% Strength and +1 Movement at the start of turn when adjacent to Mountain tiles). Doesn’t require Gold maintenance. Spawns a Reisläufer upon completion.
        `
      },
      {
        type: "Unit",
        name: "Reisläufer",
        replaces: "Nothing",
        description: `
        A unique Unit only available by completing Reisläufer Posts. Comparable to Longswordsmen with 20 Strength and 3 Movement. Receives Gold from defeated foes equal to twice their Strength.
        `
      }
    ],
    bias: ["Hills"],
    avoid: []
  },
  {
    name: "Tibet",
    leader: "Ngawang Lobsang Gyatso",
    ability: {
      name: "Eightfold Path to Nirvana",
      description: "Receive +2 Food, Production, Gold, Culture, Faith and Science in the Capital upon the discovery of Drama and Poetry. +1 to those yields at Education, Acoustics, Industrialization, Radio, Radar and Globalization."
    },
    unique: [
      {
        type: "Unit",
        name: "Dalai Lama",
        replaces: "Great Prophets",
        description: `
        No vision penalty and may spread Religion 1 extra time. May also start 7-turn Golden Ages (consuming the unit).
        `
      },
      {
        type: "Improvement",
        name: "Monastery",
        replaces: "Nothing",
        description: `
        Available at Calendar. Can only be built on Hills. Provides +2 Faith and +1 Culture; +1 additional Faith at Theology. +1 Culture for each adjacent Mountain. May be built in Forests and Jungles without removing them.
        `
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Timurids",
    leader: "Timur",
    ability: {
      name: "Ulugh Beg's Observatory",
      description: "+5 City Strength and +15% Science, Gold and Culture in the original Capital. These bonuses are terminated if the original Capital is captured."
    },
    unique: [
      {
        type: "Unit",
        name: "Marathi Rider",
        replaces: "Horsemen",
        description: `
        Medieval Air Unit available at Chivalry. Requires 1 Horse; has 5 Range and 19 Combat Strength. Behaves as an Air Unit, and receives the appropriate promotions.
        `
      },
      {
        type: "Building",
        name: "Serai",
        replaces: "Caravansary",
        description: `
        Instead of providing +2 Gold at base, provides +1 Gold for every 3 Citizens in the City and otherwise retains the typical perks. Allows units to Airlift between Cities with Serais and increases Air Unit capacity in the City by 1. More costly to construct (67 hammers vs. 60).
        (This bonus scales linearly. In practice, each Citizen provides +0.33 Gold.)
        `
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Tonga",
    leader: "'Aho'eitu",
    ability: {
      name: "The Friendly Islands",
      description: "Resting Influence with City-States is increased by 5. All Islands, Coast tiles, and Coast-adjacent land tiles within a 10-tile radius of your starting Settler are revealed immediately."
    },
    unique: [
      {
        type: "Unit",
        name: "Matato'a",
        replaces: "Archer",
        description: `
        3 Movement (vs. 2) and +1 Sight; these bonuses are lost with upgrades. Cheaper to construct (20 hammers vs. 26). Obsolete at Machinery. Cannot upgrade from Ruins.
        `
      },
      {
        type: "Building",
        name: "Mala'e",
        replaces: "Granary",
        description: "Available at Sailing. Provides +1 Faith. Provides +2 Food and Culture if the city is adjacent to at least 3 Coastal tiles."
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Turkey",
    leader: "Ataturk",
    ability: {
      name: "Westernization",
      description: "Amphitheaters, Opera Houses, Museums and Broadcast Towers are built +50% faster and each provide +1 Science and Production. +1 Production and Science from Great Works."
    },
    unique: [
      {
        type: "Unit",
        name: "Kuva-yi Milliye",
        replaces: "Great War Infantry",
        description: `
        Weaker (47 Strength vs. 50), but boasts 3 Movement (vs. 2). Gains a +50% Combat Bonus when initiating combat, and may upgrade to Infantry for only 10 Gold.
        `
      },
      {
        type: "Building",
        name: "Halkevleri",
        replaces: "Public School",
        description: `
        In addition to typical perks, provides +3 Culture and is 20% cheaper to construct (160 hammers vs. 200).
        `
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "United Arab Emirates",
    leader: "Sheikh Zayed",
    ability: {
      name: "Yallah Habibi",
      description: "Upon completing a World Wonder, receive 100 Gold and start a We Love The King Day in the City where it is built. All Units gain +3 Gold per turn and +1 Experience each turn on tiles with a Trade Route."
    },
    unique: [
      {
        type: "Building",
        name: "Burj",
        replaces: "Hotel",
        description: `
        Available at Radio (instead of Refrigeration). Compared to the Hotel, the Burj provides +2 Gold and Culture to Great Person Improvements and Desert tiles in the City (with the exception of Floodplains).
        `
      },
      {
        type: "Unit",
        name: "Qasimi Raider",
        replaces: "Privateer",
        description: `
        Earns twice as much Gold from pillaging Trade Routes and attacking Cities. 8 Movement (vs. 6), and 20% cheaper to construct (80 hammers vs. 100).
        `
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Ukraine",
    leader: "Yaroslav I",
    ability: {
      name: "Chumatskyi Shliah",
      description: "+1 Food from Maize, Wheat and Salt resources after researching The Wheel. City Connections provide +2 Gold to connected Cities. The Capital also receives +2 Gold after the first Connection is made."
    },
    unique: [
      {
        type: "Unit",
        name: "Tachanka",
        replaces: "Gatling Gun",
        description: `
        2 Range and 4 Movement. Suffers the same Movement and Defensive Penalties as all Mounted Units.
        `
      },
      {
        type: "Building",
        name: "Knyaz Court",
        replaces: "Market",
        description: `
        In addition to the typical perks, provides an additional point of Gold at base (2 vs. 1). Each Knyaz Court in the empire generates 20 Gold whenever Ukraine consumes a Great Person.
        `
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Venice",
    leader: "Enrico Dandolo",
    ability: {
      name: "Serenissima",
      description: "Receive a free Trade Route and Cargo Ship in the Capital once Compass is researched. Cargo Ships may not be plundered. Capable of producing Settlers."
    },
    unique: [
      {
        type: "Unit",
        name: "Great Galleass",
        replaces: "Galleass",
        description: "18 Combat Strength (vs. 16) and 20 Ranged Strength (vs. 17), but costs 10% more to produce (73 hammers vs. 67)."
      },
      {
        type: "Building",
        name: "Grand Canal of Venice",
        replaces: "East India Company",
        description: `
        Compared to the East India Company, provides an additional free Trade Route for a total of an additional two; boosts Gold generation in the City by an additional +15%, and does not require Markets in every City to produce. Available at Currency instead of Guilds.
        `
      }
    ],
    bias: ["Coast"],
    avoid: []
  },
  {
    name: "Vietnam",
    leader: "Hai Ba Trung",
    ability: {
      name: "Tam Giaiào",
      description: "+2 Food, +1 Production from Marsh. +1 Faith from Jungle. Units receive double Movement through Marsh and Jungle tiles and receive a Combat Bonus in Marshes (+30%) and Jungles (+15%)."
    },
    unique: [
      {
        type: "Unit",
        name: "Viet Cong",
        replaces: "Infantry",
        description: `
        Moves further (3 Movement vs. 2). When initiating combat, performs a bonus Ranged Attack prior to Melee combat. Gains a +25% Combat Bonus against Gunpowder units.
        This Unit may traverse mountains, taking 50 HP damage if it ends its turn on one.
        Cheaper to construct (233 hammers vs. 280).
        `
      },
      {
        type: "Building",
        name: "Vo Khi",
        replaces: "Armory",
        description: `
        In addition to the typical perks, provides +1 Food, +1 Culture and
        +1 Production from Marsh tiles and +1 Culture from Jungle tiles. All Melee Units trained in this City receive the Woodsman promotion (units move twice as fast through Forest and Jungle tiles). Doesn’t require Barracks to construct.
        `
      }
    ],
    bias: ["Wetlands"],
    avoid: []
  },
  {
    name: "Wales",
    leader: "Owain Glyndwr",
    ability: {
      name: "Hafod a Hendref",
      description: "+1 Food and +1 Gold from Sheep at Animal Husbandry. Units receive a +10% Combat Bonus fighting in Hills."
    },
    unique: [
      {
        type: "Unit",
        name: "Saethwyr",
        replaces: "Crossbowmen",
        description: "15 Combat Strength (vs. 13)."
      },
      {
        type: "Improvement",
        name: "Caer",
        replaces: "Nothing",
        description: `
        Available at Chivalry. +3 Gold, +1 Culture, and +1 Production. Units gain a +25% Combat Bonus defending this tile. +1 Culture at Acoustics. Receives bonus yields from certain policies:
        +1 Culture from Cultural Exchange,
        +1 Science from Free Thought,
        +1 Food from completing the Commerce tree.
        May only be built on Hills without resources.
        `
      }
    ],
    bias: ["Hills"],
    avoid: []
  },
  {
    name: "Yugoslavia",
    leader: "Aleksandar I",
    ability: {
      name: "Non-Aligned Doctrine",
      description: "Pick a free Ideology Tenet when adopting or switching Ideologies and receive bonuses corresponding to both rival Ideologies. If not Freedom, Specialists provide +1 Gold. If not Autocracy, receive +15% Production towards land Units. If not Order, receive +2 Production and Science in all Cities."
    },
    unique: [
      {
        type: "Unit",
        name: "M-84",
        replaces: "Tank",
        description: "Ignores Zone of Control movement penalties."
      },
      {
        type: "Building",
        name: "Spomenik",
        replaces: "Museum",
        description: "In addition to the typical perks, provides +20% Science in the City."
      }
    ],
    bias: [],
    avoid: []
  },
  {
    name: "Zimbabwe",
    leader: "Nyatsimba Mutota",
    ability: {
      name: "Great Zimbabwe",
      description: "+25% Production towards buildings and military Units in the Capital. (Guilds and National and World Wonders do not count as buildings)."
    },
    unique: [
      {
        type: "Unit",
        name: "Shona Warrior",
        replaces: "Warrior",
        description: "9 Strength (vs. 8) and is capable of building Quarries and Farms."
      },
      {
        type: "Building",
        name: "Stone Mason",
        replaces: "Stoneworks",
        description: `
        +2 Culture at Masonry, and otherwise retains the typical perks. Doesn’t require any nearby resources to construct.
        `
      }
    ],
    bias: ["Hills"],
    avoid: []
  },
  {
    name: "Zulu",
    leader: "Shaka",
    ability: {
      name: "Iklwa",
      description: "Melee Units pay 50% less Gold maintenance. All Units require 25% less experience to promote."
    },
    unique: [
      {
        type: "Building",
        name: "Ikanda",
        replaces: "Barracks",
        description: `
        Grants the Buffalo Horns promotion to all pre-Gunpowder Melee Units trained in the City and allows these Units to earn the Buffalo Chest and Loins promotions.
        Horns: +1 Movement, +25% Flanking Bonus, and +10% defensive Strength against Ranged attacks
        Chest: +10% Bonus in Open Terrain, an additional +25% Flanking Bonus, and an additional +10% defensive Strength against Ranged attacks (requires Horns)
        Loins: +10% Combat Strength, an additional +25% Flanking Bonus, and an additional +10% defensive Strength against Ranged attacks (requires Chest)
        `
      },
      {
        type: "Unit",
        name: "Impi",
        replaces: "Pikemen",
        description: "When initiating combat, performs a bonus Ranged Attack prior to Melee combat. Gains +25% Combat Strength against Gunpowder units."
      }
    ],
    bias: [],
    avoid: ["Jungle"]
  }
]
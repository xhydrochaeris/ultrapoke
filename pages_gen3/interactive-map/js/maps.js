//Determine Pokemon natures: https://stealmylyrics.com/kaizo/natures.html
//Other sources: Bulbapedia, AdvanceMap, AdvanceTrainer
const MAPS = {
  PalletTown: {
    mapType: "city",
    image: "Pallet_Town_FRLG.png",
    width: 24,
    height: 20,
    sidebarHTML: "<h2>Pallet Town</h2><br> \
                  <h3>Optional items:</h3><ul> \
                  <li>Town Map (from Daisy in Rival's House after getting the Pokédex)</li></ul><br> \
                  <h3>Pokémon (Surfing):</h3><ul> \
                  <details><summary style=\"color:yellow;\">Show/Hide List</summary>\
                  <li>Tentacool (Lv. 5-40) (100%)<br><i>EV yield: 1 SpD</i></li></ul></details><br> \
                  <h3>Pokémon (Fishing - Old Rod):</h3><ul> \
                  <details><summary style=\"color:yellow;\">Show/Hide List</summary>\
                  <li>Magikarp (Lv. 5-10) (100%)<br><i>EV yield: 1 Spe</i></li></ul></details><br> \
                  <h3>Pokémon (Fishing - Good Rod):</h3><ul> \
                  <details><summary class=\"fr\">FireRed</summary><li>Krabby (Lv. 5-15) (20%)<br><i>EV yield: 1 Atk</i></li> \
                  <li>Horsea (Lv. 5-15) (60%)<br><i>EV yield: 1 SpA</i></li>\
                  <li>Magikarp (Lv. 5-15) (20%)<br><i>EV yield: 1 Spe</i></li></details>\
                  <details><summary class=\"lg\">LeafGreen</summary><li>Krabby (Lv. 5-15) (60%)<br><i>EV yield: 1 Atk</i></li> \
                  <li>Horsea (Lv. 5-15) (20%)<br><i>EV yield: 1 SpA</i></li>\
                  <li>Magikarp (Lv. 5-15) (20%)<br><i>EV yield: 1 Spe</i></li></details></ul><br>\
                  <h3>Pokémon (Fishing - Super Rod):</h3><ul> \
                  <details><summary class=\"fr\">FireRed</summary><li>Psyduck (Lv. 25-35) (1%)<br><i>EV yield: 1 SpA</i></li> \
                  <li>Shellder (Lv. 15-25) (40%)<br><i>EV yield: 1 Def</i></li>\
                  <li>Horsea (Lv. 15-25) (40%)<br><i>EV yield: 1 SpA</i></li>\
                  <li>Seadra (Lv. 25-35) (4%)<br><i>EV yield: 1 Def, 1 SpA</i></li>\
                  <li>Gyarados (Lv. 15-25) (15%)<br><i>EV yield: 2 Atk</i></li></details>\
                  <details><summary class=\"lg\">LeafGreen</summary><li>Slowpoke (Lv. 25-35) (1%)<br><i>EV yield: 1 HP</i></li> \
                  <li>Staryu (Lv. 15-25) (40%)<br><i>EV yield: 1 Spe</i></li>\
                  <li>Krabby (Lv. 15-25) (40%)<br><i>EV yield: 1 Atk</i></li>\
                  <li>Kingler (Lv. 25-35) (4%)<br><i>EV yield: 2 Atk</i></li>\
                  <li>Gyarados (Lv. 15-25) (15%)<br><i>EV yield: 2 Atk</i></li></details></ul>",
    objects: [
      {
        type: "door",
        tileX: 15,
        tileY: 7,
        name: "Door",
        destination: "RivalHouse"
      },
      {
        type: "door",
        tileX: 16,
        tileY: 13,
        name: "Door",
        destination: "ProfOaksLab"
      }],
    regions: [
      {
        x: 5,        // tile coordinate
        y: 3.5,        // tile coordinate
        w: 5,         // width in tiles
        h: 4.5,         // height in tiles
        name: "Player's House"
      },
      {
        x: 14,        // tile coordinate
        y: 3.5,        // tile coordinate
        w: 5,         // width in tiles
        h: 4.5,         // height in tiles
        name: "Rival's House"
      },
      {
        x: 13,        // tile coordinate
        y: 9.5,        // tile coordinate
        w: 7,         // width in tiles
        h: 4.5,         // height in tiles
        name: "Prof. Oak's Lab"
      }
    ],
    warps: {
      north: "Route1",
      south: "Route21"
    }
  },
  Route1: {
    mapType: "route",
    image: "Kanto_Route_1_FRLG.png",
    width: 24,
    height: 40,
    sidebarHTML: "<h2>Route 1</h2><br> \
                  <h3>Hidden items:</h3><ul> \
                  <li>Potion x1 (from Poké Mart NPC)</li></ul><br> \
                  <h3>Pokémon (Grass):</h3><ul><details><summary style=\"color:yellow;\">Show/Hide List</summary> \
                  <li>Pidgey (Lv. 2-5) (50%)<br><i>EV yield: 1 Spe</i></li> \
                  <li>Rattata (Lv. 2-4) (50%)<br><i>EV yield: 1 Spe</i></li></ul></details>",
    objects: [
      {
        type: "item",
        tileX: 6,
        tileY: 28,
        name: "Poké Mart Clerk (gives Potion x1)",
        sprite: "pokemartclerk.png"
      }
    ],
    regions: [],
    warps: {
      north: "ViridianCity",
      south: "PalletTown"
    }
  },
  ViridianCity: {
    mapType: "city",
    image: "Viridian_City_FRLG.png",
    width: 48,
    height: 40,
    sidebarHTML: "<h2>Viridian City</h2><br> \
                  <h3>Optional Items:</h3><ul> \
                  <li>Potion x1</li></ul><br> \
                  <h3>Pokémon (Surfing):</h3><ul> \
                  <details><summary class=\"fr\">FireRed</summary><li>Psyduck (Lv. 20-40) (100%)<br><i>EV yield: 1 SpA</i></li> \
                  </details><details><summary class=\"lg\">LeafGreen</summary><li>Slowpoke (Lv. 20-40) (100%)<br><i>EV yield: 1 HP</i></li></details></ul><br> \
                  <h3>Pokémon (Fishing - Old Rod):</h3><ul> \
                  <details><summary style=\"color:yellow;\">Show/Hide List</summary>\
                  <li>Magikarp (Lv. 5) (100%)<br><i>EV yield: 1 Spe</i></li></ul></details><br> \
                  <h3>Pokémon (Fishing - Good Rod):</h3><ul> \
                  <details><summary style=\"color:yellow;\">Show/Hide List</summary>\
                  <li>Poliwag (Lv. 5-15) (60%)<br><i>EV yield: 1 Spe</i></li> \
                  <li>Goldeen (Lv. 5-15) (20%)<br><i>EV yield: 1 Atk</i></li>\
                  <li>Magikarp (Lv. 5-15) (20%)<br><i>EV yield: 1 Spe</i></li></ul></details><br>\
                  <h3>Pokémon (Fishing - Super Rod):</h3><ul> \
                  <details><summary class=\"fr\">FireRed</summary><li>Psyduck (Lv. 15-35) (5%)<br><i>EV yield: 1 SpA</i></li> \
                  <li>Poliwag (Lv. 15-25) (40%)<br><i>EV yield: 1 Spe</i></li>\
                  <li>Poliwhirl (Lv. 20-30) (40%)<br><i>EV yield: 2 Spe</i></li>\
                  <li>Gyarados (Lv. 15-25) (15%)<br><i>EV yield: 2 Atk</i></li></details>\
                  <details><summary class=\"lg\">LeafGreen</summary><li>Slowpoke (Lv. 15-35) (5%)<br><i>EV yield: 1 HP</i></li> \
                  <li>Poliwag (Lv. 15-25) (40%)<br><i>EV yield: 1 Spe</i></li>\
                  <li>Poliwhirl (Lv. 20-30) (40%)<br><i>EV yield: 2 Spe</i></li>\
                  <li>Gyarados (Lv. 15-25) (15%)<br><i>EV yield: 2 Atk</i></li></details></ul><br> \
                  <h3>Poké Mart:</h3><ul> \
                  <li>Poké Ball (200)</li>\
                  <li>Potion (300)</li>\
                  <li>Antidote (100)</li>\
                  <li>Parlyz Heal (200)</li></ul><br> \
                  <h3>Move Tutors:</h3><ul> \
                  <li>Dream Eater <i>(Requires Cut/Surf)</i><br><i>Can only be taught once!</i></li></ul>",
    objects: [
      {
        type: "item",
        tileX: 17,
        tileY: 5,
        name: "Potion x1",
        sprite: "Gen_III_Item_Ball.png"
      },
      {
        type: "item",
        tileX: 8,
        tileY: 26,
        name: "Move Tutor: Dream Eater",
        sprite: "Move_Reminder_FRLG_OD.png"
      },
      {
        type: "hm",
        tileX: 18,
        tileY: 5,
        name: "Cuttable Tree",
        sprite: "FRLG_Cut.png"
      },
      {
        type: "hm",
        tileX: 21,
        tileY: 8,
        name: "Old Man",
        sprite: "Old_man_passed_out_III_OD.png"
      },
      {
        type: "hm",
        tileX: 11,
        tileY: 24,
        name: "Cuttable Tree",
        sprite: "FRLG_Cut.png"
      },
      {
        type: "door",
        tileX: 36,
        tileY: 10,
        name: "Door",
        destination: "ViridianGym"
      }
    ],
    regions: [
      {
        x: 33,        // tile coordinate
        y: 6,        // tile coordinate
        w: 6,         // width in tiles
        h: 5,         // height in tiles
        name: "Viridian Gym"
      },
      {
        x: 34,        // tile coordinate
        y: 16,        // tile coordinate
        w: 4,         // width in tiles
        h: 4,         // height in tiles
        name: "Poké Mart"
      },
      {
        x: 24,        // tile coordinate
        y: 22.5,        // tile coordinate
        w: 5,         // width in tiles
        h: 4.5,         // height in tiles
        name: "Pokémon Center"
      }
    ],
    warps: {
      north: "Route2",
      west: "Route22",
      south: "Route1"
    }
  },
  Route2: {
    mapType: "route",
    image: "Kanto_Route_2_FRLG.png",
    width: 24,
    height: 80,
    sidebarHTML: "<h2>Route 2</h2><br> \
                  <h3>Optional items:</h3><ul> \
                  <li>Ether x1 <i>(Requires Cut)</i></li> \
                  <li>Parlyz Heal x1 <i>(Requires Cut)</i></li> \
                  <li>HM05 <i>(Requires Cut)</i><br>From Oak's Aide in Route 2 Gate after catching 10 Pokémon</li></ul><br>\
                  <h3>Pokémon (Grass):</h3><ul><details><summary style=\"color:yellow;\">Show/Hide List</summary> \
                  <li>Pidgey (Lv. 2-5) (45%)<br><i>EV yield: 1 Spe</i></li> \
                  <li>Rattata (Lv. 2-5) (45%)<br><i>EV yield: 1 Spe</i></li> \
                  <li>Caterpie (Lv. 4-5) (5%)<br><i>EV yield: 1 HP</i></li> \
                  <li>Weedle (Lv. 4-5) (5%)<br><i>EV yield: 1 Spe</i></li></ul></details><br> \
                  <h3>Pokémon (In-Game Trade):</h3><ul> \
                  <li>Mr. Mime (Trade with Abra)<br>Trade with NPC inside house<br><i>(Requires Cut)</i></li></ul>",
    objects: [
      {
        type: "hm",
        tileX: 11,
        tileY: 13,
        name: "Cuttable Tree",
        sprite: "FRLG_Cut.png"
      },
      {
        type: "hm",
        tileX: 18,
        tileY: 26,
        name: "Cuttable Tree",
        sprite: "FRLG_Cut.png"
      },
      {
        type: "hm",
        tileX: 16,
        tileY: 62,
        name: "Cuttable Tree",
        sprite: "FRLG_Cut.png"
      },
      {
        type: "hm",
        tileX: 15,
        tileY: 69,
        name: "Cuttable Tree",
        sprite: "FRLG_Cut.png"
      },
      {
        type: "item",
        tileX: 17,
        tileY: 54,
        name: "Ether x1",
        sprite: "Gen_III_Item_Ball.png"
      },
      {
        type: "item",
        tileX: 17,
        tileY: 64,
        name: "Parlyz Heal x1",
        sprite: "Gen_III_Item_Ball.png"
      },
      {
        type: "door",
        tileX: 18.5,
        tileY: 46,
        name: "Gate",
        destination: "Gate_Route2"
      },
      {
        type: "door",
        tileX: 17,
        tileY: 22,
        name: "Door",
        destination: "House_Route2"
      },
      {
        type: "door",
        tileX: 17,
        tileY: 11,
        name: "Entrance",
        destination: "DiglettsCave_Route2"
      },{
        type: "door",
        tileX: 5.5,
        tileY: 51,
        name: "Gate",
        destination: "Gate_Route2_VF"
      },
      {
        type: "door",
        tileX: 5.5,
        tileY: 13,
        name: "Gate",
        destination: "Gate_VF_Route2"
      }
    ],
    regions: [
      {
        x: 16,        // tile coordinate
        y: 41.5,        // tile coordinate
        w: 6,         // width in tiles
        h: 6,         // height in tiles
        name: "Gate (Route 2)"
      },
      {
        x: 14,        // tile coordinate
        y: 20,        // tile coordinate
        w: 5,         // width in tiles
        h: 3,         // height in tiles
        name: "House"
      },
      {
        x: 13,        // tile coordinate
        y: 6,        // tile coordinate
        w: 8,         // width in tiles
        h: 6,         // height in tiles
        name: "Diglett's Cave"
      },
      {
        x: 2,        // tile coordinate
        y: 13.5,        // tile coordinate
        w: 8,         // width in tiles
        h: 6.5,         // height in tiles
        name: "Gate (Viridian Forest)"
      },{
        x: 2,        // tile coordinate
        y: 45,        // tile coordinate
        w: 8,         // width in tiles
        h: 7.5,         // height in tiles
        name: "Gate (Viridian Forest)"
      }
    ],
    warps: {
      north: "PewterCity",
      south: "ViridianCity"
    }
  },
  ViridianForest: {
    mapType: "dungeon",
    image: "vf.png",
    width: 54,
    height: 69,
    sidebarHTML: "<h2>Viridian Forest</h2><br> \
                  <h3>Optional items:</h3><ul> \
                  <li>Potion x1</li> \
                  <li>Poké Ball x1</li> \
                  <li>Antidote x1</li><li>Potion x1</li></ul><br>\
                  <h3>Hidden items:</h3><ul> \
                  <li>Antidote x1</li> \
                  <li>Potion x1</li></ul><br>\
                  <h3>Pokémon (Grass):</h3><ul> \
                  <details><summary class=\"fr\">FireRed</summary><li>Caterpie (Lv. 3-5) (40%)<br><i>EV yield: 1 HP</i></li> \
                  <li>Metapod (Lv. 5) (5%)<br><i>EV yield: 2 Def</i></li>\
                  <li>Weedle (Lv. 3-5) (40%)<br><i>EV yield: 1 Spe</i></li>\
                  <li>Kakuna (Lv. 4-6) (10%)<br><i>EV yield: 2 Def</i></li>\
                  <li>Pikachu (Lv. 3,5) (5%)<br><i>EV yield: 2 Spe</i></li></details>\
                  <details><summary class=\"lg\">LeafGreen</summary><li>Caterpie (Lv. 3-5) (40%)<br><i>EV yield: 1 HP</i></li> \
                  <li>Metapod (Lv. 4-6) (10%)<br><i>EV yield: 2 Def</i></li>\
                  <li>Weedle (Lv. 3-5) (40%)<br><i>EV yield: 1 Spe</i></li>\
                  <li>Kakuna (Lv. 5) (5%)<br><i>EV yield: 2 Def</i></li>\
                  <li>Pikachu (Lv. 3,5) (5%)<br><i>EV yield: 2 Spe</i></li></details></ul><br> \
                  <h3>Trainers:</h3><ul> \
                  <details><summary style=\"color:yellow;\">Bug Catcher Rick (Reward 72)</summary>\
                  <li>Weedle ♂ (Lv. 6, Mild)<br><i>EV Yield: 1 Spe</i></li>\
                  <li>Caterpie ♂ (Lv. 6, Mild)<br><i>EV Yield: 1 HP</i></li></details>\
                  <details><summary style=\"color:yellow;\">Bug Catcher Doug (Reward 84)</summary>\
                  <li>Weedle ♂ (Lv. 7, Brave)<br><i>EV Yield: 1 Spe</i></li>\
                  <li>Kakuna ♂ (Lv. 7, Careful)<br><i>EV Yield: 2 Def</i></li>\
                  <li>Weedle ♂ (Lv. 7, Naive)<br><i>EV Yield: 1 Spe</i></li></details>\
                  <details><summary style=\"color:yellow;\">Bug Catcher Anthony (Reward 96)</summary>\
                  <li>Caterpie ♂ (Lv. 7, Calm)<br><i>EV Yield: 1 HP</i></li>\
                  <li>Caterpie ♂ (Lv. 8, Naughty)<br><i>EV Yield: 1 HP</i></li></details>\
                  <details><summary style=\"color:yellow;\">Bug Catcher Charlie (Reward 84)</summary>\
                  <li>Metapod ♂ (Lv. 7, Modest)<br><i>EV Yield: 2 Def</i></li>\
                  <li>Caterpie ♂ (Lv. 7, Adamant)<br><i>EV Yield: 1 HP</i></li>\
                  <li>Metapod ♂ (Lv. 7, Relaxed)<br><i>EV Yield: 2 Def</i></li></details>\
                  <details><summary style=\"color:yellow;\">Bug Catcher Sammy (Reward 108)</summary>\
                  <li>Weedle ♂ (Lv. 9, Serious)<br><i>EV Yield: 1 Spe</i></li></details></ul>",
    objects: [
      {
        type: "item",
        tileX: 49,
        tileY: 60,
        name: "Potion x1",
        sprite: "Gen_III_Item_Ball.png"
      },
      {
        type: "item",
        tileX: 40,
        tileY: 21,
        name: "Antidote x1",
        sprite: "Gen_III_Item_Ball.png"
      },
      {
        type: "item",
        tileX: 21,
        tileY: 34,
        name: "Potion x1",
        sprite: "Gen_III_Item_Ball.png"
      },
      {
        type: "item",
        tileX: 5,
        tileY: 41,
        name: "Poké Ball x1",
        sprite: "Gen_III_Item_Ball.png"
      },
      {
        type: "item",
        tileX: 3,
        tileY: 22,
        name: "Potion x1 (hidden)"
      },
      {
        type: "item",
        tileX: 28,
        tileY: 57,
        name: "Antidote x1 (hidden)"
      },
      {
        type: "door",
        tileX: 29,
        tileY: 62,
        name: "Gate",
        destination: "Gate_Route2_VF"
      },
      {
        type: "door",
        tileX: 5,
        tileY: 9,
        name: "Gate",
        destination: "Gate_VF_Route2"
      },
      {
        type: "trainer",
        tileX: 47,
        tileY: 45,
        name: "Bug Catcher Rick",
        sprite: "bugcatcher_l.png"
      },
      {
        type: "trainer",
        tileX: 47,
        tileY: 29,
        name: "Bug Catcher Doug",
        sprite: "bugcatcher_l.png"
      },
      {
        type: "trainer",
        tileX: 43,
        tileY: 6,
        name: "Bug Catcher Anthony",
        sprite: "bugcatcher_f.png"
      },
      {
        type: "trainer",
        tileX: 16,
        tileY: 5,
        name: "Bug Catcher Charlie",
        sprite: "bugcatcher_b.png"
      },
      {
        type: "trainer",
        tileX: 7,
        tileY: 22,
        name: "Bug Catcher Sammy",
        sprite: "bugcatcher_l.png"
      }
    ],
    regions: [
      {
        x: 0,        // tile coordinate
        y: 0,        // tile coordinate
        w: 11,         // width in tiles
        h: 10.5,         // height in tiles
        name: "Gate"
      },{
        x: 24,        // tile coordinate
        y: 62.5,        // tile coordinate
        w: 11,         // width in tiles
        h: 6.5,         // height in tiles
        name: "Gate"
      }
    ],
    warps: {
      north: "Gate_VF_Route2",
      south: "Gate_Route2_VF"
    }
  },
  PewterCity: {
    mapType: "city"},
  //Minor subarea maps
  RivalHouse: {
    image: "rivalhouse.png",
    width: 13,
    height: 10,
    sidebarHTML: "<h2>Rival's House</h2><br> \
                  <h3>Optional items:</h3><ul> \
                  <li>Town Map (from Daisy after getting the Pokédex)</li></ul>",
    objects: [
      {
        type: "item",
        tileX: 5,
        tileY: 4,
        name: "Daisy Oak (gives Town Map)",
        sprite: "Daisy_Oak_III_OD.png"
      }],
    regions: [],
    warps: {
      south: "PalletTown"
    }
  },
  ProfOaksLab: {
    image: "Professor_Oak_Lab_inside_FRLG.png",
    width: 13,
    height: 14,
    sidebarHTML: "<h2>Prof. Oak's Lab</h2><br> \
                  <h3>Missable items:</h3><ul> \
                  <li>Poké Ball x5 (from Prof. Oak after winning the Route 22 or Cerulean City rival battle - Permanently missed after collecting the Earth Badge)</li></ul><br>\
                  <h3>Optional items:</h3><ul> \
                  <li>National Pokédex (from Prof. Oak after beating the game & catching 60 Pokémon)</li></ul>\
                  <br><h3>Pokémon (Gift - Can only choose one):</h3><ul> \
                  <li>Bulbasaur (Lv. 5)</li><li>Squirtle (Lv. 5)</li><li>Charmander (Lv. 5)</li></ul><br>\
                  <h3>Trainers:</h3><ul> \
                  <p style=\"color:yellow;\">Rival (Reward 80)</p>\
                  <details><summary style=\"color:lime;\">If you picked Bulbasaur</summary>\
                  <li>Charmander ♂ (Lv. 5, Brave)<br><i>EV Yield: 1 Spe</i></li></details>\
                  <details><summary style=\"color:orangered;\">If you picked Charmander</summary>\
                  <li>Squirtle ♂ (Lv. 5, Hasty)<br><i>EV Yield: 1 Def</i></li></details>\
                  <details><summary style=\"color:aqua;\">If you picked Squirtle</summary>\
                  <li>Bulbasaur ♂ (Lv. 5, Impish)<br><i>EV Yield: 1 SpA</i></li></details></ul>",
    objects: [
      {
        type: "item",
        tileX: 6,
        tileY: 3,
        name: "Professor Oak",
        sprite: "Oak_III_OD.png"
      },
      {
        type: "trainer",
        tileX: 5,
        tileY: 4,
        name: "Rival",
        sprite: "Blue_III_OD.png"
      },
      {
        type: "item",
        tileX: 8,
        tileY: 4,
        name: "Bulbasaur",
        sprite: "Gen_III_Item_Ball.png"
      },
      {
        type: "item",
        tileX: 9,
        tileY: 4,
        name: "Squirtle",
        sprite: "Gen_III_Item_Ball.png"
      },
      {
        type: "item",
        tileX: 10,
        tileY: 4,
        name: "Charmander",
        sprite: "Gen_III_Item_Ball.png"
      }],
    regions: [],
    warps: {
      south: "PalletTown"
    }
  },
  Gate_Route2_VF: {
    image: "gate_r2.png",
    width: 15,
    height: 12,
    sidebarHTML: "<h2>Gate between Route 2 and Viridian Forest</h2>",
    objects: [{
        type: "door",
        tileX: 7,
        tileY: 1,
        name: "Gate",
        destination: "ViridianForest"
      }],
    regions: [],
    warps: {
      north: "ViridianForest",
      south: "Route2"
    }
  },
  Gate_VF_Route2: {
    image: "gate_r2.png",
    width: 15,
    height: 12,
    sidebarHTML: "<h2>Gate between Viridian Forest and Route 2</h2>",
    objects: [{
        type: "door",
        tileX: 7,
        tileY: 1,
        name: "Gate",
        destination: "Route2"
      }],
    regions: [],
    warps: {
      north: "Route2",
      south: "ViridianForest"
    }
  },
  House_Route2: {
    image: "house_r2.png",
    width: 11,
    height: 9,
    sidebarHTML: "<h2>House on Route 2</h2><br><h3>Pokémon (In-Game Trade):</h3><ul> \
                  <li>Mr. Mime (Trade with Abra)<br>Trade with NPC inside house</li></ul>",
    objects: [{
        type: "item",
        tileX: 7,
        tileY: 2,
        name: "Trade (Abra ↔ Mr. Mime)",
        sprite: "Reyley_FRLG_OD.png"
      }],
    regions: [],
    warps: {
      south: "Route2"
    }},
  Gate_Route2: {
    image: "gate_r2.png",
    width: 15,
    height: 12,
    sidebarHTML: "<h2>Gate on Route 2</h2><br><h3>Optional items:</h3><ul>\
                  <li>HM05 <i>(Requires Cut)</i><br>From Oak's Aide in Route 2 Gate after catching 10 Pokémon</li></ul>",
    objects: [{
        type: "item",
        tileX: 4,
        tileY: 6,
        name: "Oak's Aide (gives HM05)",
        sprite: "Scientist_FRLG_OD.png"
      },
      {
        type: "door",
        tileX: 7,
        tileY: 1,
        name: "Gate",
        destination: "Route2"
      }],
    regions: [],
    warps: {
      north: "Route2",
      south: "Route2"
    }
  }//,
  //TODO: DiglettsCave_Route2: {}
};

const cityList = document.getElementById("cityList");
const routeList = document.getElementById("routeList");
const dungeonList = document.getElementById("dungeonList");
const minorMapList = document.getElementById("minorMapList");

Object.keys(MAPS).forEach(mapName => {
  const li = document.createElement("li");
  li.textContent = mapName;
  li.style.cursor = "pointer";

  li.addEventListener("click", () => {
    loadMap(mapName);
  });

  if (MAPS[mapName].mapType == "city") {
    cityList.appendChild(li);
  }
  else if (MAPS[mapName].mapType == "route") {
    routeList.appendChild(li);
  }
  else if (MAPS[mapName].mapType == "dungeon") {
    dungeonList.appendChild(li);
  }
  else{
    minorMapList.appendChild(li);
  }
});
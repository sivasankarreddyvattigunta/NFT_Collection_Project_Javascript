// Create a variable to hold the number of NFTs
const nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(_name, _description, _image, _color, _speciality, _attributes, _abilities, _evolutionStage, _evolvesFrom) {
  // Create an NFT object with metadata
  const nft = {
    "name": _name,
    "description": _description,
    "image": _image,
    "color": _color,
    "speciality": _speciality,
    "attribute": _attributes,
    "abilities": _abilities,
    "evolutionStage": _evolutionStage,
    "evolvesFrom": _evolvesFrom
  };
  nfts.push(nft);
  console.log("Minted: " + _name);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    console.log("\nID: " + (i + 1));
    console.log("Name: " + nfts[i].name);
    console.log("Description: " + nfts[i].description);
    console.log("Image: " + nfts[i].image);
    console.log("Color: " + nfts[i].color);
    console.log("Speciality: " + nfts[i].speciality);
    console.log("Attributes:");
    console.log("  - Creator: " + nfts[i].attribute.creator);
    console.log("  - Collection: " + nfts[i].attribute.collection);
    console.log("  - Year Created: " + nfts[i].attribute.yearCreated);
    console.log("Abilities:");
    console.log("  - Main: " + nfts[i].abilities.main);
    console.log("  - Hidden: " + nfts[i].abilities.hidden);
    console.log("Evolution Stage: " + nfts[i].evolutionStage);
    console.log("Evolves From: " + nfts[i].evolvesFrom);
    console.log("-----------------------");
  }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total NFTs: " + nfts.length);
}

// Call your functions below this line

// Mint some NFTs and store them in the variable and array
mintNFT(
  "Pikachu",
  "The iconic electric-type Pokémon with yellow fur and a lightning bolt-shaped tail.",
  "pikachu.png",
  "Yellow",
  "Speed",
  {
    creator: "Siva",
    collection: "Pokemon Masters",
    yearCreated: 2023
  },
  {
    main: "Thunderbolt",
    hidden: "Volt Tackle"
  },
  "Stage 2",
  "Pichu"
);
mintNFT(
  "Charmander",
  "A fire-type Pokémon with a flame on its tail.",
  "charmander.png",
  "Red",
  "Fire Breath",
  {
    creator: "Siva",
    collection: "Pokemon Masters",
    yearCreated: 2023
  },
  {
    main: "Ember",
    hidden: "Fire Spin"
  },
  "Stage 1",
  "None"
);
mintNFT(
  "Bulbasaur",
  "A grass/poison-type Pokémon with a plant bulb on its back.",
  "bulbasaur.png",
  "Green",
  "Plant Power",
  {
    creator: "Siva",
    collection: "Pokemon Masters",
    yearCreated: 2023
  },
  {
    main: "Vine Whip",
    hidden: "Solar Beam"
  },
  "Stage 1",
  "None"
);

// List the NFTs
listNFTs();

// Get the total supply
getTotalSupply();

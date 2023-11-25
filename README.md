# Pokemon NFT Collection Javascript

This project is a simple JavaScript implementation for managing and displaying information about Non-Fungible Tokens (NFTs). It allows you to mint new NFTs, list existing NFTs, and get the total supply.

## Getting Started

Follow these steps to set up and run the project on your local machine:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/sivasankarreddyvattigunta/NFT_Collection_Project_Javascript
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Run the Script:**
    ```bash
    node script.js
    ```

## Usage

### Mint NFTs

You can mint new NFTs by calling the `mintNFT` function. Example:

```javascript
mintNFT(
  "Pikachu",
  // ... (other parameters)
);
```

### List NFTs

To see the details of all minted NFTs, use the `listNFTs` function:

```javascript
listNFTs();
```

### Get Total Supply

To get the total number of minted NFTs, use the `getTotalSupply` function:

```javascript
getTotalSupply();
```

## NFT Object Structure

Each NFT is represented by an object with the following properties:

- `name`: Name of the NFT.
- `description`: Description of the NFT.
- `image`: URL or path to the NFT image.
- ... (other properties)

## Author

[VATTIGUNTA SIVA SANKAR REDDY](https://github.com/sivasankarreddyvattigunta)

## License

This project is licensed under the MIT License 




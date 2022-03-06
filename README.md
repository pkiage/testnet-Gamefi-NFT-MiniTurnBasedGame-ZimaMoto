# Zima Moto
## Installation and Setup to Contribute/Remix:
1. Run `npm install` at the root of your directory
2. Run `npm run start` to start the project
3. Start coding!

## Running Contract Locally
npx hardhat run scripts/run.js

## Deploying to Rinkeby Testnet
```shell
npx hardhat run scripts/deploy.js --network rinkeby
```
## Connecting Web App to Deployed Smart Contract on Rinkeby Testnet
1. Update Contract Address in scripts/constants.js
2. Copy json file from artifacts/contracts/MyEpicGame.sol/MyEpicGame.json
3. Paste what copied in step 2 into src/utils/MyEpicGame.json

## Hardhat tasks
```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

## Wallet & Coin:
Wallet:
https://metamask.io/

Rinkeby Faucet:
https://faucets.chain.link/rinkeby

## NFT & Token:
NFT: https://testnets.opensea.io/assets/0xa02c719bb0319eb4146f4f234867df0f89b798a8/0

Contract: https://rinkeby.etherscan.io/token/0x823f1a06e02090763cBE1987076E014bD280822E

## Inspiration:
[Create your own mini turn-based NFT browser game](https://github.com/buildspace/buildspace-nft-game-starter)

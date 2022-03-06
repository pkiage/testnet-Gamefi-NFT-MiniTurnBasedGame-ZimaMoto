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
[Metamask](https://metamask.io/)

Rinkeby Faucet:
https://faucets.chain.link/rinkeby

## Token:
Token: https://rinkeby.etherscan.io/token/0x0c8284cBAC3dd4d53b16E1f6f5Fe931B85B3D018

## Pin Manager
[Pinata](https://www.pinata.cloud/)

## Inspiration:
[Create your own mini turn-based NFT browser game](https://github.com/buildspace/buildspace-nft-game-starter)

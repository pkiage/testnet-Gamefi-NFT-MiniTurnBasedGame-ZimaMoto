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
1. Update Contract Address in src/constants.js
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
Token: https://rinkeby.etherscan.io/token/0xD8605777E42DFD702BD0174b479421b380B7B528

## Pin Manager
[Pinata](https://www.pinata.cloud/)

## Inspiration:
[Create your own mini turn-based NFT browser game](https://github.com/buildspace/buildspace-projects/tree/main/NFT_Game)

## Further development ideas:
- [ ] Refill extinguisher (or mint another one)
  - [ ] Yours
  - [ ] Another player's
  - [ ] Multiple players'
- [ ] Switch extinguisher
- [ ] Leaderboard
- [ ] Critical hit
- [ ] Audio effects
- [ ] Game history
- [ ] Mainnet donations towards causes e.g. climate change, public health, & security
- [ ] Responsive design
- [ ] Multiple extinguishers at once (multiplayer)
- [ ] Game levels

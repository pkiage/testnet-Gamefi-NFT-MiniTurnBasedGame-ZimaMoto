const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
      ["Water", "Earth", "Air","Fire"],       // Names
      ["QmRrbohrbCBgFhAp397RWpxwToYEPknd7gCDUwBLTF5QDH", // Images
      "QmXMgM72ni9wdnUaA54dTZD6BdGSjUNNrhkN5eFS8bpAXy", 
      "QmWyzhxxwcsHYqrySHRepwvyp4R5GKeZeJY7ZeXGWtJTbL",
      "QmPX3hw1L3UWY8aN5voQmhPTgQ65nvstxin9XuK6eXUHZM"
    ],
      [100, 300, 100,100],                    // HP values
      [100, 25, 50,50],                       // Attack damage values
      "Fire", // Boss name
      "QmSat7rvhFMSztLTLE4UQLZtMBbexNm1vPLDo2QP5UkteH", // Boss image
      10000, // Boss hp
      50 // Boss attack damage
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();


  
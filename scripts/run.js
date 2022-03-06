const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
      ["Water", "Earth", "Air","Fire"],       // Names
      ["https://i.postimg.cc/769FpfD8/water.jpg", // Images https://cloudflare-ipfs.com/ipfs/QmPX3hw1L3UWY8aN5voQmhPTgQ65nvstxin9XuK6eXUHZM
      "https://i.postimg.cc/HxTGZbq9/earth.jpg", 
      "https://i.postimg.cc/W1JPhNmg/air.jpg",
      "https://i.postimg.cc/N0qvX3bV/fire.jpg"
    ],
      [100, 300, 100,100],                    // HP values
      [100, 25, 50,50],                       // Attack damage values
      "Fire", // Boss name
      "https://i.postimg.cc/5tBdSsRt/forestfire.jpg", // Boss image
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


  
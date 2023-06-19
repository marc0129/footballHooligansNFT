const hre = require("hardhat");

async function main() {

  const FootballHooligans = await hre.ethers.getContractFactory("FootballHooligans");
  const footballHooligans = await FootballHooligans.deploy();

  await footballHooligans.deployed();

  console.log("FootballHooligans deployed to:", footballHooligans.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

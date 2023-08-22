const hre = require("hardhat");

async function main() {
  
  const Faucet = await hre.ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy("0x6785B0a50c41eA940AC9e4b18E14aeF221d59658");

  await faucet.deployed();

  console.log("Facuet contract deployed : ", faucet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

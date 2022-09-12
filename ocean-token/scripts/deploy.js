const hre = require("hardhat");

async function main() {
  const OceanToken = await hre.ethers.getContractFactory("OceanToken");
  const oceanToken = await OceanToken.deploy(100000000, 50);

  await oceanToken.deployed();

  console.log("Ocean Token deployed: ", oceanToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

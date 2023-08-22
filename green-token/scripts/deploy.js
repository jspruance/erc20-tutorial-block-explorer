const hre = require("hardhat");

async function main() {

  const GreenToken = await hre.ethers.getContractFactory("GreenToken");
  const greenToken = await GreenToken.deploy(100000000, 50);

  await greenToken.deployed();

  console.log("Green Token is deployed : ", greenToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

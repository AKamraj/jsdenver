// Import the necessary libraries
const { ethers } = require("hardhat");

// Define the deployment function
async function main() {
  // Set the constructor arguments
  const ownerAddress = "0x0e21c1982BeeEF2e25A9D4d51baeaB686207Afcf";
  const URIPrefix = "QmZ8U6ZfhbCpsfHK7MscsnYUEdQ2T4xmgHs1sX4gA4ZB4K";

  // Get the current gas price
  const gasPrice = await ethers.provider.getGasPrice();
  const gasPrice2 = gasPrice.toNumber();
  //   console.log("GAS PRICE");
  //   console.log(gasPrice2);

  // Estimate the gas usage for the contract deployment
  const JoyKarma = await ethers.getContractFactory("JoyKarma");
  const estimatedGas = await ethers.provider.estimateGas(JoyKarma.getDeployTransaction(ownerAddress, URIPrefix));

  // Deploy the contract with constructor arguments and estimated gas limit and price
  const gasLimit = estimatedGas.toNumber();
  //console.log("ESTIMATED GAS");
  //console.log(gasLimit);
  const JoyKarmaWithGas = await JoyKarma.deploy(ownerAddress, URIPrefix, { gasLimit: gasLimit, gasPrice: gasPrice2 });

  // Wait for the contract to be deployed
  await JoyKarmaWithGas.deployed();

  console.log("JoyKarma deployed to:", JoyKarmaWithGas.address);
}

// Run the deployment function
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

/*
// Import the necessary libraries
const { ethers } = require("hardhat");

// Define the deployment function
async function main() {
  // Get the accounts to deploy from
  const accounts = await ethers.getSigners();

  // Set the constructor arguments
  const ownerAddress = "0xc2b60CfFe4f20b2046C951CDEB459aF897cff571";
  const URIPrefix = "asodfonasdoinasdf";

  // Get the current gas price
  const gasPrice = await ethers.provider.getGasPrice();
  console.log("GAS PRICE");
  console.log(gasPrice);

  // Estimate the gas usage for the contract deployment
  const JoyKarma = await ethers.getContractFactory("JoyKarma");
  const estimatedGas = await JoyKarma.estimateGas(ownerAddress, URIPrefix);
  console.log("ESTIMATED GAS");
  console.log(estimatedGas);

  // Deploy the contract with constructor arguments and estimated gas limit and price
  const gasLimit = estimatedGas.toNumber();
  const JoyKarmaWithGas = await JoyKarma.deploy(ownerAddress, URIPrefix, { gasLimit, gasPrice });

  // Wait for the contract to be deployed
  await JoyKarmaWithGas.deployed();

  console.log("JoyKarma deployed to:", JoyKarmaWithGas.address);
}

// Run the deployment function
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
*/

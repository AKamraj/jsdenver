# Contract Deployment
To deploy the contract:
1. Run `npm install --save-dev hardhat @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan 'ethers@^5.0.0' @openzeppelin/contracts`
2. Run `cp .env.example .env`
3. Populate `.env` with required values 
4. Run `npx hardhat compile`
5. Run `npx hardhat run scripts/deploy.js --network mumbai`
6. Once the contract is deployed successfully, verify it using this command: `npx hardhat verify --network mumbai 0x4d1eDE267508ea5F795eA0B5466b8074f1BdFb95`
- Make sure to replace the address above with the deployed contract's address, which should be printed to the terminal 
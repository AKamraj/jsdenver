const ethers = require("ethers");
const contractABI = require('./JoyKarmaABI.json');
//const ERC1238Approval = require('./ERC1238Approval.json');

async function main() {
  // set up the contract and signer
  const contractAddress = '0xcecd9f1d22cB7f5572348F336617d31919d54A57'; // address of the contract you're interacting with
  const privateKey = process.env.PRIVATE_KEY; // private key of the user signing the message
  const infuraApiKey = process.env.INFURA_API_KEY;
  const chainId = 80001;
  const provider = new ethers.providers.InfuraProvider(chainId, infuraApiKey);
  const signer = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  // define the types
  const EIP712Domain = [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' },
    { name: 'chainId', type: 'uint256' },
    { name: 'verifyingContract', type: 'address' },
  ];
  const Approval = [
    { name: 'to', type: 'address' },
    { name: 'value', type: 'uint256' },
    { name: 'approvalExpiry', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
  ];

  // define the message to be signed
  const domain = {
    name: 'JoyKarma',
    version: '1.0.0',
    chainId: chainId, // Mumbai chain ID
    verifyingContract: contractAddress,
  };
  const types = {
    EIP712Domain,
    Approval,
  };
  const message = {
    to: '0xcecd9f1d22cB7f5572348F336617d31919d54A57', // address of the recipient of the approval
    value: ethers.utils.parseEther('1'), // amount to approve, in ether
    approvalExpiry: Math.floor(Date.now() / 1000) + 604800, // expiry time of the approval, 1 week from now
    nonce: 0, // change this to automatically detect nonce 
  };
  const data = {
    types,
    domain,
    message,
  };

  // prompt the user to sign the message
  const signature = await signer._signTypedData(domain, types, message);

  // verify the signature
  const recoveredAddress = ethers.utils.recoverAddress(data, signature);
  const isValidSignature = (
    recoveredAddress.toLowerCase() === signer.address.toLowerCase() &&
    message.approvalExpiry > Math.floor(Date.now() / 1000)
  );
  if (!isValidSignature) {
    throw new Error('Invalid signature');
  }

  // submit the transaction to the contract
  await contract.approveWithSignature(
    message.to,
    message.value,
    message.approvalExpiry,
    signature.v,
    signature.r,
    signature.s
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
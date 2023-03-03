# [ERC1238] Non-transferable Tokens (NTTs/badges)

## Overview

This repository contains work-in-progress implementation proposal(s) for Non-transferable Tokens (see https://github.com/ethereum/EIPs/issues/1238).

Documentation available here: https://erc1238.notion.site/

## Usage

### Pre Requisites

Before running any command, you need to create a `.env` file and set a BIP-39 compatible mnemonic as an environment
variable. Follow the example in `.env.example`. If you don't already have a mnemonic, use this [website](https://iancoleman.io/bip39/) to generate one.

Then, proceed with installing dependencies:

```sh
yarn install
```

### Compile

Compile the smart contracts with Hardhat:

```sh
$ yarn compile
```

### TypeChain

Compile the smart contracts and generate TypeChain artifacts:

```sh
$ yarn typechain
```

### Lint Solidity

Lint the Solidity code:

```sh
$ yarn lint:sol
```

### Lint TypeScript

Lint the TypeScript code:

```sh
$ yarn lint:ts
```

### Test

Run the Mocha tests:

```sh
$ yarn test
```

### Coverage

Generate the code coverage report:

```sh
$ yarn coverage
```

### Report Gas

See the gas usage per unit test and average gas per method call:

```sh
$ REPORT_GAS=true yarn test
```

### Clean

Delete the smart contract artifacts, the coverage reports and the Hardhat cache:

```sh
$ yarn clean
```

### Deploy

Deploy the contracts to Hardhat Network:

```sh
$ yarn deploy --greeting "Bonjour, le monde!"
```

## Syntax Highlighting

If you use VSCode, you can enjoy syntax highlighting for your Solidity code via the
[vscode-solidity](https://github.com/juanfranblanco/vscode-solidity) extension. The recommended approach to set the
compiler version is to add the following fields to your VSCode user settings:

```json
{
  "solidity.compileUsingRemoteVersion": "v0.8.4+commit.c7e474f2",
  "solidity.defaultCompiler": "remote"
}
```

Where of course `v0.8.4+commit.c7e474f2` can be replaced with any other version.

## Credits

- Setup used: [Solidity-template](https://github.com/paulrberg/solidity-template)

## Verifying Contracts

Must include contract address (deployed from Hardhat project) and constructor args: `hh verify --network mumbai 0xcecd9f1d22cB7f5572348F336617d31919d54A57 0x0e21c1982BeeEF2e25A9D4d51baeaB686207Afcf QmZ8U6ZfhbCpsfHK7MscsnYUEdQ2T4xmgHs1sX4gA4ZB4K`

## Resetting Env
If deploying a new contract and trying to verify, make sure to delete items in the `cache` folder
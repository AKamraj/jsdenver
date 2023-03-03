/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1238Mock, ERC1238MockInterface } from "../ERC1238Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "burner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "BurnBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "burner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BurnSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "MintBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "MintSingle",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[][]",
        name: "ids",
        type: "uint256[][]",
      },
    ],
    name: "balanceOfBundle",
    outputs: [
      {
        internalType: "uint256[][]",
        name: "",
        type: "uint256[][]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintBatchToContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "approvalExpiry",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintBatchToEOA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintToContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "approvalExpiry",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintToEOA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200245c3803806200245c83398101604081905262000034916200020c565b6040805160c0810182526015608082019081527f45524331323338204d696e7420417070726f76616c000000000000000000000060a083015281528151808301835260018152603160f81b6020828101918252808401839052468486018190523060608601819052855180519084012094519093209551879662000108957f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f9590949193929091019485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b60408051601f198184030181529190528051602090910120600055506200012f8162000137565b505062000325565b80516200014c90600390602084019062000150565b5050565b8280546200015e90620002e8565b90600052602060002090601f016020900481019282620001825760008555620001cd565b82601f106200019d57805160ff1916838001178555620001cd565b82800160010185558215620001cd579182015b82811115620001cd578251825591602001919060010190620001b0565b50620001db929150620001df565b5090565b5b80821115620001db5760008155600101620001e0565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200022057600080fd5b82516001600160401b03808211156200023857600080fd5b818501915085601f8301126200024d57600080fd5b815181811115620002625762000262620001f6565b604051601f8201601f19908116603f011681019083821181831017156200028d576200028d620001f6565b816040528281528886848701011115620002a657600080fd5b600093505b82841015620002ca5784840186015181850187015292850192620002ab565b82841115620002dc5760008684830101525b98975050505050505050565b600181811c90821680620002fd57607f821691505b602082108114156200031f57634e487b7160e01b600052602260045260246000fd5b50919050565b61212780620003356000396000f3fe608060405234801561001057600080fd5b50600436106100de5760003560e01c806355f804b31161008c578063afd6908611610066578063afd69086146101ab578063dbee1524146101cb578063ecab3b56146101eb578063f5298aca146101fe57600080fd5b806355f804b3146101705780636b20c454146101835780636c0360eb1461019657600080fd5b8063328b50e2116100bd578063328b50e214610141578063360f38e9146101545780633644e5151461016757600080fd5b8062fdd58e146100e357806301ffc9a71461010957806329ac9db71461012c575b600080fd5b6100f66100f1366004611697565b610211565b6040519081526020015b60405180910390f35b61011c6101173660046116d7565b6102bc565b6040519015158152602001610100565b61013f61013a366004611808565b6102f3565b005b61013f61014f3660046118bc565b61036b565b61013f61016236600461194b565b610385565b6100f660005481565b61013f61017e3660046119ac565b610397565b61013f610191366004611a92565b6103a3565b61019e6103b3565b6040516101009190611b53565b6101be6101b9366004611b66565b6103c2565b6040516101009190611bef565b6101de6101d9366004611c8d565b610472565b6040516101009190611d4e565b61013f6101f9366004611db0565b61053d565b61013f61020c366004611e85565b6105be565b60006001600160a01b0383166102945760405162461bcd60e51b815260206004820152602b60248201527f455243313233383a2062616c616e636520717565727920666f7220746865207a60448201527f65726f206164647265737300000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060009081526002602090815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216631d31540b60e21b14806102ed57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6103638686868080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808a028281018201909352898252909350899250889182918501908490808284376000920191909152508792506105c9915050565b505050505050565b61037b8888888888888888610645565b5050505050505050565b610391848484846106ef565b50505050565b6103a08161076b565b50565b6103ae838383610782565b505050565b60606103bd61099c565b905090565b805160609060008167ffffffffffffffff8111156103e2576103e2611747565b60405190808252806020026020018201604052801561040b578160200160208202803683370190505b50905060005b828110156104695761043c8686838151811061042f5761042f611eb8565b6020026020010151610211565b82828151811061044e5761044e611eb8565b602090810291909101015261046281611ee4565b9050610411565b50949350505050565b815160609060008167ffffffffffffffff81111561049257610492611747565b6040519080825280602002602001820160405280156104c557816020015b60608152602001906001900390816104b05790505b50905060005b828110156104695761050f8682815181106104e8576104e8611eb8565b602002602001015186838151811061050257610502611eb8565b60200260200101516103c2565b82828151811061052157610521611eb8565b60200260200101819052508061053690611ee4565b90506104cb565b6105b28a8a8a8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808e0282810182019093528d82529093508d92508c9182918501908490808284376000920191909152508b92508a91508990508888610a2e565b50505050505050505050565b6103ae838383610acd565b6001600160a01b0384163b61062c5760405162461bcd60e51b8152602060048201526024808201527f455243313233383a20526563697069656e74206973206e6f74206120636f6e746044820152631c9858dd60e21b606482015260840161028b565b61063884848484610c1a565b6103913385858585610da7565b428210156106bb5760405162461bcd60e51b815260206004820152603c60248201527f455243313233383a2070726f766964656420617070726f76616c20657870697260448201527f792074696d652063616e6e6f7420626520696e20746865207061737400000000606482015260840161028b565b60006106c989898986610f4a565b90506106d88982888888610fe3565b6106e48989898561114e565b505050505050505050565b6001600160a01b0384163b6107525760405162461bcd60e51b8152602060048201526024808201527f455243313233383a20526563697069656e74206973206e6f74206120636f6e746044820152631c9858dd60e21b606482015260840161028b565b61075e8484848461114e565b61039133858585856111ce565b805161077e9060039060208401906115e2565b5050565b6001600160a01b0383166107e45760405162461bcd60e51b815260206004820152602360248201527f455243313233383a206275726e2066726f6d20746865207a65726f206164647260448201526265737360e81b606482015260840161028b565b8151815181146108475760405162461bcd60e51b815260206004820152602860248201527f455243313233383a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b606482015260840161028b565b3360005b8281101561094757600085828151811061086757610867611eb8565b60200260200101519050600085838151811061088557610885611eb8565b6020026020010151905060008281526002602090815260408083206001600160a01b038c1684529091529020548181101561090e5760405162461bcd60e51b8152602060048201526024808201527f455243313233383a206275726e20616d6f756e7420657863656564732062616c604482015263616e636560e01b606482015260840161028b565b60009283526002602090815260408085206001600160a01b038c168652909152909220910390558061093f81611ee4565b91505061084b565b50846001600160a01b0316816001600160a01b03167ff6d51a8d20e8b0143ca41399aa93b2a480cb0b95e39847e4ebd3144b2db8775d868660405161098d929190611eff565b60405180910390a35050505050565b6060600380546109ab90611f2d565b80601f01602080910402602001604051908101604052809291908181526020018280546109d790611f2d565b8015610a245780601f106109f957610100808354040283529160200191610a24565b820191906000526020600020905b815481529060010190602001808311610a0757829003601f168201915b5050505050905090565b42821015610aa45760405162461bcd60e51b815260206004820152603c60248201527f455243313233383a2070726f766964656420617070726f76616c20657870697260448201527f792074696d652063616e6e6f7420626520696e20746865207061737400000000606482015260840161028b565b6000610ab2898989866112c7565b9050610ac18982888888610fe3565b6106e489898985610c1a565b6001600160a01b038316610b2f5760405162461bcd60e51b815260206004820152602360248201527f455243313233383a206275726e2066726f6d20746865207a65726f206164647260448201526265737360e81b606482015260840161028b565b3360008381526002602090815260408083206001600160a01b038816845290915290205482811015610baf5760405162461bcd60e51b8152602060048201526024808201527f455243313233383a206275726e20616d6f756e7420657863656564732062616c604482015263616e636560e01b606482015260840161028b565b60008481526002602090815260408083206001600160a01b03898116808652918452938290208786039055905186815287939192918616917f995c922928fc04a31c6446db7f51f402ddb95ac41fa3dca51c98ff1fe730053191015b60405180910390a45050505050565b825182518114610c7d5760405162461bcd60e51b815260206004820152602860248201527f455243313233383a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b606482015260840161028b565b3360005b82811015610d5157610cc18288888481518110610ca057610ca0611eb8565b6020026020010151888581518110610cba57610cba611eb8565b5050505050565b848181518110610cd357610cd3611eb8565b602002602001015160026000888481518110610cf157610cf1611eb8565b602002602001015181526020019081526020016000206000896001600160a01b03166001600160a01b031681526020019081526020016000206000828254610d399190611f68565b90915550819050610d4981611ee4565b915050610c81565b50856001600160a01b0316816001600160a01b03167f5c5ac6bfb3f54a39f008d2e9be10d575012f29230716d49e92da377d748b1a878787604051610d97929190611eff565b60405180910390a3505050505050565b604051631817fd8d60e31b81526001600160a01b0385169063c0bfec6890610dd9908890879087908790600401611f80565b602060405180830381600087803b158015610df357600080fd5b505af1925050508015610e23575060408051601f3d908101601f19168201909252610e2091810190611fd3565b60015b610ed957610e2f611ff0565b806308c379a01415610e695750610e4461200c565b80610e4f5750610e6b565b8060405162461bcd60e51b815260040161028b9190611b53565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313233383a207472616e7366657220746f206e6f6e204552433132333860448201527f526563656976657220696d706c656d656e746572000000000000000000000000606482015260840161028b565b6001600160e01b03198116631817fd8d60e31b146103635760405162461bcd60e51b815260206004820152602860248201527f455243313233383a204552433132333852656365697665722072656a656374656044820152676420746f6b656e7360c01b606482015260840161028b565b60408051608080820183526001600160a01b0387168083526020808401889052838501879052606080850187905285517f52728d9afc28e8ced723c0d045f298c937b01f391a4b42b38d572ec2fc7a3da69281019290925294810191909152928301869052820184905260a0820183905260009160c0015b60405160208183030381529060405280519060200120915050949350505050565b60008481526001602052604090205460ff161561104e5760405162461bcd60e51b815260206004820152602360248201527f455243313233383a20417070726f76616c206861736820616c726561647920756044820152621cd95960ea1b606482015260840161028b565b60006110976000548660405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b9050856001600160a01b03166110af828686866113a8565b6001600160a01b03161461112b5760405162461bcd60e51b815260206004820152602560248201527f455243313233383a20417070726f76616c20766572696669636174696f6e206660448201527f61696c6564000000000000000000000000000000000000000000000000000000606482015260840161028b565b505050600091825250600160208190526040909120805460ff1916909117905550565b3360008481526002602090815260408083206001600160a01b038916845290915281208054859290611181908490611f68565b9250508190555083856001600160a01b0316826001600160a01b03167f17facb1ae55b1a0fe54049767ddeb027123cb5d0379a5a1c6f5c954287d88fb386604051610c0b91815260200190565b6040516345ed75d560e01b81526001600160a01b038516906345ed75d590611200908890879087908790600401612096565b602060405180830381600087803b15801561121a57600080fd5b505af192505050801561124a575060408051601f3d908101601f1916820190925261124791810190611fd3565b60015b61125657610e2f611ff0565b6001600160e01b031981166345ed75d560e01b146103635760405162461bcd60e51b815260206004820152602860248201527f455243313233383a204552433132333852656365697665722072656a656374656044820152676420746f6b656e7360c01b606482015260840161028b565b604080516080810182526001600160a01b03861680825260208083018790528284018690526060830185905292516000937f5cc73a7fcd102a6ae8f875f4003b3419d4e2a2e10bf27fa799cf3fa9196d88629291611327918991016120ce565b60405160208183030381529060405280519060200120836040015160405160200161135291906120ce565b604051602081830303815290604052805190602001208460600151604051602001610fc29594939291909485526001600160a01b0393909316602085015260408401919091526060830152608082015260a00190565b60008060006113b9878787876113d0565b915091506113c681611494565b5095945050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611407575060009050600361148b565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561145b573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166114845760006001925092505061148b565b9150600090505b94509492505050565b60008160048111156114a8576114a8612104565b14156114b15750565b60018160048111156114c5576114c5612104565b14156115135760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161028b565b600281600481111561152757611527612104565b14156115755760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161028b565b600381600481111561158957611589612104565b14156103a05760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161028b565b8280546115ee90611f2d565b90600052602060002090601f0160209004810192826116105760008555611656565b82601f1061162957805160ff1916838001178555611656565b82800160010185558215611656579182015b8281111561165657825182559160200191906001019061163b565b50611662929150611666565b5090565b5b808211156116625760008155600101611667565b80356001600160a01b038116811461169257600080fd5b919050565b600080604083850312156116aa57600080fd5b6116b38361167b565b946020939093013593505050565b6001600160e01b0319811681146103a057600080fd5b6000602082840312156116e957600080fd5b81356116f4816116c1565b9392505050565b60008083601f84011261170d57600080fd5b50813567ffffffffffffffff81111561172557600080fd5b6020830191508360208260051b850101111561174057600080fd5b9250929050565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff8111828210171561178357611783611747565b6040525050565b600067ffffffffffffffff8311156117a4576117a4611747565b6040516117bb601f8501601f19166020018261175d565b8091508381528484840111156117d057600080fd5b83836020830137600060208583010152509392505050565b600082601f8301126117f957600080fd5b6116f48383356020850161178a565b6000806000806000806080878903121561182157600080fd5b61182a8761167b565b9550602087013567ffffffffffffffff8082111561184757600080fd5b6118538a838b016116fb565b9097509550604089013591508082111561186c57600080fd5b6118788a838b016116fb565b9095509350606089013591508082111561189157600080fd5b5061189e89828a016117e8565b9150509295509295509295565b803560ff8116811461169257600080fd5b600080600080600080600080610100898b0312156118d957600080fd5b6118e28961167b565b975060208901359650604089013595506118fe60608a016118ab565b94506080890135935060a0890135925060c0890135915060e089013567ffffffffffffffff81111561192f57600080fd5b61193b8b828c016117e8565b9150509295985092959890939650565b6000806000806080858703121561196157600080fd5b61196a8561167b565b93506020850135925060408501359150606085013567ffffffffffffffff81111561199457600080fd5b6119a0878288016117e8565b91505092959194509250565b6000602082840312156119be57600080fd5b813567ffffffffffffffff8111156119d557600080fd5b8201601f810184136119e657600080fd5b6119f58482356020840161178a565b949350505050565b600067ffffffffffffffff821115611a1757611a17611747565b5060051b60200190565b600082601f830112611a3257600080fd5b81356020611a3f826119fd565b604051611a4c828261175d565b83815260059390931b8501820192828101915086841115611a6c57600080fd5b8286015b84811015611a875780358352918301918301611a70565b509695505050505050565b600080600060608486031215611aa757600080fd5b611ab08461167b565b9250602084013567ffffffffffffffff80821115611acd57600080fd5b611ad987838801611a21565b93506040860135915080821115611aef57600080fd5b50611afc86828701611a21565b9150509250925092565b6000815180845260005b81811015611b2c57602081850181015186830182015201611b10565b81811115611b3e576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006116f46020830184611b06565b60008060408385031215611b7957600080fd5b611b828361167b565b9150602083013567ffffffffffffffff811115611b9e57600080fd5b611baa85828601611a21565b9150509250929050565b600081518084526020808501945080840160005b83811015611be457815187529582019590820190600101611bc8565b509495945050505050565b6020815260006116f46020830184611bb4565b600082601f830112611c1357600080fd5b81356020611c20826119fd565b604051611c2d828261175d565b83815260059390931b8501820192828101915086841115611c4d57600080fd5b8286015b84811015611a8757803567ffffffffffffffff811115611c715760008081fd5b611c7f8986838b0101611a21565b845250918301918301611c51565b60008060408385031215611ca057600080fd5b823567ffffffffffffffff80821115611cb857600080fd5b818501915085601f830112611ccc57600080fd5b81356020611cd9826119fd565b604051611ce6828261175d565b83815260059390931b8501820192828101915089841115611d0657600080fd5b948201945b83861015611d2b57611d1c8661167b565b82529482019490820190611d0b565b96505086013592505080821115611d4157600080fd5b50611baa85828601611c02565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015611da357603f19888603018452611d91858351611bb4565b94509285019290850190600101611d75565b5092979650505050505050565b6000806000806000806000806000806101008b8d031215611dd057600080fd5b611dd98b61167b565b995060208b013567ffffffffffffffff80821115611df657600080fd5b611e028e838f016116fb565b909b50995060408d0135915080821115611e1b57600080fd5b611e278e838f016116fb565b9099509750879150611e3b60608e016118ab565b965060808d0135955060a08d0135945060c08d0135935060e08d0135915080821115611e6657600080fd5b50611e738d828e016117e8565b9150509295989b9194979a5092959850565b600080600060608486031215611e9a57600080fd5b611ea38461167b565b95602085013595506040909401359392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611ef857611ef8611ece565b5060010190565b604081526000611f126040830185611bb4565b8281036020840152611f248185611bb4565b95945050505050565b600181811c90821680611f4157607f821691505b60208210811415611f6257634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115611f7b57611f7b611ece565b500190565b6001600160a01b0385168152608060208201526000611fa26080830186611bb4565b8281036040840152611fb48186611bb4565b90508281036060840152611fc88185611b06565b979650505050505050565b600060208284031215611fe557600080fd5b81516116f4816116c1565b600060033d11156120095760046000803e5060005160e01c5b90565b600060443d101561201a5790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561204a57505050505090565b82850191508151818111156120625750505050505090565b843d870101602082850101111561207c5750505050505090565b61208b6020828601018761175d565b509095945050505050565b6001600160a01b03851681528360208201528260408201526080606082015260006120c46080830184611b06565b9695505050505050565b815160009082906020808601845b838110156120f8578151855293820193908201906001016120dc565b50929695505050505050565b634e487b7160e01b600052602160045260246000fdfea164736f6c6343000809000a";

type ERC1238MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1238MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1238Mock__factory extends ContractFactory {
  constructor(...args: ERC1238MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1238Mock> {
    return super.deploy(uri, overrides || {}) as Promise<ERC1238Mock>;
  }
  getDeployTransaction(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri, overrides || {});
  }
  attach(address: string): ERC1238Mock {
    return super.attach(address) as ERC1238Mock;
  }
  connect(signer: Signer): ERC1238Mock__factory {
    return super.connect(signer) as ERC1238Mock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1238MockInterface {
    return new utils.Interface(_abi) as ERC1238MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1238Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC1238Mock;
  }
}
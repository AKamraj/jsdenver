/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type MintApprovalSignatureStruct = {
  v: BigNumberish;
  r: BytesLike;
  s: BytesLike;
  approvalExpiry: BigNumberish;
};

export type MintApprovalSignatureStructOutput = [
  number,
  string,
  string,
  BigNumber
] & { v: number; r: string; s: string; approvalExpiry: BigNumber };

export interface BadgeInterface extends utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address,uint256[])": FunctionFragment;
    "balanceOfBundle(address[],uint256[][])": FunctionFragment;
    "burn(address,uint256,uint256,bool)": FunctionFragment;
    "burnBatch(address,uint256[],uint256[],bool)": FunctionFragment;
    "mintBundle(address[],uint256[][],uint256[][],string[][],(uint8,bytes32,bytes32,uint256)[],bytes[])": FunctionFragment;
    "mintToContract(address,uint256,uint256,string,bytes)": FunctionFragment;
    "mintToEOA(address,uint256,uint256,uint8,bytes32,bytes32,uint256,string,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "setBaseURI(string)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBundle",
    values: [string[], BigNumberish[][]]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "burnBatch",
    values: [string, BigNumberish[], BigNumberish[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "mintBundle",
    values: [
      string[],
      BigNumberish[][],
      BigNumberish[][],
      string[][],
      MintApprovalSignatureStruct[],
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mintToContract",
    values: [string, BigNumberish, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mintToEOA",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike,
      BigNumberish,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "setBaseURI", values: [string]): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBundle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnBatch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintBundle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintToContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintToEOA", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;

  events: {
    "BurnBatch(address,address,uint256[],uint256[])": EventFragment;
    "BurnSingle(address,address,uint256,uint256)": EventFragment;
    "MintBatch(address,address,uint256[],uint256[])": EventFragment;
    "MintSingle(address,address,uint256,uint256)": EventFragment;
    "URI(uint256,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BurnBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BurnSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}

export type BurnBatchEvent = TypedEvent<
  [string, string, BigNumber[], BigNumber[]],
  { burner: string; owner: string; ids: BigNumber[]; amounts: BigNumber[] }
>;

export type BurnBatchEventFilter = TypedEventFilter<BurnBatchEvent>;

export type BurnSingleEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { burner: string; owner: string; id: BigNumber; amount: BigNumber }
>;

export type BurnSingleEventFilter = TypedEventFilter<BurnSingleEvent>;

export type MintBatchEvent = TypedEvent<
  [string, string, BigNumber[], BigNumber[]],
  { minter: string; to: string; ids: BigNumber[]; amounts: BigNumber[] }
>;

export type MintBatchEventFilter = TypedEventFilter<MintBatchEvent>;

export type MintSingleEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { minter: string; to: string; id: BigNumber; amount: BigNumber }
>;

export type MintSingleEventFilter = TypedEventFilter<MintSingleEvent>;

export type URIEvent = TypedEvent<
  [BigNumber, string],
  { id: BigNumber; value: string }
>;

export type URIEventFilter = TypedEventFilter<URIEvent>;

export interface Badge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BadgeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfBatch(
      account: string,
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    balanceOfBundle(
      accounts: string[],
      ids: BigNumberish[][],
      overrides?: CallOverrides
    ): Promise<[BigNumber[][]]>;

    burn(
      from: string,
      id: BigNumberish,
      amount: BigNumberish,
      deleteURI: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnBatch(
      from: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      deleteURI: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintBundle(
      to: string[],
      ids: BigNumberish[][],
      amounts: BigNumberish[][],
      uris: string[][],
      mintApprovalSignatures: MintApprovalSignatureStruct[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintToContract(
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      uri: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintToEOA(
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      approvalExpiry: BigNumberish,
      uri: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setBaseURI(
      newBaseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tokenURI(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  balanceOf(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfBatch(
    account: string,
    ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  balanceOfBundle(
    accounts: string[],
    ids: BigNumberish[][],
    overrides?: CallOverrides
  ): Promise<BigNumber[][]>;

  burn(
    from: string,
    id: BigNumberish,
    amount: BigNumberish,
    deleteURI: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnBatch(
    from: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    deleteURI: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintBundle(
    to: string[],
    ids: BigNumberish[][],
    amounts: BigNumberish[][],
    uris: string[][],
    mintApprovalSignatures: MintApprovalSignatureStruct[],
    data: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintToContract(
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    uri: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintToEOA(
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    approvalExpiry: BigNumberish,
    uri: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  setBaseURI(
    newBaseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tokenURI(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      account: string,
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    balanceOfBundle(
      accounts: string[],
      ids: BigNumberish[][],
      overrides?: CallOverrides
    ): Promise<BigNumber[][]>;

    burn(
      from: string,
      id: BigNumberish,
      amount: BigNumberish,
      deleteURI: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    burnBatch(
      from: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      deleteURI: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    mintBundle(
      to: string[],
      ids: BigNumberish[][],
      amounts: BigNumberish[][],
      uris: string[][],
      mintApprovalSignatures: MintApprovalSignatureStruct[],
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    mintToContract(
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      uri: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    mintToEOA(
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      approvalExpiry: BigNumberish,
      uri: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    setBaseURI(newBaseURI: string, overrides?: CallOverrides): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokenURI(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "BurnBatch(address,address,uint256[],uint256[])"(
      burner?: string | null,
      owner?: string | null,
      ids?: null,
      amounts?: null
    ): BurnBatchEventFilter;
    BurnBatch(
      burner?: string | null,
      owner?: string | null,
      ids?: null,
      amounts?: null
    ): BurnBatchEventFilter;

    "BurnSingle(address,address,uint256,uint256)"(
      burner?: string | null,
      owner?: string | null,
      id?: BigNumberish | null,
      amount?: null
    ): BurnSingleEventFilter;
    BurnSingle(
      burner?: string | null,
      owner?: string | null,
      id?: BigNumberish | null,
      amount?: null
    ): BurnSingleEventFilter;

    "MintBatch(address,address,uint256[],uint256[])"(
      minter?: string | null,
      to?: string | null,
      ids?: null,
      amounts?: null
    ): MintBatchEventFilter;
    MintBatch(
      minter?: string | null,
      to?: string | null,
      ids?: null,
      amounts?: null
    ): MintBatchEventFilter;

    "MintSingle(address,address,uint256,uint256)"(
      minter?: string | null,
      to?: string | null,
      id?: BigNumberish | null,
      amount?: null
    ): MintSingleEventFilter;
    MintSingle(
      minter?: string | null,
      to?: string | null,
      id?: BigNumberish | null,
      amount?: null
    ): MintSingleEventFilter;

    "URI(uint256,string)"(
      id?: BigNumberish | null,
      value?: null
    ): URIEventFilter;
    URI(id?: BigNumberish | null, value?: null): URIEventFilter;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      account: string,
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBundle(
      accounts: string[],
      ids: BigNumberish[][],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      from: string,
      id: BigNumberish,
      amount: BigNumberish,
      deleteURI: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnBatch(
      from: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      deleteURI: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintBundle(
      to: string[],
      ids: BigNumberish[][],
      amounts: BigNumberish[][],
      uris: string[][],
      mintApprovalSignatures: MintApprovalSignatureStruct[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintToContract(
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      uri: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintToEOA(
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      approvalExpiry: BigNumberish,
      uri: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setBaseURI(
      newBaseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenURI(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfBatch(
      account: string,
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfBundle(
      accounts: string[],
      ids: BigNumberish[][],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      from: string,
      id: BigNumberish,
      amount: BigNumberish,
      deleteURI: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnBatch(
      from: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      deleteURI: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintBundle(
      to: string[],
      ids: BigNumberish[][],
      amounts: BigNumberish[][],
      uris: string[][],
      mintApprovalSignatures: MintApprovalSignatureStruct[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintToContract(
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      uri: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintToEOA(
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      approvalExpiry: BigNumberish,
      uri: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setBaseURI(
      newBaseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenURI(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

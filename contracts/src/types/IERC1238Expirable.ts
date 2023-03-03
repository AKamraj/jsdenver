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

export interface IERC1238ExpirableInterface extends utils.Interface {
  functions: {
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address,uint256[])": FunctionFragment;
    "balanceOfBundle(address[],uint256[][])": FunctionFragment;
    "expiryDate(uint256)": FunctionFragment;
    "isExpired(uint256)": FunctionFragment;
    "setBatchExpiryDates(uint256[],uint256[])": FunctionFragment;
    "setExpiryDate(uint256,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

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
    functionFragment: "expiryDate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isExpired",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setBatchExpiryDates",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setExpiryDate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBundle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "expiryDate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isExpired", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBatchExpiryDates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExpiryDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "BurnBatch(address,address,uint256[],uint256[])": EventFragment;
    "BurnSingle(address,address,uint256,uint256)": EventFragment;
    "MintBatch(address,address,uint256[],uint256[])": EventFragment;
    "MintSingle(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BurnBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BurnSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintSingle"): EventFragment;
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

export interface IERC1238Expirable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC1238ExpirableInterface;

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

    expiryDate(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isExpired(id: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    setBatchExpiryDates(
      ids: BigNumberish[],
      dates: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExpiryDate(
      id: BigNumberish,
      date: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

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

  expiryDate(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  isExpired(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  setBatchExpiryDates(
    ids: BigNumberish[],
    dates: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExpiryDate(
    id: BigNumberish,
    date: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
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

    expiryDate(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    isExpired(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    setBatchExpiryDates(
      ids: BigNumberish[],
      dates: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    setExpiryDate(
      id: BigNumberish,
      date: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
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
  };

  estimateGas: {
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

    expiryDate(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    isExpired(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    setBatchExpiryDates(
      ids: BigNumberish[],
      dates: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExpiryDate(
      id: BigNumberish,
      date: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
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

    expiryDate(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isExpired(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBatchExpiryDates(
      ids: BigNumberish[],
      dates: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExpiryDate(
      id: BigNumberish,
      date: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
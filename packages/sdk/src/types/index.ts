import BigNumber from 'bignumber.js';

export type HexString = string;
export type { ChainInfo } from './chain';
export type * from './asset';
export type * from './enums';
export type * from './market';
export type * from './order';
export type { AssetInfo, SubAssetInfo, GetAssetsInput } from './asset';
export type { Transaction } from './tx';
export type HibitApiResponse = { code?: number; message?: string | null };
export interface UserKeyPair {
  privateKey: string;
}
/**
 * Represents a paginated response.
 *
 * @template T - The type of the items in the response.
 * @property {T[]} items - The list of items.
 * @property {number} totalCount - The total number of items.
 */
export type PageResponse<T> = {
  items: T[];
  totalCount: number;
};

export class Chain {
  value: BigNumber;

  constructor(value: BigNumber) {
    this.value = value;
  }

  static Bitcoin = new Chain(BigNumber(0));
  static Ethereum = new Chain(BigNumber(60));
  static Solana = new Chain(BigNumber(501));
  static Dfinity = new Chain(BigNumber(223));
  static Ton = new Chain(BigNumber(607));
  static Tron = new Chain(BigNumber(195));
  static Kaspa = new Chain(BigNumber(111111));

  static fromString(value: string): Chain | null {
    if (!value) {
      return null;
    }
    return new Chain(BigNumber(value));
  }

  toString(): string {
    return this.value.toString();
  }

  equals(other: Chain): boolean {
    if (!other) {
      return false;
    }
    return this.value.isEqualTo(other.value);
  }
}

export class ChainNetwork {
  value: BigNumber;

  constructor(value: BigNumber) {
    this.value = value;
  }

  static MainNet = new ChainNetwork(BigNumber(1));
  static TestNet = new ChainNetwork(BigNumber(0));

  static BtcMainNet = new ChainNetwork(BigNumber(1));
  static BtcTestNet = new ChainNetwork(BigNumber(2));

  static EvmMainNet = new ChainNetwork(BigNumber(0x1));
  static EvmSepoliaNet = new ChainNetwork(BigNumber(0xaa36a7));
  static EvmBscNet = new ChainNetwork(BigNumber(0x38));
  static EvmBscTestNet = new ChainNetwork(BigNumber(97));
  static EvmBaseNet = new ChainNetwork(BigNumber(8453));
  static EvmBaseSepoliaNet = new ChainNetwork(BigNumber(84532));
  static EvmAvalancheNet = new ChainNetwork(BigNumber(43114));
  static EvmAvalancheFujiNet = new ChainNetwork(BigNumber(43113));
  static EvmScrollNet = new ChainNetwork(BigNumber(534352));
  static EvmScrollSepoliaNet = new ChainNetwork(BigNumber(534351));
  static EvmBitlayerNet = new ChainNetwork(BigNumber(200901));
  static EvmBitlayerTestNet = new ChainNetwork(BigNumber(200810));
  static EvmSwanNet = new ChainNetwork(BigNumber(254));
  static EvmSwanTestNet = new ChainNetwork(BigNumber(20241133));
  static EvmPantaNet = new ChainNetwork(BigNumber(331));

  static SolanaMainNet = new ChainNetwork(BigNumber(0x3));
  static SolanaTestNet = new ChainNetwork(BigNumber(0x2));

  static TonMainNet = new ChainNetwork(BigNumber(1));
  static TonTestNet = new ChainNetwork(BigNumber(2));

  static TronMainNet = new ChainNetwork(BigNumber(0x2b6653dc));
  static TronShastaTestNet = new ChainNetwork(BigNumber(0x94a9059e));
  static TronNileTestNet = new ChainNetwork(BigNumber(0xcd8690dc));

  static DfinityMainNet = new ChainNetwork(BigNumber(1));

  static KaspaMainNet = new ChainNetwork(BigNumber(0));
  static KaspaTestNet = new ChainNetwork(BigNumber(1));

  static fromString(value: string): ChainNetwork | null {
    if (!value) {
      return null;
    }
    return new ChainNetwork(BigNumber(value));
  }

  toString(): string {
    return this.value.toString();
  }

  equals(other: ChainNetwork): boolean {
    if (!other) {
      return false;
    }
    return this.value.isEqualTo(other.value);
  }
}

export class ChainAssetType {
  value: BigNumber;

  constructor(value: BigNumber) {
    this.value = value;
  }

  static Native = new ChainAssetType(BigNumber(0));
  static NativeGas = new ChainAssetType(BigNumber(1));
  static ERC20 = new ChainAssetType(BigNumber(3));
  static ERC721 = new ChainAssetType(BigNumber(4));
  static ICP = new ChainAssetType(BigNumber(5));
  static ICRC3 = new ChainAssetType(BigNumber(6));
  static BRC20 = new ChainAssetType(BigNumber(7));
  static SPL = new ChainAssetType(BigNumber(8));
  static TRC20 = new ChainAssetType(BigNumber(9));
  static Jetton = new ChainAssetType(BigNumber(10));
  static KRC20 = new ChainAssetType(BigNumber(11));

  static fromString(value: string): ChainAssetType | null {
    if (!value) {
      return null;
    }
    return new ChainAssetType(BigNumber(value));
  }

  toString(): string {
    return this.value.toString();
  }

  equals(other: ChainAssetType): boolean {
    if (!other) {
      return false;
    }
    return this.value.isEqualTo(other.value);
  }
}

export class TransactionType {
  value: BigNumber;

  constructor(value: BigNumber) {
    this.value = value;
  }

  static WalletRegister = new TransactionType(BigNumber(100));
  static Deposit = new TransactionType(BigNumber(200));
  static Withdraw = new TransactionType(BigNumber(201));
  static Transfer = new TransactionType(BigNumber(300));
  static ResetMainSecret = new TransactionType(BigNumber(400));
  static CreateApiSecret = new TransactionType(BigNumber(401));
  static DestroyApiSecret = new TransactionType(BigNumber(402));
  static CreateSpotOrder = new TransactionType(BigNumber(500));
  static CancelSpotOrder = new TransactionType(BigNumber(501));
  static AddAmmV2Liquidity = new TransactionType(BigNumber(600));
  static RemoveAmmV2Liquidity = new TransactionType(BigNumber(601));
  static RegisterAsset = new TransactionType(BigNumber(700));
  static UpdateGlobalWithdrawalFeeTo = new TransactionType(BigNumber(701));
  static UpdateAssetWithdrawalFeeTo = new TransactionType(BigNumber(702));
  static UpdateChainConfirmationTimes = new TransactionType(BigNumber(800));
  static RegisterMarket = new TransactionType(BigNumber(900));
  static UpdateMarketTradingSettings = new TransactionType(BigNumber(901));
  static UpdateSpotMarketInitialFeeTo = new TransactionType(BigNumber(902));
  static UpdateMarketFeeTo = new TransactionType(BigNumber(903));
  static UpdateMarketInitialFee = new TransactionType(BigNumber(904));
  static UpdateMarketFee = new TransactionType(BigNumber(905));
  static ClaimSpotMarketTradingFee = new TransactionType(BigNumber(906));
  static UpdateSpotMarketRoyalty = new TransactionType(BigNumber(907));
  static ClaimSpotMarketRoyalty = new TransactionType(BigNumber(908));
  static AssetAccountBinding = new TransactionType(BigNumber(1000));
  static AssetAccountUnbinding = new TransactionType(BigNumber(1001));
  static SubmitMemeOrder = new TransactionType(BigNumber(1100));
  static CancelMemeOrder = new TransactionType(BigNumber(1101));
  static RegisterMemeMarket = new TransactionType(BigNumber(1200));
  static UpdateMemeMarketInitialTradingSettings = new TransactionType(BigNumber(1201));
  static UpdateMemeMarketTradingSettings = new TransactionType(BigNumber(1202));
  static UpdateMemeMarketInitialFeeTo = new TransactionType(BigNumber(1203));
  static UpdateMemeMarketFeeTo = new TransactionType(BigNumber(1204));
  static UpdateMemeMarketInitialTradingFee = new TransactionType(BigNumber(1205));
  static UpdateMemeMarketTradingFee = new TransactionType(BigNumber(1206));
  static ClaimMemeMarketTradingFee = new TransactionType(BigNumber(1207));

  static fromString(value: string): TransactionType {
    if (!value) {
      throw new Error('Invalid transaction type');
    }
    return new TransactionType(BigNumber(value));
  }

  toString(): string {
    return this.value.toString();
  }

  equals(other: TransactionType): boolean {
    if (!other) {
      return false;
    }
    return this.value.isEqualTo(other.value);
  }
}

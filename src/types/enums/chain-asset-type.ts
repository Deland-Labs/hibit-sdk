/**
 * Enum representing different types of chain assets.
 */
export enum ChainAssetType {
  /**
   * Native asset type.
   */
  Native = 0,

  /**
   * Native gas asset type.
   */
  NativeGas = 1,

  /**
   * ERC20 token type.
   */
  ERC20 = 3,

  /**
   * ERC721 token type.
   */
  ERC721 = 4,

  /**
   * ICP token type.
   */
  ICP = 5,

  /**
   * ICRC3 token type.
   */
  ICRC3 = 6,

  /**
   * BRC20 token type.
   */
  BRC20 = 7,

  /**
   * SPL token type.
   */
  SPL = 8,

  /**
   * TRC20 token type.
   * Tron chain
   */
  TRC20 = 9,

  /**
   * Jetton token type.
   * TON chain
   */
  Jetton = 10,

  /**
   * KRC20 token type.
   * Kaspa chain
   */
  KRC20 = 11
}

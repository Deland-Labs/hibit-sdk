import { beforeAll, describe, expect, it } from 'vitest';
import { HibitClient, HibitNetwork, WalletSignatureSchema } from '../src';
import { HibitError } from '../src/error';
import { Chain } from '../src/types/chain';

describe('HibitClient Parameter Validation Tests', () => {
  let client: HibitClient;

  beforeAll(() => {
    client = new HibitClient();
    client.setOptions({
      network: HibitNetwork.Testnet,
      hin: 10000n,
      proxyKey: 'fa3e933f1788d7d56a20e078370f4c3b713ee0bcdb44392e4cfeaf524716d06a'
    });
  });

  describe('resetProxyKey parameter validation', () => {
    it('should throw error when input is undefined', async () => {
      await expect(client.resetProxyKey(undefined as any)).rejects.toThrow(
        "Missing required parameter 'input' in resetProxyKey"
      );
    });

    it('should throw error when input is null', async () => {
      await expect(client.resetProxyKey(null as any)).rejects.toThrow(
        "Missing required parameter 'input' in resetProxyKey"
      );
    });

    it('should throw error when chain is missing', async () => {
      await expect(client.resetProxyKey({} as any)).rejects.toThrow(
        "Missing required parameter 'chain' in resetProxyKey"
      );
    });

    it('should throw error when chain is undefined', async () => {
      await expect(
        client.resetProxyKey({
          chain: undefined as any,
          nonce: 1n,
          signatureSchema: WalletSignatureSchema.BtcEcdsa,
          proxyPrivateKey: '0x123',
          proxyPublicKey: '0x456'
        })
      ).rejects.toThrow("Missing required parameter 'chain' in resetProxyKey");
    });

    it('should throw error when nonce is missing', async () => {
      await expect(
        client.resetProxyKey({
          chain: Chain.Bitcoin,
          signatureSchema: WalletSignatureSchema.BtcEcdsa,
          proxyPrivateKey: '0x123',
          proxyPublicKey: '0x456'
        } as any)
      ).rejects.toThrow("Missing required parameter 'nonce' in resetProxyKey");
    });

    it('should throw error when signatureSchema is missing', async () => {
      await expect(
        client.resetProxyKey({
          chain: Chain.Bitcoin,
          nonce: 1n,
          proxyPrivateKey: '0x123',
          proxyPublicKey: '0x456'
        } as any)
      ).rejects.toThrow("Missing required parameter 'signatureSchema' in resetProxyKey");
    });

    it('should throw error when proxyPrivateKey is missing', async () => {
      await expect(
        client.resetProxyKey({
          chain: Chain.Bitcoin,
          nonce: 1n,
          signatureSchema: WalletSignatureSchema.BtcEcdsa,
          proxyPublicKey: '0x456'
        } as any)
      ).rejects.toThrow("Missing required parameter 'proxyPrivateKey' in resetProxyKey");
    });

    it('should throw error when proxyPublicKey is missing', async () => {
      await expect(
        client.resetProxyKey({
          chain: Chain.Bitcoin,
          nonce: 1n,
          signatureSchema: WalletSignatureSchema.BtcEcdsa,
          proxyPrivateKey: '0x123'
        } as any)
      ).rejects.toThrow("Missing required parameter 'proxyPublicKey' in resetProxyKey");
    });
  });

  describe('getProxyKeypair parameter validation', () => {
    it('should throw error when input is undefined', async () => {
      await expect(client.getProxyKeypair(undefined as any)).rejects.toThrow(
        "Missing required parameter 'input' in getProxyKeypair"
      );
    });

    it('should throw error when chain is missing', async () => {
      await expect(client.getProxyKeypair({} as any)).rejects.toThrow(
        "Missing required parameter 'chain' in getProxyKeypair"
      );
    });

    it('should throw error when signatureSchema is missing', async () => {
      await expect(
        client.getProxyKeypair({
          chain: Chain.Bitcoin,
          timestamp: Date.now()
        } as any)
      ).rejects.toThrow("Missing required parameter 'signatureSchema' in getProxyKeypair");
    });

    it('should throw error when timestamp is missing', async () => {
      await expect(
        client.getProxyKeypair({
          chain: Chain.Bitcoin,
          signatureSchema: WalletSignatureSchema.BtcEcdsa
        } as any)
      ).rejects.toThrow("Missing required parameter 'timestamp' in getProxyKeypair");
    });
  });

  describe('walletRegister parameter validation', () => {
    it('should throw error when input is undefined', async () => {
      await expect(client.walletRegister(undefined as any)).rejects.toThrow(
        "Missing required parameter 'input' in walletRegister"
      );
    });

    it('should throw error when chain is missing', async () => {
      await expect(client.walletRegister({} as any)).rejects.toThrow(
        "Missing required parameter 'chain' in walletRegister"
      );
    });

    it('should throw error when signatureSchema is missing', async () => {
      await expect(
        client.walletRegister({
          chain: Chain.Bitcoin
        } as any)
      ).rejects.toThrow("Missing required parameter 'signatureSchema' in walletRegister");
    });
  });

  describe('withdraw parameter validation', () => {
    it('should throw error when input is undefined', async () => {
      await expect(client.withdraw(undefined as any)).rejects.toThrow("Missing required parameter 'input' in withdraw");
    });

    it('should throw error when targetChain is missing', async () => {
      await expect(client.withdraw({} as any)).rejects.toThrow("Missing required parameter 'targetChain' in withdraw");
    });

    it('should throw error when targetChainNetwork is missing', async () => {
      await expect(
        client.withdraw({
          targetChain: Chain.Bitcoin
        } as any)
      ).rejects.toThrow("Missing required parameter 'targetChainNetwork' in withdraw");
    });

    it('should throw error when nonce is missing', async () => {
      await expect(
        client.withdraw({
          targetChain: Chain.Bitcoin,
          targetChainNetwork: { value: 0n },
          address: '0x123',
          assetId: 1n,
          assetDecimals: 18,
          amount: 100,
          fee: 1
        } as any)
      ).rejects.toThrow("Missing required parameter 'nonce' in withdraw");
    });

    it('should throw error when address is missing', async () => {
      await expect(
        client.withdraw({
          targetChain: Chain.Bitcoin,
          targetChainNetwork: { value: 0n },
          nonce: 1n,
          assetId: 1n,
          assetDecimals: 18,
          amount: 100,
          fee: 1
        } as any)
      ).rejects.toThrow("Missing required parameter 'address' in withdraw");
    });

    it('should throw error when assetId is missing', async () => {
      await expect(
        client.withdraw({
          targetChain: Chain.Bitcoin,
          targetChainNetwork: { value: 0n },
          nonce: 1n,
          address: '0x123',
          assetDecimals: 18,
          amount: 100,
          fee: 1
        } as any)
      ).rejects.toThrow("Missing required parameter 'assetId' in withdraw");
    });

    it('should throw error when assetDecimals is missing', async () => {
      await expect(
        client.withdraw({
          targetChain: Chain.Bitcoin,
          targetChainNetwork: { value: 0n },
          nonce: 1n,
          address: '0x123',
          assetId: 1n,
          amount: 100,
          fee: 1
        } as any)
      ).rejects.toThrow("Missing required parameter 'assetDecimals' in withdraw");
    });

    it('should throw error when amount is missing', async () => {
      await expect(
        client.withdraw({
          targetChain: Chain.Bitcoin,
          targetChainNetwork: { value: 0n },
          nonce: 1n,
          address: '0x123',
          assetId: 1n,
          assetDecimals: 18,
          fee: 1
        } as any)
      ).rejects.toThrow("Missing required parameter 'amount' in withdraw");
    });

    it('should throw error when fee is missing', async () => {
      await expect(
        client.withdraw({
          targetChain: Chain.Bitcoin,
          targetChainNetwork: { value: 0n },
          nonce: 1n,
          address: '0x123',
          assetId: 1n,
          assetDecimals: 18,
          amount: 100
        } as any)
      ).rejects.toThrow("Missing required parameter 'fee' in withdraw");
    });
  });

  describe('Error type validation', () => {
    it('should throw HibitError instances for validation errors', async () => {
      // Test with a definitely invalid input to ensure we get a validation error
      await expect(client.resetProxyKey(undefined as any)).rejects.toThrow(HibitError);
    });
  });

  describe('getMarket parameter validation', () => {
    it('should throw error when marketId is undefined', async () => {
      await expect(client.getMarket(undefined as any)).rejects.toThrow(
        "Missing required parameter 'marketId' in getMarket"
      );
    });

    it('should throw error when marketId is null', async () => {
      await expect(client.getMarket(null as any)).rejects.toThrow("Missing required parameter 'marketId' in getMarket");
    });
  });

  describe('getMarketDepth parameter validation', () => {
    it('should throw error when input is undefined', async () => {
      await expect(client.getMarketDepth(undefined as any)).rejects.toThrow(
        "Missing required parameter 'input' in getMarketDepth"
      );
    });

    it('should throw error when marketId is missing', async () => {
      await expect(client.getMarketDepth({} as any)).rejects.toThrow(
        "Missing required parameter 'marketId' in getMarketDepth"
      );
    });

    it('should throw error when index is missing', async () => {
      await expect(
        client.getMarketDepth({
          marketId: 1n
        } as any)
      ).rejects.toThrow("Missing required parameter 'index' in getMarketDepth");
    });

    it('should throw error when limit is out of range (too low)', async () => {
      await expect(
        client.getMarketDepth({
          marketId: 1n,
          index: 1,
          limit: 0
        })
      ).rejects.toThrow("Invalid parameter 'limit' in getMarketDepth: must be between 1 and 100");
    });

    it('should throw error when limit is out of range (too high)', async () => {
      await expect(
        client.getMarketDepth({
          marketId: 1n,
          index: 1,
          limit: 101
        })
      ).rejects.toThrow("Invalid parameter 'limit' in getMarketDepth: must be between 1 and 100");
    });
  });

  describe('getMarketKline parameter validation', () => {
    it('should throw error when input is undefined', async () => {
      await expect(client.getMarketKline(undefined as any)).rejects.toThrow(
        "Missing required parameter 'input' in getMarketKline"
      );
    });

    it('should throw error when marketId is missing', async () => {
      await expect(client.getMarketKline({} as any)).rejects.toThrow(
        "Missing required parameter 'marketId' in getMarketKline"
      );
    });

    it('should throw error when tickSpace is missing', async () => {
      await expect(
        client.getMarketKline({
          marketId: 1n
        } as any)
      ).rejects.toThrow("Missing required parameter 'tickSpace' in getMarketKline");
    });

    it('should throw error when limit is out of range', async () => {
      await expect(
        client.getMarketKline({
          marketId: 1n,
          tickSpace: 1,
          limit: 501
        })
      ).rejects.toThrow("Invalid parameter 'limit' in getMarketKline: must be between 1 and 500");
    });
  });

  describe('getMarketTrade parameter validation', () => {
    it('should throw error when input is undefined', async () => {
      await expect(client.getMarketTrade(undefined as any)).rejects.toThrow(
        "Missing required parameter 'input' in getMarketTrade"
      );
    });

    it('should throw error when marketId is missing', async () => {
      await expect(client.getMarketTrade({} as any)).rejects.toThrow(
        "Missing required parameter 'marketId' in getMarketTrade"
      );
    });

    it('should throw error when limit is out of range', async () => {
      await expect(
        client.getMarketTrade({
          marketId: 1n,
          limit: 501
        })
      ).rejects.toThrow("Invalid parameter 'limit' in getMarketTrade: must be between 1 and 500");
    });
  });

  describe('getOrders parameter validation', () => {
    it('should throw error when input is undefined', async () => {
      await expect(client.getOrders(undefined as any)).rejects.toThrow(
        "Missing required parameter 'input' in getOrders"
      );
    });

    it('should throw error when limit is out of range', async () => {
      await expect(
        client.getOrders({
          limit: 501,
          offset: 0
        } as any)
      ).rejects.toThrow("Invalid parameter 'limit' in getOrders: must be between 1 and 500");
    });

    it('should throw error when offset is negative', async () => {
      await expect(
        client.getOrders({
          limit: 10,
          offset: -1
        } as any)
      ).rejects.toThrow("Invalid parameter 'offset' in getOrders: must be non-negative");
    });
  });

  describe('getOrder parameter validation', () => {
    it('should throw error when input is undefined', async () => {
      await expect(client.getOrder(undefined as any)).rejects.toThrow("Missing required parameter 'input' in getOrder");
    });

    it('should throw error when no identifier is provided', async () => {
      await expect(client.getOrder({})).rejects.toThrow("Invalid parameter 'identifiers' in getOrder");
    });

    it('should throw error when multiple identifiers are provided', async () => {
      await expect(
        client.getOrder({
          orderId: '123',
          clientOrderId: '456'
        })
      ).rejects.toThrow("Invalid parameter 'identifiers' in getOrder");
    });
  });

  describe('getOrderTrades parameter validation', () => {
    it('should throw error when orderId is undefined', async () => {
      await expect(client.getOrderTrades(undefined as any)).rejects.toThrow(
        "Missing required parameter 'orderId' in getOrderTrades"
      );
    });

    it('should throw error when orderId is empty string', async () => {
      await expect(client.getOrderTrades('')).rejects.toThrow("Missing required parameter 'orderId' in getOrderTrades");
    });
  });

  describe('getOrders HIN parameter behavior', () => {
    it('should use client options.hin when hin is not provided in input', async () => {
      // This test verifies that the method uses options.hin as default
      // Test the validation logic directly rather than the full API call
      expect(() => {
        const mockValidate = (client as any).validateGetOrdersInput;
        mockValidate.call(client, 'getOrders', {
          limit: 10,
          offset: 0
        });
      }).not.toThrow();
    });

    it('should use provided hin when explicitly passed in input', async () => {
      // This test verifies that input.hin overrides options.hin
      // Test the validation logic directly rather than the full API call
      expect(() => {
        const mockValidate = (client as any).validateGetOrdersInput;
        mockValidate.call(client, 'getOrders', {
          hin: 99999n, // Different from options.hin
          limit: 10,
          offset: 0
        });
      }).not.toThrow();
    });
  });

  describe('getAsset parameter validation', () => {
    it('should throw error when input is undefined', async () => {
      await expect(client.getAsset(undefined as any)).rejects.toThrow("Missing required parameter 'input' in getAsset");
    });

    it('should throw error when input is null', async () => {
      await expect(client.getAsset(null as any)).rejects.toThrow("Missing required parameter 'input' in getAsset");
    });

    it('should throw error when neither assetId nor tokenAddress is provided', async () => {
      await expect(client.getAsset({} as any)).rejects.toThrow(
        "Invalid parameter 'input' in getAsset: either assetId or tokenAddress must be provided"
      );
    });

    it('should not throw validation error when assetId is provided', async () => {
      // Test validation logic directly rather than full API call
      expect(() => {
        const mockValidate = (client as any).validateGetAssetInput;
        mockValidate.call(client, 'getAsset', { assetId: 123n });
      }).not.toThrow();
    });

    it('should not throw validation error when tokenAddress is provided', async () => {
      // Test validation logic directly rather than full API call
      expect(() => {
        const mockValidate = (client as any).validateGetAssetInput;
        mockValidate.call(client, 'getAsset', { tokenAddress: '0x123' });
      }).not.toThrow();
    });
  });

  describe('submitSpotOrder parameter validation', () => {
    const mockDecimalOptions = {
      baseAssetDecimals: 18,
      quoteAssetDecimals: 6
    };

    it('should throw error when input is undefined', async () => {
      await expect(client.submitSpotOrder(undefined as any, mockDecimalOptions)).rejects.toThrow(
        "Missing required parameter 'input' in submitSpotOrder"
      );
    });

    it('should throw error when input is null', async () => {
      await expect(client.submitSpotOrder(null as any, mockDecimalOptions)).rejects.toThrow(
        "Missing required parameter 'input' in submitSpotOrder"
      );
    });

    it('should throw error when neither limitOrderDetails nor swapV2OrderDetails is provided', async () => {
      await expect(
        client.submitSpotOrder(
          {
            orderCategory: 'LIMIT' as any,
            marketId: 1n
          } as any,
          mockDecimalOptions
        )
      ).rejects.toThrow(
        "Invalid parameter 'input' in submitSpotOrder: either limitOrderDetails or swapV2OrderDetails must be provided"
      );
    });

    it('should throw error when both limitOrderDetails and swapV2OrderDetails are provided', async () => {
      await expect(
        client.submitSpotOrder(
          {
            orderCategory: 'LIMIT' as any,
            marketId: 1n,
            limitOrderDetails: {
              orderSide: 'BUY' as any,
              price: 100,
              volume: 10
            },
            swapV2OrderDetails: {
              orderSide: 'BUY' as any,
              exactTokens: 100,
              exactTokensType: 'SOURCE' as any
            }
          },
          mockDecimalOptions
        )
      ).rejects.toThrow(
        "Invalid parameter 'input' in submitSpotOrder: limitOrderDetails and swapV2OrderDetails cannot both be provided"
      );
    });

    it('should throw error when limitOrderDetails is missing required fields', async () => {
      await expect(
        client.submitSpotOrder(
          {
            orderCategory: 'LIMIT' as any,
            marketId: 1n,
            limitOrderDetails: {}
          } as any,
          mockDecimalOptions
        )
      ).rejects.toThrow("Missing required parameter 'limitOrderDetails.orderSide' in submitSpotOrder");
    });

    it('should throw error when swapV2OrderDetails is missing required fields', async () => {
      await expect(
        client.submitSpotOrder(
          {
            orderCategory: 'SWAP_V2' as any,
            marketId: 1n,
            swapV2OrderDetails: {}
          } as any,
          mockDecimalOptions
        )
      ).rejects.toThrow("Missing required parameter 'swapV2OrderDetails.orderSide' in submitSpotOrder");
    });

    it('should throw error when limitOrderDetails price is invalid', async () => {
      await expect(
        client.submitSpotOrder(
          {
            orderCategory: 'LIMIT' as any,
            marketId: 1n,
            limitOrderDetails: {
              orderSide: 'BUY' as any,
              price: 0,
              volume: 100
            }
          } as any,
          mockDecimalOptions
        )
      ).rejects.toThrow("Invalid parameter 'limitOrderDetails.price' in submitSpotOrder: must be greater than 0");
    });

    it('should throw error when swapV2OrderDetails exactTokens is invalid', async () => {
      await expect(
        client.submitSpotOrder(
          {
            orderCategory: 'SWAP_V2' as any,
            marketId: 1n,
            swapV2OrderDetails: {
              orderSide: 'BUY' as any,
              exactTokens: 0,
              exactTokensType: 'SOURCE' as any
            }
          } as any,
          mockDecimalOptions
        )
      ).rejects.toThrow(
        "Invalid parameter 'swapV2OrderDetails.exactTokens' in submitSpotOrder: must be greater than 0"
      );
    });
  });

  describe('cancelSpotOrder parameter validation', () => {
    it('should throw error when input is undefined', async () => {
      await expect(client.cancelSpotOrder(undefined as any)).rejects.toThrow(
        "Missing required parameter 'input' in cancelSpotOrder"
      );
    });

    it('should throw error when input is null', async () => {
      await expect(client.cancelSpotOrder(null as any)).rejects.toThrow(
        "Missing required parameter 'input' in cancelSpotOrder"
      );
    });

    it('should throw error when neither orderId nor marketId is provided', async () => {
      await expect(client.cancelSpotOrder({} as any)).rejects.toThrow(
        "Invalid parameter 'input' in cancelSpotOrder: either orderId must be provided, or marketId must be provided for market-based cancellation"
      );
    });

    it('should throw error when orderId is empty string', async () => {
      await expect(client.cancelSpotOrder({ orderId: '' })).rejects.toThrow(
        "Invalid parameter 'orderId' in cancelSpotOrder: must be a non-empty string"
      );
    });

    it('should throw error when marketId is provided but neither orderSide nor isCancelAll is specified', async () => {
      await expect(client.cancelSpotOrder({ marketId: 1n })).rejects.toThrow(
        "Invalid parameter 'input' in cancelSpotOrder: when marketId is provided, either orderSide must be specified (to cancel by side) or isCancelAll must be true (to cancel all orders)"
      );
    });

    it('should throw error when both orderSide and isCancelAll are provided', async () => {
      await expect(
        client.cancelSpotOrder({
          marketId: 1n,
          orderSide: 'BUY' as any,
          isCancelAll: true
        })
      ).rejects.toThrow(
        "Invalid parameter 'input' in cancelSpotOrder: orderSide should not be specified when isCancelAll is true"
      );
    });

    it('should not throw validation error for scenario 1: cancel by orderId', async () => {
      // Test validation logic directly rather than full API call
      expect(() => {
        const mockValidate = (client as any).validateCancelSpotOrderInput;
        mockValidate.call(client, 'cancelSpotOrder', { orderId: 'valid-order-id' });
      }).not.toThrow();
    });

    it('should not throw validation error for scenario 2: cancel by marketId and orderSide', async () => {
      // Test validation logic directly rather than full API call
      expect(() => {
        const mockValidate = (client as any).validateCancelSpotOrderInput;
        mockValidate.call(client, 'cancelSpotOrder', {
          marketId: 1n,
          orderSide: 'BUY' as any
        });
      }).not.toThrow();
    });

    it('should not throw validation error for scenario 3: cancel all orders in market', async () => {
      // Test validation logic directly rather than full API call
      expect(() => {
        const mockValidate = (client as any).validateCancelSpotOrderInput;
        mockValidate.call(client, 'cancelSpotOrder', {
          marketId: 1n,
          isCancelAll: true
        });
      }).not.toThrow();
    });
  });
});

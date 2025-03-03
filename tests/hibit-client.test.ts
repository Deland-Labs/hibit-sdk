import { beforeAll, describe, expect, it } from 'vitest';
import { hibitClient } from '../src/hibit-client';
import { DepthIndex, HibitNetwork, TickSpace } from '../src';
import BigNumber from 'bignumber.js';

const options = {
  network: HibitNetwork.Testnet,
  hin: 10000n,
  proxyKey: 'fa3e933f1788d7d56a20e078370f4c3b713ee0bcdb44392e4cfeaf524716d06a'
};

describe('Hibit Client Test', () => {
  beforeAll(() => {
    hibitClient.setOptions(options);
  });

  describe('Basic API Tests', () => {
    it('should get server timestamp', async () => {
      const timestamp = await hibitClient.getTimestamp();
      expect(timestamp).toBeTypeOf('number');
      expect(timestamp).toBeGreaterThan(0);
    });

    it('should get supported chains', async () => {
      const chains = await hibitClient.getChains();
      expect(chains).toBeInstanceOf(Array);
      expect(chains.length).toBeGreaterThan(0);
    });

    it('should get assets with pagination', async () => {
      const assets = await hibitClient.getAssets({
        limit: 10,
        offset: 0
      });
      expect(assets.items).toBeInstanceOf(Array);
      expect(assets.totalCount).toBeGreaterThan(0);
    });

    it('should get single asset', async () => {
      const asset = await hibitClient.getAsset(10001n);
      expect(asset).toBeInstanceOf(Object);
    });
  });

  describe('Market API Tests', () => {
    it('should get markets list', async () => {
      const markets = await hibitClient.getMarkets({
        limit: 10,
        offset: 0
      });
      expect(markets.items).toBeInstanceOf(Array);
      expect(markets.totalCount).toBeGreaterThan(0);
    });

    it('should get single market', async () => {
      const market = await hibitClient.getMarket(10000n);
      expect(market).toMatchObject({
        marketId: expect.any(BigInt),
        baseAssetId: expect.any(BigInt),
        quoteAssetId: expect.any(BigInt)
      });
    });

    it('should handle invalid market ID', async () => {
      await expect(hibitClient.getMarket(999999n)).rejects.toThrow();
    });

    it('should get market tickers', async () => {
      const tickers = await hibitClient.getMarketsTicker();
      expect(tickers).toBeInstanceOf(Array);
      expect(tickers.length).toBeGreaterThan(0);
    });

    it('should get market kline', async () => {
      const kline = await hibitClient.getMarketKline({
        marketId: 10008n,
        tickSpace: TickSpace.OneMinute,
        limit: 100
      });
      expect(kline.totalCount).toBeGreaterThan(0);
      expect(kline.items).toBeInstanceOf(Array);
    });

    it('should get swap info', async () => {
      const swapInfos = await hibitClient.getMarketsSwapInfo(10000n);
      expect(swapInfos).toBeInstanceOf(Array);
    });

    it('should get market depth', async () => {
      const depth = await hibitClient.getMarketDepth({
        index: DepthIndex.L3,
        marketId: 10000n,
        limit: 10
      });
      expect(depth.asks).toBeInstanceOf(Array);
      expect(depth.bids).toBeInstanceOf(Array);
    });

    it('should get market trade history', async () => {
      const trades = await hibitClient.getMarketTrade({
        marketId: 10006n,
        limit: 10,
        offset: 0
      });
      expect(trades.totalCount).toBeGreaterThan(0);
      expect(trades.items).toBeInstanceOf(Array);
    });
  });

  describe('Order API Tests', () => {
    //   it('should submit limit order', async () => {
    //     await expect(
    //       hibitClient.submitSpotOrder(
    //         {
    //           orderCategory: OrderCategory.LimitOrder,
    //           marketId: 10000n,
    //           limitOrderDetails: {
    //             orderSide: OrderSide.Ask,
    //             price: 100,
    //             volume: 100
    //           }
    //         },
    //         {
    //           baseAssetDecimals: 18,
    //           quoteAssetDecimals: 6
    //         }
    //       )
    //     ).resolves.not.toThrow();
    //   });

    it('should throw error when hin is not provided in options', async () => {
      await expect(hibitClient.getOrders({} as any)).rejects.toThrow();
    });

    it('should get orders list', async () => {
      const orders = await hibitClient.getOrders({
        hin: options.hin,
        limit: 10,
        offset: 0
      });
      expect(orders.items).toBeInstanceOf(Array);
    });

    //   it('should get order trades', async () => {
    //     const orderId = 'test order id';
    //     const trades = await hibitClient.getOrderTrades(orderId);
    //     expect(trades).toBeInstanceOf(Array);
    //   });

    //   it('should cancel order', async () => {
    //     await expect(
    //       hibitClient.cancelSpotOrder({
    //         marketId: 10000n,
    //         isCancelAll: true
    //       })
    //     ).resolves.not.toThrow();
    //   });
  });

  describe('Wallet API Tests', () => {
    it('should get wallet nonce', async () => {
      const nonce = await hibitClient.getNonce(options.hin);
      expect(nonce).toBeTypeOf('bigint');
      expect(nonce).toBeGreaterThanOrEqual(0n);
    });

    it('should get wallet balances', async () => {
      const balances = await hibitClient.getWalletBalances({
        hin: options.hin
      });
      expect(balances).toBeInstanceOf(Map);
      balances.forEach((balance) => {
        expect(balance).toBeInstanceOf(BigNumber);
      });
    });
  });
});

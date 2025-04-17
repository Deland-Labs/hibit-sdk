import { beforeAll, describe, expect, it } from 'vitest';
import { brokerClient } from '../src/broker-client';
import { HibitNetwork, ChainId, ChainAssetType, ChainNetwork, Chain } from '../src';

const options = {
  network: HibitNetwork.Testnet
};

describe('Broker Client Test', () => {
  beforeAll(() => {
    brokerClient.setOptions(options);
  });

  describe('Broker API Tests', () => {
    // it('should get payment address', async () => {
    //   const address = await brokerClient.getPaymentAddress({
    //     hin: 10005n,
    //     chainId: new ChainId(Chain.Kaspa, ChainNetwork.KaspaTestNet)
    //   });
    //
    //   expect(address).toBeTypeOf('string');
    //   expect(address).toMatch(/^0x[a-fA-F0-9]{40}$/); // Ethereum address format
    // });

    // it('should get quote', async () => {
    //   const quote = await brokerClient.quote({
    //     sourceChainId: new ChainId(Chain.Kaspa, ChainNetwork.KaspaTestNet),
    //     sourceAssetType: ChainAssetType.Native,
    //     sourceVolume: 20000000123n,
    //     targetAssetType: ChainAssetType.KRC20,
    //     targetAsset: 'kast'
    //   });

    //   expect(quote).toMatchObject({
    //     targetChainId: expect.any(Object),
    //     targetVolume: expect.any(BigInt),
    //     receiveVolume: expect.any(BigInt),
    //     gasFee: expect.any(BigInt),
    //     brokerFee: expect.any(BigInt),
    //     brokerFeeRate: expect.any(Number),
    //     priceImpact: expect.any(Number),
    //     slippage: expect.any(Number),
    //     targetVolumeInUsd: expect.any(Number)
    //   });
    // });

    // it('should get agent order', async () => {
    //   const orderId = 'test-order-id'; // Replace with valid test order ID
    //   const order = await brokerClient.getAgentOrder(orderId);
    //
    //   expect(order).toMatchObject({
    //     status: expect.any(String),
    //     txHash: expect.any(String)
    //   });
    //
    //   // Check that status is one of the valid values
    //   expect(['Pending', 'Success', 'Rejected']).toContain(order.status);
    // });

    it('should handle error when requesting non-existent order', async () => {
      const nonExistentOrderId = 'non-existent-order-id';
      await expect(brokerClient.getAgentOrder(nonExistentOrderId)).rejects.toThrow();
    });

    it('should handle API error responses correctly', async () => {
      // Force an error by omitting required parameters
      await expect(brokerClient.getPaymentAddress({} as any)).rejects.toThrow();
    });
  });
});

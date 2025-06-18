import { beforeAll, describe, expect, it } from 'vitest';
import { brokerClient, BrokerClient } from '../src/broker-client';
import { HibitNetwork, ChainId, ChainAssetType, ChainNetwork, Chain, SwapInput } from '../src';

const options = {
  network: HibitNetwork.Testnet,
  hin: 10007n
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
    //
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

  describe('Parameter Validation Tests', () => {
    describe('getPaymentAddress validation', () => {
      it('should throw error when input is null', async () => {
        await expect(brokerClient.getPaymentAddress(null as any)).rejects.toThrow(
          "Missing required parameter 'input' in getPaymentAddress"
        );
      });

      it('should throw error when chainId is missing', async () => {
        await expect(brokerClient.getPaymentAddress({} as any)).rejects.toThrow(
          "Missing required parameter 'chainId' in getPaymentAddress"
        );
      });

      it('should pass validation when hin is provided in input', () => {
        // Test just the validation logic, not the API call
        expect(() => {
          const client = new BrokerClient();
          client.setOptions({ network: HibitNetwork.Testnet, hin: 10005n });
          // This should not throw during validation
          const mockValidate = (client as any).validateGetPaymentAddressInput;
          mockValidate.call(client, 'getPaymentAddress', {
            hin: 123n,
            chainId: new ChainId(Chain.Kaspa, ChainNetwork.KaspaTestNet)
          });
        }).not.toThrow();
      });

      it('should pass validation when hin is not provided in input but exists in options', () => {
        // Test just the validation logic, not the API call
        expect(() => {
          const client = new BrokerClient();
          client.setOptions({ network: HibitNetwork.Testnet, hin: 10005n });
          // This should not throw during validation
          const mockValidate = (client as any).validateGetPaymentAddressInput;
          mockValidate.call(client, 'getPaymentAddress', {
            chainId: new ChainId(Chain.Kaspa, ChainNetwork.KaspaTestNet)
          });
        }).not.toThrow();
      });

      it('should throw error when hin is not in input and not in options', async () => {
        const clientWithoutHin = new BrokerClient();
        clientWithoutHin.setOptions({ network: HibitNetwork.Testnet });

        await expect(
          clientWithoutHin.getPaymentAddress({
            chainId: new ChainId(Chain.Kaspa, ChainNetwork.KaspaTestNet)
          })
        ).rejects.toThrow(
          "Missing required parameter 'hin (please set it in broker client options)' in getPaymentAddress"
        );
      });
    });

    describe('quote validation', () => {
      it('should throw error when input is null', async () => {
        await expect(brokerClient.quote(null as any)).rejects.toThrow("Missing required parameter 'input' in quote");
      });

      it('should throw error when sourceChainId is missing', async () => {
        await expect(
          brokerClient.quote({
            sourceAssetType: ChainAssetType.Native,
            sourceVolume: 1000n,
            targetAssetType: ChainAssetType.Native
          } as any)
        ).rejects.toThrow("Missing required parameter 'sourceChainId' in quote");
      });

      it('should throw error when sourceAssetType is missing', async () => {
        await expect(
          brokerClient.quote({
            sourceChainId: new ChainId(Chain.Kaspa, ChainNetwork.KaspaTestNet),
            sourceVolume: 1000n,
            targetAssetType: ChainAssetType.Native
          } as any)
        ).rejects.toThrow("Missing required parameter 'sourceAssetType' in quote");
      });

      it('should throw error when sourceVolume is missing', async () => {
        await expect(
          brokerClient.quote({
            sourceChainId: new ChainId(Chain.Kaspa, ChainNetwork.KaspaTestNet),
            sourceAssetType: ChainAssetType.Native,
            targetAssetType: ChainAssetType.Native
          } as any)
        ).rejects.toThrow("Missing required parameter 'sourceVolume' in quote");
      });

      it('should throw error when sourceVolume is zero or negative', async () => {
        await expect(
          brokerClient.quote({
            sourceChainId: new ChainId(Chain.Kaspa, ChainNetwork.KaspaTestNet),
            sourceAssetType: ChainAssetType.Native,
            sourceVolume: 0n,
            targetAssetType: ChainAssetType.Native
          })
        ).rejects.toThrow("Invalid parameter 'sourceVolume' in quote: must be greater than 0");

        await expect(
          brokerClient.quote({
            sourceChainId: new ChainId(Chain.Kaspa, ChainNetwork.KaspaTestNet),
            sourceAssetType: ChainAssetType.Native,
            sourceVolume: -100n,
            targetAssetType: ChainAssetType.Native
          })
        ).rejects.toThrow("Invalid parameter 'sourceVolume' in quote: must be greater than 0");
      });

      it('should throw error when targetAssetType is missing', async () => {
        await expect(
          brokerClient.quote({
            sourceChainId: new ChainId(Chain.Kaspa, ChainNetwork.KaspaTestNet),
            sourceAssetType: ChainAssetType.Native,
            sourceVolume: 1000n
          } as any)
        ).rejects.toThrow("Missing required parameter 'targetAssetType' in quote");
      });
    });

    describe('swap validation', () => {
      it('should throw error when input is null', async () => {
        await expect(brokerClient.swap(null as any)).rejects.toThrow("Missing required parameter 'input' in swap");
      });

      it('should throw error when required string fields are missing', async () => {
        const baseInput = {
          hin: 123n, // Add hin so we can test other required fields
          sourceChainId: new ChainId(Chain.Kaspa, ChainNetwork.KaspaTestNet),
          sourceVolume: 1000n,
          targetVolume: 900n,
          targetVolumeMin: 850n
        };

        await expect(brokerClient.swap({ ...baseInput } as any)).rejects.toThrow(
          "Missing required parameter 'sourceWalletPublicKey' in swap"
        );
        await expect(brokerClient.swap({ ...baseInput, sourceWalletPublicKey: 'test' } as any)).rejects.toThrow(
          "Missing required parameter 'sourceWalletAddress' in swap"
        );
        await expect(
          brokerClient.swap({ ...baseInput, sourceWalletPublicKey: 'test', sourceWalletAddress: 'test' } as any)
        ).rejects.toThrow("Missing required parameter 'txRef' in swap");
      });
      it('should pass validation when hin is provided in input', () => {
        // Test just the validation logic, not the API call
        expect(() => {
          const client = new BrokerClient();
          client.setOptions({ network: HibitNetwork.Testnet, hin: 10005n });

          const inputWithHin = new SwapInput({
            hin: 123n,
            sourceWalletPublicKey: 'test-key',
            sourceWalletAddress: 'test-address',
            txRef: 'test-tx',
            sourceChainId: new ChainId(Chain.Kaspa, ChainNetwork.KaspaTestNet),
            sourceVolume: 1000n,
            targetVolume: 900n,
            targetVolumeMin: 850n
          });

          // This should not throw during validation
          const mockValidate = (client as any).validateSwapInput;
          mockValidate.call(client, 'swap', inputWithHin);
        }).not.toThrow();
      });

      it('should throw error when hin is missing', async () => {
        // Since SwapInput constructor now requires hin, we test validation directly
        const client = new BrokerClient();
        client.setOptions({ network: HibitNetwork.Testnet });

        const inputWithHin = new SwapInput({
          hin: 0n, // Invalid hin value
          sourceWalletPublicKey: 'test-key',
          sourceWalletAddress: 'test-address',
          txRef: 'test-tx',
          sourceChainId: new ChainId(Chain.Kaspa, ChainNetwork.KaspaTestNet),
          sourceVolume: 1000n,
          targetVolume: 900n,
          targetVolumeMin: 850n
        });

        // Manually set hin to falsy value to test validation
        (inputWithHin as any).hin = null;

        await expect(client.swap(inputWithHin)).rejects.toThrow("Missing required parameter 'hin' in swap");
      });

      it('should throw error when volume fields are invalid', async () => {
        const baseParams = {
          hin: 123n,
          sourceWalletPublicKey: 'test-key',
          sourceWalletAddress: 'test-address',
          txRef: 'test-tx',
          sourceChainId: new ChainId(Chain.Kaspa, ChainNetwork.KaspaTestNet)
        };

        await expect(
          brokerClient.swap(
            new SwapInput({ ...baseParams, sourceVolume: 0n, targetVolume: 900n, targetVolumeMin: 850n })
          )
        ).rejects.toThrow("Invalid parameter 'sourceVolume' in swap: must be greater than 0");
        await expect(
          brokerClient.swap(
            new SwapInput({ ...baseParams, sourceVolume: 1000n, targetVolume: 0n, targetVolumeMin: 850n })
          )
        ).rejects.toThrow("Invalid parameter 'targetVolume' in swap: must be greater than 0");
        await expect(
          brokerClient.swap(
            new SwapInput({ ...baseParams, sourceVolume: 1000n, targetVolume: 900n, targetVolumeMin: 0n })
          )
        ).rejects.toThrow("Invalid parameter 'targetVolumeMin' in swap: must be greater than 0");
      });

      it('should throw error when targetVolumeMin is greater than targetVolume', async () => {
        await expect(
          brokerClient.swap(
            new SwapInput({
              hin: 123n,
              sourceWalletPublicKey: 'test-key',
              sourceWalletAddress: 'test-address',
              txRef: 'test-tx',
              sourceChainId: new ChainId(Chain.Kaspa, ChainNetwork.KaspaTestNet),
              sourceVolume: 1000n,
              targetVolume: 900n,
              targetVolumeMin: 950n // Greater than targetVolume
            })
          )
        ).rejects.toThrow("Invalid parameter 'targetVolumeMin' in swap: cannot be greater than targetVolume");
      });
    });

    describe('getAgentOrder validation', () => {
      it('should throw error when orderId is null or undefined', async () => {
        await expect(brokerClient.getAgentOrder(null as any)).rejects.toThrow(
          "Missing required parameter 'orderId' in getAgentOrder"
        );
        await expect(brokerClient.getAgentOrder(undefined as any)).rejects.toThrow(
          "Missing required parameter 'orderId' in getAgentOrder"
        );
      });

      it('should throw error when orderId is not a string', async () => {
        await expect(brokerClient.getAgentOrder(123 as any)).rejects.toThrow(
          "Invalid parameter 'orderId' in getAgentOrder: must be a string"
        );
        await expect(brokerClient.getAgentOrder({} as any)).rejects.toThrow(
          "Invalid parameter 'orderId' in getAgentOrder: must be a string"
        );
      });

      it('should throw error when orderId is empty string', async () => {
        await expect(brokerClient.getAgentOrder('')).rejects.toThrow(
          "Missing required parameter 'orderId' in getAgentOrder"
        );
        await expect(brokerClient.getAgentOrder('   ')).rejects.toThrow(
          "Invalid parameter 'orderId' in getAgentOrder: cannot be empty"
        );
      });
    });
  });
});

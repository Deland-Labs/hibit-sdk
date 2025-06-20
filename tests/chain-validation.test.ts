import { describe, expect, it } from 'vitest';
import { Chain, ChainNetwork, ChainId } from '../src';

describe('Chain', () => {
  describe('constructor', () => {
    it('should create valid chains with supported values', () => {
      // Test all supported chain values
      const supportedValues = [0n, 60n, 501n, 223n, 607n, 195n, 111111n];

      supportedValues.forEach((value) => {
        expect(() => new Chain(value)).not.toThrow();
        const chain = new Chain(value);
        expect(chain.value).toBe(value);
      });
    });

    it('should throw error for unsupported chain values', () => {
      const unsupportedValues = [1n, 2n, 999n, -1n, 100000n];

      unsupportedValues.forEach((value) => {
        expect(() => new Chain(value)).toThrow(
          `Unsupported chain value: ${value}. Supported chains: 0, 60, 501, 223, 607, 195, 111111`
        );
      });
    });

    it('should work with predefined static instances', () => {
      expect(() => Chain.Bitcoin).not.toThrow();
      expect(() => Chain.Ethereum).not.toThrow();
      expect(() => Chain.Solana).not.toThrow();
      expect(() => Chain.Dfinity).not.toThrow();
      expect(() => Chain.Ton).not.toThrow();
      expect(() => Chain.Tron).not.toThrow();
      expect(() => Chain.Kaspa).not.toThrow();
    });
  });

  describe('fromString', () => {
    it('should create valid chains from supported string values', () => {
      const validStrings = ['0', '60', '501', '223', '607', '195', '111111'];

      validStrings.forEach((str) => {
        expect(() => Chain.fromString(str)).not.toThrow();
        const chain = Chain.fromString(str);
        expect(chain?.value).toBe(BigInt(str));
      });
    });

    it('should throw error for unsupported string values', () => {
      const invalidStrings = ['1', '2', '999', '-1', '100000'];

      invalidStrings.forEach((str) => {
        expect(() => Chain.fromString(str)).toThrow();
      });
    });

    it('should return null for empty string', () => {
      expect(Chain.fromString('')).toBeNull();
    });
  });

  describe('methods', () => {
    it('should convert to string correctly', () => {
      const chain = Chain.Bitcoin;
      expect(chain.toString()).toBe('0');
    });

    it('should check equality correctly', () => {
      const chain1 = Chain.Bitcoin;
      const chain2 = Chain.Bitcoin;
      const chain3 = Chain.Ethereum;

      expect(chain1.equals(chain2)).toBe(true);
      expect(chain1.equals(chain3)).toBe(false);
    });

    it('should return correct name', () => {
      expect(Chain.Bitcoin.name).toBe('Bitcoin');
      expect(Chain.Ethereum.name).toBe('Ethereum');
      expect(Chain.Kaspa.name).toBe('Kaspa');
    });
  });
});

describe('ChainNetwork', () => {
  describe('constructor', () => {
    it('should create valid networks with supported values', () => {
      // Test some key supported network values
      const supportedValues = [
        0n,
        2n,
        3n, // Bitcoin and Kaspa networks
        0x1n,
        0x2n,
        0x3n,
        0x3e9n, // Special network values
        0xaa36a7n,
        0x38n,
        0x61n, // Some EVM networks
        0x2b6653dcn,
        0x94a9059en,
        0xcd8690dcn // TRON networks
      ];

      supportedValues.forEach((value) => {
        expect(() => new ChainNetwork(value)).not.toThrow();
        const network = new ChainNetwork(value);
        expect(network.value).toBe(value);
      });
    });

    it('should throw error for unsupported network values', () => {
      const unsupportedValues = [999n, -2n, 0xdeadbeefn, 123456789n];

      unsupportedValues.forEach((value) => {
        expect(() => new ChainNetwork(value)).toThrow(
          `Unsupported network value: ${value}. Please use one of the predefined ChainNetwork constants.`
        );
      });
    });

    it('should work with predefined static instances', () => {
      expect(() => ChainNetwork.BtcMainNet).not.toThrow();
      expect(() => ChainNetwork.EvmMainNet).not.toThrow();
      expect(() => ChainNetwork.KaspaMainNet).not.toThrow();
    });
  });

  describe('fromString', () => {
    it('should create valid networks from supported string values', () => {
      const validStrings = ['0', '1', '2', '3'];

      validStrings.forEach((str) => {
        expect(() => ChainNetwork.fromString(str)).not.toThrow();
        const network = ChainNetwork.fromString(str);
        expect(network?.value).toBe(BigInt(str));
      });
    });

    it('should throw error for unsupported string values', () => {
      const invalidStrings = ['-1', '999', '-2', '123456789'];

      invalidStrings.forEach((str) => {
        expect(() => ChainNetwork.fromString(str)).toThrow();
      });
    });

    it('should return null for empty string', () => {
      expect(ChainNetwork.fromString('')).toBeNull();
    });
  });

  describe('methods', () => {
    it('should convert to string correctly', () => {
      const network = ChainNetwork.BtcMainNet;
      expect(network.toString()).toBe('1');
    });

    it('should check equality correctly', () => {
      const network1 = ChainNetwork.BtcMainNet;
      const network2 = ChainNetwork.BtcMainNet;
      const network3 = ChainNetwork.BtcTestNet;

      expect(network1.equals(network2)).toBe(true);
      expect(network1.equals(network3)).toBe(false);
    });
  });
});

describe('ChainId', () => {
  describe('fromString', () => {
    it('should create valid ChainId from supported chain and network values', () => {
      const validChainIds = [
        '0_1', // Bitcoin BtcMainNet
        '60_1', // Ethereum EvmMainNet
        '111111_0' // Kaspa KaspaMainNet
      ];

      validChainIds.forEach((chainIdStr) => {
        expect(() => ChainId.fromString(chainIdStr)).not.toThrow();
        const chainId = ChainId.fromString(chainIdStr);
        expect(chainId.toString()).toBe(chainIdStr);
      });
    });

    it('should throw error for unsupported chain values in ChainId', () => {
      const invalidChainIds = [
        '999_1', // Unsupported chain
        '0_999', // Unsupported network
        '999_999' // Both unsupported
      ];

      invalidChainIds.forEach((chainIdStr) => {
        expect(() => ChainId.fromString(chainIdStr)).toThrow();
      });
    });

    it('should throw error for invalid ChainId format', () => {
      // Test specific cases that should throw
      expect(() => ChainId.fromString('invalid')).toThrow('Invalid chainId format');
      expect(() => ChainId.fromString('0')).toThrow('Invalid chainId format');
      expect(() => ChainId.fromString('_1')).toThrow('Invalid chainId format');
      expect(() => ChainId.fromString('0_')).toThrow('Invalid chainId format');

      // This one is tricky - it has multiple parts but should still be invalid
      expect(() => ChainId.fromString('0_1_2')).toThrow('Invalid chainId format');
    });
  });

  describe('methods', () => {
    it('should check equality correctly', () => {
      const chainId1 = ChainId.fromString('0_1');
      const chainId2 = ChainId.fromString('0_1');
      const chainId3 = ChainId.fromString('60_1');

      expect(chainId1.equals(chainId2)).toBe(true);
      expect(chainId1.equals(chainId3)).toBe(false);
    });
  });
});

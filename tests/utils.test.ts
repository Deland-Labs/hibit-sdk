import { describe, expect, it } from 'vitest';
import { toSmallestUnit, fromSmallestUnit } from '../src/utils';

describe('Utils Tests', () => {
  describe('toSmallestUnit', () => {
    it('should convert whole numbers correctly', () => {
      expect(toSmallestUnit(1, 18)).toBe(1000000000000000000n);
      expect(toSmallestUnit(100, 8)).toBe(10000000000n);
    });

    it('should convert decimal numbers correctly', () => {
      expect(toSmallestUnit(1.5, 18)).toBe(1500000000000000000n);
      expect(toSmallestUnit(0.1, 8)).toBe(10000000n);
    });

    it('should handle zero correctly', () => {
      expect(toSmallestUnit(0, 18)).toBe(0n);
      expect(toSmallestUnit(0, 8)).toBe(0n);
    });

    it('should handle small decimals correctly', () => {
      expect(toSmallestUnit(0.000000001, 18)).toBe(1000000000n);
      expect(toSmallestUnit(0.00000001, 8)).toBe(1n);
    });

    it('should handle large numbers correctly', () => {
      expect(toSmallestUnit(1234567, 18)).toBe(1234567000000000000000000n);
      expect(toSmallestUnit(9999999, 8)).toBe(999999900000000n);
    });
  });

  describe('fromSmallestUnit', () => {
    it('should convert whole numbers correctly', () => {
      expect(fromSmallestUnit(1000000000000000000n, 18)).toBe(1);
      expect(fromSmallestUnit(10000000000n, 8)).toBe(100);
    });

    it('should convert decimal numbers correctly', () => {
      expect(fromSmallestUnit(1500000000000000000n, 18)).toBe(1.5);
      expect(fromSmallestUnit(10000000n, 8)).toBe(0.1);
    });

    it('should handle zero correctly', () => {
      expect(fromSmallestUnit(0n, 18)).toBe(0);
      expect(fromSmallestUnit(0n, 8)).toBe(0);
    });

    it('should handle small decimals correctly', () => {
      expect(fromSmallestUnit(1000000000n, 18)).toBe(0.000000001);
      expect(fromSmallestUnit(1n, 8)).toBe(0.00000001);
    });

    it('should handle large numbers correctly', () => {
      expect(fromSmallestUnit(1234567000000000000000000n, 18)).toBe(1234567);
      expect(fromSmallestUnit(999999900000000n, 8)).toBe(9999999);
    });

    it('should accept string inputs', () => {
      expect(fromSmallestUnit('1000000000000000000', 18)).toBe(1);
      expect(fromSmallestUnit('1500000000000000000', 18)).toBe(1.5);
    });
  });
});

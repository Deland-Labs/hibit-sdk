import { describe, it, expect } from 'vitest';
import { sha256 } from '@noble/hashes/sha256';
import { Buffer } from 'buffer';

describe('SHA-256 Cross Verification', () => {
  it('should produce standard SHA-256 test vectors', () => {
    console.log('=== SHA-256 STANDARD TEST VECTORS ===');

    // Standard test vectors from NIST
    const testVectors = [
      {
        input: '',
        expected: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
      },
      {
        input: 'abc',
        expected: 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'
      },
      {
        input: 'message digest',
        expected: 'f7846f55cf23e14eebeab5b4e1550cad5b509e3348fbc4efa3a1413d393cb650'
      }
    ];

    for (const vector of testVectors) {
      const input = Buffer.from(vector.input, 'utf8');
      const hash = sha256(input);
      const hashHex = Buffer.from(hash).toString('hex');

      console.log(`Input: "${vector.input}"`);
      console.log(`Expected: ${vector.expected}`);
      console.log(`Actual:   ${hashHex}`);
      console.log(`Match: ${hashHex === vector.expected}`);
      console.log('');

      expect(hashHex).toBe(vector.expected);
    }
  });

  it('should hash the exact CBOR data from withdrawal test', () => {
    console.log('=== WITHDRAWAL CBOR DATA SHA-256 TEST ===');

    // Exact CBOR data from both frontend and backend tests
    const cborHex =
      '8500c241c9c2422776c242303958e77375626a6563743a207769746864726177616c0a77616c6c65745f69643a203078323737360a6e6f6e63653a203078333033390a7369676e5f736368656d613a2030783365390a646174612e636861696e3a20307833630a646174612e6e6574776f726b3a2030783134620a646174612e616464726573733a203078623630356365666165623666306338653739643533313535363239463439353734616235363039350a646174612e61737365745f69643a203078323732650a646174612e616d6f756e743a20313030303030303030303030303030303030300a646174612e6665653a2030';
    const cborBytes = Buffer.from(cborHex, 'hex');

    console.log(`CBOR data length: ${cborBytes.length} bytes`);
    console.log(`CBOR data (hex): ${cborHex}`);

    const hash = sha256(cborBytes);
    const hashHex = Buffer.from(hash).toString('hex');

    console.log(`Frontend SHA-256 hash: ${hashHex}`);
    console.log('');

    // Verify it's a valid 32-byte hash
    expect(hash.length).toBe(32);
    expect(hashHex.length).toBe(64);
    expect(hashHex).toMatch(/^[0-9a-f]{64}$/);

    // This is what the frontend should consistently produce
    console.log('This hash should match backend when using identical input data');
  });

  it('should demonstrate byte array consistency', () => {
    console.log('=== BYTE ARRAY CONSISTENCY TEST ===');

    const testString = 'Hello World';
    const buffer1 = Buffer.from(testString, 'utf8');
    const uint8array = new Uint8Array(buffer1);
    const buffer2 = Buffer.from(uint8array);

    console.log(`Original string: "${testString}"`);
    console.log(`Buffer1 hex: ${buffer1.toString('hex')}`);
    console.log(`Uint8Array bytes: [${Array.from(uint8array).join(', ')}]`);
    console.log(`Buffer2 hex: ${buffer2.toString('hex')}`);

    const hash1 = sha256(buffer1);
    const hash2 = sha256(uint8array);
    const hash3 = sha256(buffer2);

    const hex1 = Buffer.from(hash1).toString('hex');
    const hex2 = Buffer.from(hash2).toString('hex');
    const hex3 = Buffer.from(hash3).toString('hex');

    console.log(`Hash from Buffer: ${hex1}`);
    console.log(`Hash from Uint8Array: ${hex2}`);
    console.log(`Hash from Buffer2: ${hex3}`);
    console.log(`All hashes match: ${hex1 === hex2 && hex2 === hex3}`);

    expect(hex1).toBe(hex2);
    expect(hex2).toBe(hex3);
  });
});

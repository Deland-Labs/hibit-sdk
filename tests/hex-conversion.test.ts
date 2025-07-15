import { describe, it, expect } from 'vitest';
import { sha256 } from '@noble/hashes/sha256';
import { Buffer } from 'buffer';

describe('Hex Conversion Cross-Validation', () => {
  it('should verify frontend-to-backend message conversion', () => {
    console.log('=== HEX CONVERSION VALIDATION ===');

    // Simulating the frontend workflow
    const originalMessage = `subject: withdrawal
wallet_id: 0x2776
nonce: 0x3039
sign_schema: 0x3e9
data.chain: 0x3c
data.network: 0x14b
data.address: 0xb605cefaeb6f0c8e79d53155629F49574ab56095
data.asset_id: 0x272e
data.amount: 1000000000000000000
data.fee: 0`;

    console.log('Original message:');
    console.log(originalMessage);
    console.log('');

    // Step 1: Frontend converts string to bytes (as transaction payload)
    const frontendBytes = Buffer.from(originalMessage, 'utf8');
    console.log(`Frontend UTF-8 bytes length: ${frontendBytes.length}`);
    console.log(`Frontend UTF-8 bytes (hex): ${frontendBytes.toString('hex')}`);

    // Step 2: Frontend sends message as hex string to backend
    const hexMessage = frontendBytes.toString('hex');
    console.log(`Hex message sent to backend: ${hexMessage}`);

    // Step 3: Backend converts hex string back to bytes
    const backendBytes = Buffer.from(hexMessage, 'hex');
    console.log(`Backend decoded bytes length: ${backendBytes.length}`);
    console.log(`Backend decoded bytes (hex): ${backendBytes.toString('hex')}`);

    // Step 4: Verify the bytes are identical
    const bytesMatch = frontendBytes.toString('hex') === backendBytes.toString('hex');
    console.log(`Bytes match: ${bytesMatch}`);

    // Step 5: Calculate hashes
    const frontendHash = sha256(frontendBytes);
    const backendHash = sha256(backendBytes);

    const frontendHashHex = Buffer.from(frontendHash).toString('hex');
    const backendHashHex = Buffer.from(backendHash).toString('hex');

    console.log(`Frontend hash: ${frontendHashHex}`);
    console.log(`Backend hash:  ${backendHashHex}`);
    console.log(`Hashes match: ${frontendHashHex === backendHashHex}`);

    // Assertions
    expect(frontendBytes.toString('hex')).toBe(backendBytes.toString('hex'));
    expect(frontendHashHex).toBe(backendHashHex);

    console.log('');
    console.log('✅ Hex conversion validation passed - frontend and backend should produce identical hashes');
  });

  it('should test with the exact CBOR data from our tests', () => {
    console.log('=== CBOR HEX CONVERSION TEST ===');

    // The exact CBOR data from our withdrawal tests
    const cborHex =
      '8500c241c9c2422776c242303958e77375626a6563743a207769746864726177616c0a77616c6c65745f69643a203078323737360a6e6f6e63653a203078333033390a7369676e5f736368656d613a2030783365390a646174612e636861696e3a20307833630a646174612e6e6574776f726b3a2030783134620a646174612e616464726573733a203078623630356365666165623666306338653739643533313535363239463439353734616235363039350a646174612e61737365745f69643a203078323732650a646174612e616d6f756e743a20313030303030303030303030303030303030300a646174612e6665653a2030';

    // Simulate hex string being sent to backend
    const backendDecodedBytes = Buffer.from(cborHex, 'hex');

    console.log(`CBOR hex length: ${cborHex.length} characters`);
    console.log(`Decoded bytes length: ${backendDecodedBytes.length} bytes`);
    console.log(`Original CBOR hex: ${cborHex}`);
    console.log(`Re-encoded hex:    ${backendDecodedBytes.toString('hex')}`);
    console.log(`Hex round-trip successful: ${cborHex === backendDecodedBytes.toString('hex')}`);

    // Calculate hash
    const hash = sha256(backendDecodedBytes);
    const hashHex = Buffer.from(hash).toString('hex');
    console.log(`Hash of decoded CBOR: ${hashHex}`);
    console.log(`Expected test hash:   b45d31daf0ec5479926d9918eb711300f0a45c3244cef6fd17993517fc82d8ae`);
    console.log(
      `Matches expected:     ${hashHex === 'b45d31daf0ec5479926d9918eb711300f0a45c3244cef6fd17993517fc82d8ae'}`
    );

    expect(cborHex).toBe(backendDecodedBytes.toString('hex'));
    expect(hashHex).toBe('b45d31daf0ec5479926d9918eb711300f0a45c3244cef6fd17993517fc82d8ae');
  });
});

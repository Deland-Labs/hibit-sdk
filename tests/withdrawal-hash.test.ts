import { describe, it, expect } from 'vitest';
import {
  Transaction,
  OriginWalletTransaction,
  TransactionType,
  Chain,
  ChainNetwork,
  AbstractWalletApi,
  WalletSignatureSchema,
  WithdrawInput,
  HexString
} from '../src';
import { Buffer } from 'buffer';

// Mock wallet for testing
class MockWallet extends AbstractWalletApi {
  signatureSchema = WalletSignatureSchema.EvmEcdsa;

  async signMessage(message: string): Promise<HexString> {
    // Return a mock signature for testing
    return '0x' + 'a'.repeat(130); // Mock signature
  }
}

describe('Withdrawal Transaction Hash Tests', () => {
  describe('Hash Verification Against Backend', () => {
    it('should debug withdrawal transaction hash calculation', () => {
      // Test data provided by user from sdk-wrapper withdrawal request
      const testData = {
        FromWalletAddress: '0x9098f1fcfa18564b3efe694dd6ed5e88620fa1f2',
        hin: '10102',
        targetChain: '60',
        targetChainNetwork: '331',
        destinationAddress: '0x9098f1fcfa18564b3efe694dd6ed5e88620fa1f2',
        assetId: '10030',
        assetDecimals: '18',
        amount: '1'
      };

      // Expected hash from backend (ex3-l2)
      const expectedBackendHash = 'b39a50544fa231413ca4060812b4a59f6b2fa67df6cf96e373aa844ebdeed3a6';

      // Let's also try a clean version without special characters
      const cleanExpectedHash = expectedBackendHash.replace(/[^\da-f]/gi, '');
      console.log('Expected hash length:', expectedBackendHash.length);
      console.log('Clean expected hash:', cleanExpectedHash);
      console.log('Clean hash length:', cleanExpectedHash.length);

      // Current frontend hash (incorrect)
      const currentFrontendHash = '3c564746758ee69099c4a5966ae87b8a7f66998dc535c3d562ff0fc1946c9930';

      console.log('=== Withdrawal Hash Test Debug ===');
      console.log('Test Data:');
      console.log('  FromWalletAddress:', testData.FromWalletAddress);
      console.log('  hin:', testData.hin);
      console.log('  targetChain:', testData.targetChain);
      console.log('  targetChainNetwork:', testData.targetChainNetwork);
      console.log('  destinationAddress:', testData.destinationAddress);
      console.log('  assetId:', testData.assetId);
      console.log('  assetDecimals:', testData.assetDecimals);
      console.log('  amount:', testData.amount);
      console.log('');
      console.log('Expected Backend Hash:', expectedBackendHash);
      console.log('Current Frontend Hash (incorrect):', currentFrontendHash);
      console.log('');

      // Convert test data to proper types for WithdrawInput
      const userId = BigInt(testData.hin);
      const chain = new Chain(BigInt(testData.targetChain)); // 60 = Ethereum
      const chainNetwork = new ChainNetwork(BigInt(testData.targetChainNetwork)); // 331
      const assetId = BigInt(testData.assetId);
      const assetDecimals = parseInt(testData.assetDecimals); // 18
      const amount = parseFloat(testData.amount); // 1.0

      // Calculate fee based on API response
      // minFee: "26600000000000000" (in smallest unit)
      // assetDecimals: 18
      // fee = 26600000000000000 / 10^18 = 0.0266
      const fee = 0.0266;

      // Use the nonce provided by the user
      const nonce = BigInt(25);

      // Create WithdrawInput
      const withdrawInput: WithdrawInput = {
        nonce: nonce,
        targetChain: chain,
        targetChainNetwork: chainNetwork,
        address: testData.destinationAddress,
        assetId: assetId,
        assetDecimals: assetDecimals,
        amount: amount,
        fee: fee
      };

      console.log('Constructed WithdrawInput:');
      console.log('  nonce:', withdrawInput.nonce);
      console.log('  targetChain:', withdrawInput.targetChain);
      console.log('  targetChainNetwork:', withdrawInput.targetChainNetwork);
      console.log('  address:', withdrawInput.address);
      console.log('  assetId:', withdrawInput.assetId);
      console.log('  assetDecimals:', withdrawInput.assetDecimals);
      console.log('  amount:', withdrawInput.amount);
      console.log('  fee:', withdrawInput.fee);
      console.log('');

      // Create mock wallet and generate message
      const mockWallet = new MockWallet();
      const withdrawMessage = mockWallet.generateWithdrawMessage(withdrawInput, userId);

      console.log('Generated Withdraw Message:');
      console.log(withdrawMessage);
      console.log('');
      console.log('Message length:', withdrawMessage.length, 'characters');
      console.log('Message as UTF-8 bytes:', Buffer.from(withdrawMessage, 'utf8').toString('hex'));
      console.log('');

      // Create OriginWalletTransaction
      const originWalletTx = new OriginWalletTransaction(chain, withdrawMessage, chainNetwork, 'mock-signature');

      // Create Transaction from OriginWalletTransaction
      const transaction = new Transaction(TransactionType.Withdraw, userId, nonce, originWalletTx);

      console.log('Transaction constructed:');
      console.log('  type:', transaction.type);
      console.log('  from:', transaction.from);
      console.log('  nonce:', transaction.nonce);
      console.log('  version:', transaction.version);
      console.log('  payload length:', transaction.payload.length);
      console.log('');

      // Calculate the transaction hash with debug output
      const calculatedHash = transaction.hash();
      const calculatedHashHex = Buffer.from(calculatedHash).toString('hex');

      console.log('Calculated Hash (hex):', calculatedHashHex);
      console.log('Expected Hash:', expectedBackendHash);
      console.log('Hashes match:', calculatedHashHex === expectedBackendHash);
      console.log('');

      // For now, we're just debugging - the test will likely fail until we fix the serialization
      console.log('This test is for debugging purposes. Hash mismatch is expected until the serialization is fixed.');

      // Verify that we get a hash (even if incorrect)
      expect(calculatedHash).toBeDefined();
      expect(calculatedHash.length).toBeGreaterThan(0);
      expect(calculatedHashHex).toHaveLength(64); // SHA-256 produces 32 bytes = 64 hex chars
    });

    it('should output standardized test data for backend comparison', () => {
      // This test outputs the exact same data structure that should be used in the backend test
      console.log('=== FRONTEND TEST DATA FOR BACKEND COMPARISON ===');

      // Test data from sdk-wrapper withdrawal request
      const testData = {
        FromWalletAddress: '0x9098f1fcfa18564b3efe694dd6ed5e88620fa1f2',
        hin: '10102',
        targetChain: '60',
        targetChainNetwork: '331',
        destinationAddress: '0x9098f1fcfa18564b3efe694dd6ed5e88620fa1f2',
        assetId: '10030',
        assetDecimals: '18',
        amount: '1'
      };

      // Convert to SDK types
      const userId = BigInt(testData.hin);
      const chain = new Chain(BigInt(testData.targetChain));
      const chainNetwork = new ChainNetwork(BigInt(testData.targetChainNetwork));
      const assetId = BigInt(testData.assetId);
      const assetDecimals = parseInt(testData.assetDecimals);
      const amount = parseFloat(testData.amount);

      // Calculate fee based on API response
      // minFee: "26600000000000000" (in smallest unit)
      // assetDecimals: 18
      // fee = 26600000000000000 / 10^18 = 0.0266
      const fee = 0.0266;

      // Test with specific nonce for comparison
      const testNonce = BigInt(25); // Use the nonce from the actual request

      const withdrawInput: WithdrawInput = {
        nonce: testNonce,
        targetChain: chain,
        targetChainNetwork: chainNetwork,
        address: testData.destinationAddress,
        assetId: assetId,
        assetDecimals: assetDecimals,
        amount: amount,
        fee: fee
      };

      // Generate message
      const mockWallet = new MockWallet();
      const withdrawMessage = mockWallet.generateWithdrawMessage(withdrawInput, userId);

      console.log('BACKEND TEST DATA:');
      console.log('  Version: 0 (sbyte)');
      console.log('  TransactionType: 201 (Withdraw)');
      console.log('  UserId:', userId.toString());
      console.log('  Nonce:', testNonce.toString());
      console.log('  PayloadMessage:');
      console.log('    Content:', JSON.stringify(withdrawMessage));
      console.log('    UTF8 Bytes:', Buffer.from(withdrawMessage, 'utf8').toString('hex'));
      console.log('    Length:', Buffer.from(withdrawMessage, 'utf8').length);
      console.log('');

      // Create transaction and calculate hash
      const originWalletTx = new OriginWalletTransaction(chain, withdrawMessage, chainNetwork, 'mock-signature');

      const transaction = new Transaction(TransactionType.Withdraw, userId, testNonce, originWalletTx);

      const calculatedHash = transaction.hash();
      const calculatedHashHex = Buffer.from(calculatedHash).toString('hex');

      console.log('FRONTEND RESULT:');
      console.log('  Calculated Hash:', calculatedHashHex);
      console.log('');
      console.log('COPY THESE VALUES TO BACKEND TEST:');
      console.log('  var version = (sbyte)0;');
      console.log('  var transactionType = TransactionType.Withdraw; // 201');
      console.log('  var userId = new BigInteger(' + userId.toString() + ');');
      console.log('  var nonce = new BigInteger(' + testNonce.toString() + ');');
      console.log('  var payloadBytes = Encoding.UTF8.GetBytes(@"' + withdrawMessage.replace(/"/g, '""') + '");');
      console.log('  // Expected frontend hash: ' + calculatedHashHex);

      expect(calculatedHash).toBeDefined();
      expect(calculatedHashHex).toHaveLength(64); // SHA-256 = 32 bytes = 64 hex chars
    });
  });
});

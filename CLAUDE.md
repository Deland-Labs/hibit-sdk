# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `yarn dev` - Start development server with hot reload
- `yarn build` - Build the SDK library (includes type checking)
- `yarn build:example` - Build the example React application

### Testing

- `yarn test` - Run all tests using Vitest
- `yarn test tests/specific-file.test.ts` - Run a specific test file
- `npx vitest run -t "pattern"` - Run tests matching a pattern
- `npx vitest watch` - Run tests in watch mode

### Code Quality

- `yarn lint` - Run ESLint on TypeScript files
- `yarn type-check` - Run TypeScript type checking without emitting files
- `yarn format` - Format code using Prettier

## Architecture

### SDK Structure

The Hibit SDK provides client libraries for interacting with the Hibit DEX platform:

- **HibitClient** (`src/hibit-client.ts`) - Main trading client for market data, orders, and wallet operations
- **BrokerClient** (`src/broker-client.ts`) - Specialized client for broker operations and swaps
- **TransactionManager** (`src/tx-manager.ts`) - Handles transaction creation and signing
- **Keypair** (`src/Keypair.ts`) - Manages cryptographic operations using secp256k1

### Key Concepts

1. **Two-Level Authentication**:

   - L1 (Wallet-level): Original wallet signatures for critical operations (registration, withdrawals)
   - L2 (Proxy Key): Fast transaction signing for trading operations

2. **Wallet Abstraction**:

   - Interface `IWalletApi` with implementations for MetaMask and KasWare wallets
   - Located in `src/wallet-api/`

3. **CBOR Encoding**:

   - Transactions are CBOR-encoded for efficient serialization
   - Uses decorators for automatic encoding/decoding in `src/encoder/`

4. **Auto-generated Clients**:
   - `src/openapi/` - Generated from Hibit API OpenAPI spec
   - `src/broker-api/` - Generated from Broker API OpenAPI spec

### Type System

- All public methods have TypeScript types and input validation
- Core types in `src/types/`
- Enums define constants like `OrderStatus`, `OrderType`, `TransactionType`

### Testing

- Uses Vitest framework with 10-second timeout per test
- All tests located in `/tests/` directory
- Tests use standard Vitest patterns: `describe()`, `it()`, `expect()`

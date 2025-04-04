# Hibit SDK

[![Tests](https://github.com/Deland-Labs/hibit-sdk/actions/workflows/test.yml/badge.svg)](https://github.com/Deland-Labs/hibit-sdk/actions)
[![Build](https://github.com/Deland-Labs/hibit-sdk/actions/workflows/build.yml/badge.svg)](https://github.com/Deland-Labs/hibit-sdk/actions)
[![npm version](https://badge.fury.io/js/@delandlabs%2Fhibit-sdk.svg?q=1)](https://www.npmjs.com/package/@delandlabs/hibit-sdk)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](LICENSE)

[API Documentation](https://docs.hibit.app/api)

## Introduction

Hibit SDK is a comprehensive toolkit designed for developers to interact seamlessly with the Hibit platform, which includes a Decentralized Exchange (DEX) and blockchain functionalities. This SDK provides a robust set of tools and utilities to facilitate the integration and management of various features offered by the Hibit platform, such as market data retrieval, order management, wallet operations, and more. With Hibit SDK, developers can build sophisticated applications that leverage the full potential of the Hibit ecosystem, ensuring secure, efficient, and scalable interactions with the decentralized exchange and blockchain services.

## Installation

To install the Hibit SDK, you can use npm or yarn:

```sh
npm install @delandlabs/hibit-sdk
```

or

```sh
yarn add @delandlabs/hibit-sdk
```

## Usage

Here is how to use the Hibit SDK with TypeScript:

```typescript
import { hibitClient, HibitNetwork } from '@delandlabs/hibit-sdk';
const options = {
  network: HibitNetwork.Testnet,
  walletId: 10000n,
  privateKey: 'fa3e933f1788d7d56a20e078370f4c3b713ee0bcdb44392e4cfeaf524716d06a'
};

hibitClient.setOptions(options);
const timestamp = await hibitClient.getTimestamp();
```

## Examples

For more examples, please refer to the [examples](./example).

## Contributing

We welcome contributions to the Hibit SDK. Please see our [contributing guidelines](CONTRIBUTING.md) for more information.

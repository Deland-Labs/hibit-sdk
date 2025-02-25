# HiBit SDK

[![Tests](https://img.shields.io/github/workflow/status/hibit-dev/hibit-sdk/tests?label=tests)](https://github.com/hibit-dev/hibit-sdk/actions)
[![Build](https://img.shields.io/github/workflow/status/hibit-dev/hibit-sdk/build)](https://github.com/hibit-dev/hibit-sdk/actions)
[![npm version](https://img.shields.io/npm/v/hibit-sdk)](https://www.npmjs.com/package/hibit-sdk)

[API Documentation](https://docs.hibit.app/api)

## Introduction

HiBit SDK is a comprehensive toolkit for interacting with the HiBit platform. This SDK provides a simple and intuitive way to leverage HiBit's features in your applications.

## Installation

To install the HiBit SDK, you can use npm or yarn:

```sh
npm install hibit-sdk
```

or

```sh
yarn add hibit-sdk
```

## Usage

Here is how to use the HiBit SDK with TypeScript:

```typescript
import { hibitClient } from '../src/hibit-client';
const options = {
  baseUrl: 'https://alphaopenapi.hibit.app',
  walletId: 10000n,
  privateKey: 'fa3e933f1788d7d56a20e078370f4c3b713ee0bcdb44392e4cfeaf524716d06a'
};

hibitClient.setOptions(options);
const timestamp = await hibitClient.getTimestamp();
```

## Contributing

We welcome contributions to the HiBit SDK. Please see our [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.

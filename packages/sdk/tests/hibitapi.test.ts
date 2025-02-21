import { test } from 'vitest';
import { hibitApi } from '../src/hibitApi';
import BigNumber from 'bignumber.js';
import { OrderCategory, OrderSide } from '../src';

hibitApi.setOptions({
  baseUrl: 'https://alphaopenapi.ex3.one',
  walletId: BigNumber(10000),
  privateKey: 'fa3e933f1788d7d56a20e078370f4c3b713ee0bcdb44392e4cfeaf524716d06a'
});

test('get nonce', async () => {
  const nonce = await hibitApi.getNonce();
  console.log('Nonce: ', nonce);
});

test('get balance', async () => {
  const balance = await hibitApi.getWalletBalance();
  console.log('Balance: ', balance);
});

test('submit order', async () => {
  await hibitApi.submitSpotOrder({
    orderCategory: OrderCategory.LimitOrder,
    marketId: BigNumber(10000),
    limitOrderDetails: {
      orderSide: OrderSide.Ask,
      price: BigNumber(100),
      volume: BigNumber(100)
    }
  });
});

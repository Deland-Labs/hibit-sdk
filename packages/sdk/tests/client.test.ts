import { test } from 'vitest';
import { client } from '../src/client/client.gen';
import { getV1Timestamp } from '../src/client/sdk.gen';

client.setConfig({
  baseUrl: 'https://alphaopenapi.ex3.one'
});

test('validate derivation path', async () => {
  const t = await getV1Timestamp({});
  console.log(t.data?.data);
});

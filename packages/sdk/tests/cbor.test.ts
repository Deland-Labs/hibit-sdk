import BigNumber from 'bignumber.js';
import { cborIndex } from '../src/cbor.metadata';
import { CborDataFactory } from '../src/cbor';
import { test, expect } from 'vitest';

class TestCborData {
  @cborIndex(0)
  public value1: BigNumber;
  @cborIndex(1)
  public value2: string;
}

class ParentCborData {
  @cborIndex(0)
  public value1: TestCborData;
  @cborIndex(1)
  public value2: string;
}

class ParentCborData2 {
  @cborIndex(0)
  public value1?: TestCborData;
  @cborIndex(1)
  public value2: string;
}

class TrasnsferTxItem {
  constructor(userId: BigNumber, value: BigNumber) {
    this.userId = userId;
    this.value = value;
  }

  @cborIndex(0)
  public userId: BigNumber;
  @cborIndex(1)
  public value: BigNumber;
}

class TrasnsferTx {
  @cborIndex(0)
  public assetId: BigNumber;
  @cborIndex(1)
  public items: TrasnsferTxItem[];
  @cborIndex(2)
  public memo: Uint8Array;
}

test('ParentCborData', () => {
  const testCborData = new TestCborData();
  testCborData.value2 = '100.26';
  testCborData.value1 = new BigNumber(10026);
  const parentData = new ParentCborData();
  parentData.value1 = testCborData;
  parentData.value2 = 'value2';
  let result = CborDataFactory.createCborArray(parentData);
  expect(result).toEqual([[new BigNumber(10026), '100.26'], 'value2']);
});

test('null data', () => {
  const parentData = new ParentCborData2();
  parentData.value2 = 'value2';
  let result = CborDataFactory.createCborArray(parentData);
  expect(result).toEqual([null, 'value2']);
});

test('encode with byte[]', () => {
  const tx = new TrasnsferTx();
  tx.assetId = BigNumber('10000');
  tx.items = [new TrasnsferTxItem(BigNumber('9999'), new BigNumber(1234))];
  tx.memo = new Uint8Array([255, 0, 255]);
  let result = CborDataFactory.Encode(tx);
  expect(result.toString('hex')).toEqual('83c24227108182c242270fc24204d243ff00ff');
});

import BigNumber from 'bignumber.js';
import { test, expect, it } from 'vitest';
import { cborIndex } from '../src/encoder/decorator';
import { TxPayloadEncoder } from '../src/encoder';

class TestCborData {
  @cborIndex(0)
  //@ts-ignore
  public value1: BigNumber;
  @cborIndex(1)
  //@ts-ignore
  public value2: string;
}

class TestCborDataWithBigInt {
  @cborIndex(0)
  //@ts-ignore
  public value1: bigint;
  @cborIndex(1)
  //@ts-ignore
  public value2: string;
}

class TestCborDataWithNumber {
  @cborIndex(0)
  //@ts-ignore
  public value1: number;
  @cborIndex(1)
  //@ts-ignore
  public value2: string;
}

class ParentCborData {
  @cborIndex(0)
  //@ts-ignore
  public value1: TestCborData;
  @cborIndex(1)
  //@ts-ignore
  public value2: string;
}

class ParentCborData2 {
  @cborIndex(0)
  public value1?: TestCborData;
  @cborIndex(1)
  //@ts-ignore
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

class TransferTx {
  @cborIndex(0)
  //@ts-ignore
  public assetId: BigNumber;
  @cborIndex(1)
  //@ts-ignore
  public items: TrasnsferTxItem[];
  @cborIndex(2)
  //@ts-ignore
  public memo: Uint8Array;
}

test('ParentCborData', () => {
  const testCborData = new TestCborData();
  testCborData.value2 = '100.26';
  testCborData.value1 = new BigNumber(10026);
  const parentData = new ParentCborData();
  parentData.value1 = testCborData;
  parentData.value2 = 'value2';
  let result = TxPayloadEncoder['createCborArray'](parentData);
  expect(result).toEqual([[new BigNumber(10026), '100.26'], 'value2']);
});

it('Test number & bigint & big number', () => {
  const testCborDataWithBigInt = new TestCborDataWithBigInt();
  testCborDataWithBigInt.value2 = 'value2';
  testCborDataWithBigInt.value1 = BigInt(10026);
  const resultOfBigInt = TxPayloadEncoder.encode(testCborDataWithBigInt);

  const testCborDataWithNumber = new TestCborDataWithNumber();
  testCborDataWithNumber.value2 = 'value2';
  testCborDataWithNumber.value1 = 10026;
  const resultOfNumber = TxPayloadEncoder.encode(testCborDataWithNumber);

  const testCborDataWithBigNumber = new TestCborData();
  testCborDataWithBigNumber.value1 = new BigNumber(10026);
  testCborDataWithBigNumber.value2 = 'value2';
  let resultOfBigNumber = TxPayloadEncoder.encode(testCborDataWithBigNumber);

  expect(resultOfBigInt).deep.equals(resultOfNumber);
  expect(resultOfBigInt).deep.equals(resultOfBigNumber);
});

test('null data', () => {
  const parentData = new ParentCborData2();
  parentData.value2 = 'value2';
  let result = TxPayloadEncoder['createCborArray'](parentData);
  expect(result).toEqual([null, 'value2']);
});

test('encode with byte[]', () => {
  const tx = new TransferTx();
  tx.assetId = BigNumber('10000');
  tx.items = [new TrasnsferTxItem(BigNumber('9999'), new BigNumber(1234))];
  tx.memo = new Uint8Array([255, 0, 255]);
  let result = TxPayloadEncoder.encode(tx);
  expect(result.toString('hex')).toEqual('83c24227108182c242270fc24204d243ff00ff');
});

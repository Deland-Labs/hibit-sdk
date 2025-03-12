import BigNumber from 'bignumber.js';
//@ts-ignore
import cbor from 'borc';
import { expect, it, describe } from 'vitest';
import { cborIndex } from '../src/encoder/decorator';
import { TxPayloadEncoder } from '../src/encoder';
import { Transaction, TransactionType } from '../src';
import { Buffer } from 'buffer';

class TestCborData {
  @cborIndex(0)
  //@ts-expect-error value1 has no initializer
  public value1: BigNumber;
  @cborIndex(1)
  //@ts-expect-error value2 has no initializer
  public value2: string;
}

class TestCborDataWithBigInt {
  @cborIndex(0)
  //@ts-expect-error value1 has no initializer
  public value1: bigint;
  @cborIndex(1)
  //@ts-expect-error value2 has no initializer
  public value2: string;
}

class TestCborDataWithNumber {
  @cborIndex(0)
  //@ts-expect-error value1 has no initializer
  public value1: number;
  @cborIndex(1)
  //@ts-expect-error value2 has no initializer
  public value2: string;
}

class ParentCborData {
  @cborIndex(0)
  //@ts-expect-error value1 has no initializer
  public value1: TestCborData;

  @cborIndex(1)
  //@ts-expect-error value2 has no initializer
  public value2: string;
}

class ParentCborData2 {
  @cborIndex(0)
  public value1?: TestCborData;

  @cborIndex(1)
  //@ts-expect-error value2 has no initializer
  public value2: string;
}

class TransferTxItem {
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
  //@ts-expect-error assetId has no initializer
  public assetId: BigNumber;
  @cborIndex(1)
  //@ts-expect-error items has no initializer
  public items: TransferTxItem[];
  @cborIndex(2)
  //@ts-expect-error memo has no initializer
  public memo: Uint8Array;
}

describe('Test cbor encoder', () => {
  it('serde with parent data should correct', () => {
    const testCborData = new TestCborData();
    testCborData.value2 = '100.26';
    testCborData.value1 = new BigNumber(10026);
    const parentData = new ParentCborData();
    parentData.value1 = testCborData;
    parentData.value2 = 'value2';
    const result = TxPayloadEncoder['createCborArray'](parentData);
    expect(result).toEqual([[new BigNumber(10026), '100.26'], 'value2']);
  });

  it('serde with bigint and number should correct', () => {
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
    const resultOfBigNumber = TxPayloadEncoder.encode(testCborDataWithBigNumber);

    expect(resultOfBigInt).deep.equals(resultOfNumber);
    expect(resultOfBigInt).deep.equals(resultOfBigNumber);
  });

  it('serde null value should correct', () => {
    const parentData = new ParentCborData2();
    parentData.value2 = 'value2';
    const result = TxPayloadEncoder['createCborArray'](parentData);
    expect(result).toEqual([null, 'value2']);
  });

  it('serde byte array should correct', () => {
    const tx = new TransferTx();
    tx.assetId = BigNumber('10000');
    tx.items = [new TransferTxItem(BigNumber('9999'), new BigNumber(1234))];
    tx.memo = new Uint8Array([255, 0, 255]);
    const result = TxPayloadEncoder.encode(tx);
    expect(result.toString('hex')).toEqual('83c24227108182c242270fc24204d243ff00ff');
  });
});

describe('Test tx cbor serde', () => {
  it('should encode and decode tx correctly', () => {
    const exceptData = '8500c241c8c2423039c24103417b';
    const selfEncodedTxDataBytes = cbor.encode([
      0,
      BigNumber(TransactionType.Deposit),
      BigNumber(12345),
      BigNumber(3),
      Buffer.from([123])
    ]);

    expect(exceptData).toEqual(selfEncodedTxDataBytes.toString('hex'));
  });

  it('tx hash should correct', () => {
    const exceptedHash = '316ab1839817c15b46367c319817b5c37c21c31b8f18303a32a026ebbb1a9906';
    const tx = new Transaction(TransactionType.Deposit, 1000000n, 1n, new Uint8Array([1, 2, 3]));
    const hash = tx.hash();
    expect(Buffer.from(hash).toString('hex')).toEqual(exceptedHash);
  });
});

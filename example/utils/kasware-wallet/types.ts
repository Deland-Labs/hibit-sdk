export interface GetBalanceResponse {
  confirmed: number;
  unconfirmed: number;
  total: number;
}

export type GetKrc20BalanceResponse = Array<{
  balance: string;
  dec: string;
  locked: string;
  opScoreMod: string;
  tick: string;
}>;

export type TransferKaspaResponse = {
  id: string;
  version: number;
  inputs: Array<{
    transactionId: string;
    index: number;
    sequence: string;
    sigOpCount: number;
    signatureScript: string;
    utxo: {
      address: string;
      amount: string;
      scriptPublicKey: string;
      blockDaaScore: string;
      isCoinbase: boolean;
    };
  }>;
  outputs: Array<{
    value: string;
    scriptPublicKey: string;
  }>;
  subnetworkId: string;
  lockTime: string;
  gas: string;
  mass: string;
  payload: string;
};

export type TransferKrc20Response = {
  commitId: string;
  revealId: string;
  commitTxStr: string;
  revealTxStr: string;
};

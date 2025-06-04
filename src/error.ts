export class HibitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'HibitError';
  }

  static throwBadRequestError(apiName: string, code?: number, message?: string | null) {
    if (code !== undefined && message !== undefined)
      throw new HibitError(`Bad request: ${apiName} failed with code ${code} and message ${message}`);

    if (code !== undefined) throw new HibitError(`Bad request: ${apiName} failed with code ${code}`);

    if (message !== undefined) throw new HibitError(`Bad request: ${apiName} failed with message ${message}`);

    throw new HibitError(`Bad request: ${apiName}`);
  }

  static throwInvalidResponseError(apiName: string) {
    throw new HibitError(`Invalid response: ${apiName}`);
  }

  static throwRequiredHINError(apiName: string) {
    throw new HibitError(`HIN is required: ${apiName}`);
  }
  static throwRequiredPrivKeyError(apiName: string) {
    throw new HibitError(`Private key is required: ${apiName}`);
  }
  static throwRequiredWalletApiError(apiName: string) {
    throw new HibitError(`Wallet API is required: ${apiName}`);
  }
}

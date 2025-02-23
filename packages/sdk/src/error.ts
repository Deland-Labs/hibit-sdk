export class HibitClientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'HibitApiError';
  }

  static throwBadRequestError(apiName: string, code?: number, message?: string | null) {
    if (code !== undefined && message !== undefined)
      throw new HibitClientError(`Bad request: ${apiName} failed with code ${code} and message ${message}`);

    if (code !== undefined) throw new HibitClientError(`Bad request: ${apiName} failed with code ${code}`);

    if (message !== undefined) throw new HibitClientError(`Bad request: ${apiName} failed with message ${message}`);

    throw new HibitClientError(`Bad request: ${apiName}`);
  }

  static throwInvalidResponseError(apiName: string) {
    throw new HibitClientError(`Invalid response: ${apiName}`);
  }

  static throwRequiredPrivKeyError(apiName: string) {
    throw new HibitClientError(`Private key is required: ${apiName}`);
  }
}

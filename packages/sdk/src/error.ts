class HibitApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'HibitApiError';
  }

  static throwBadRequestError(apiName: string, code?: number, message?: string | null) {
    if (code !== undefined && message !== undefined)
      throw new HibitApiError(`Bad request: ${apiName} failed with code ${code} and message ${message}`);

    if (code !== undefined) throw new HibitApiError(`Bad request: ${apiName} failed with code ${code}`);

    if (message !== undefined) throw new HibitApiError(`Bad request: ${apiName} failed with message ${message}`);

    throw new HibitApiError(`Bad request: ${apiName}`);
  }

  static throwInvalidResponseError(apiName: string) {
    throw new HibitApiError(`Invalid response: ${apiName}`);
  }
}

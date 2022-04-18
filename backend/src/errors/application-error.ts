export class ApplicationError extends Error {
  constructor(
    public code = 'APPLICATION_ERROR',
    public message = 'Application Error.',
    public statusCode = 400
  ) {
    super(message)
  }

  static create(message: string) {
    const code = undefined

    return new ApplicationError(code, message);
  }
}

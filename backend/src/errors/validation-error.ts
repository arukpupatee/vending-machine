import { ApplicationError } from './application-error';

export class ValidationError extends ApplicationError {
  constructor(message: string) {
    super(message);

    this.message = message;
  }

  static create(message: string) {
    return new ValidationError(message);
  }
}

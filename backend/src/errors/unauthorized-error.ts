import { ApplicationError } from './application-error';

export class UnauthorizedError extends ApplicationError {
  code = 'UNAUTHORIZED';
  message = 'Unauthorized.';
  statusCode = 401;
}

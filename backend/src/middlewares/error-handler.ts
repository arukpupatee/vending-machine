import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../errors/application-error';

export const errorHandler: ErrorRequestHandler = async (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof ApplicationError) {
    return handleApplicationError(error, request, response);
  }

  console.error(error);

  switch (process.env.NODE_ENV) {
    case 'production':
      return handleProductionError(error, request, response);
    default:
      return handleDevelopmentError(error, request, response);
  }
};

function handleApplicationError(error: ApplicationError, request: Request, response: Response) {
  const { code, message, statusCode } = error;

  return response.status(statusCode).json({ code, message });
}

function handleProductionError(error: Error, request: Request, response: Response) {
  return response.status(500).json({ error: 'Something happens, Please try again later.' });
}

async function handleDevelopmentError(error: Error, request: Request, response: Response) {
  const { message } = error;

  return response.status(500).json({ message });
}

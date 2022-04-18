import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ApplicationConfiguration } from '../config/application-configuration';
import { UnauthorizedError } from '../errors/unauthorized-error';
import { isExistValue } from '../utils/helpers';

export const apiKeyHandler: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  const apiKey = (req.headers['api-key'] as string) ?? '';

  if (!isExistValue(apiKey)) return next(new UnauthorizedError());
  if (ApplicationConfiguration.instance.apiKey !== apiKey) return next(new UnauthorizedError());

  return next();
};

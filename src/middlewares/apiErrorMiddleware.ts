import { NextFunction, Request, Response } from 'express';
import ApiErrors from '../utils/ApiErrors';

function errorHandlerMiddleware(
  err: ApiErrors,
  req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (err instanceof ApiErrors) {
    res.status(err.code).json(err.message);
    return;
  }

  res.status(500).json('Oops! Something went wrong!');
}

export default errorHandlerMiddleware;
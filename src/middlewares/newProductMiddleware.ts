import { NextFunction, Request, Response } from 'express';
import ApiErrors from '../utils/ApiErrors';

export const validateNewProductName = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name) {
    next(ApiErrors.badRequest({ message: '"name" is required' }));
    return;
  }

  if (typeof name !== 'string') {
    next(ApiErrors.unprocessableEntity({ message: '"name" must be a string' }));
    return;
  }
  if (name.length < 3) {
    next(ApiErrors
      .unprocessableEntity({ message: '"name" length must be at least 3 characters long' }));
    return;
  }

  next();
};

export const validateNewProductAmount = async (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;

  if (!amount) {
    next(ApiErrors.badRequest({ message: '"amount" is required' }));
    return;
  }

  if (typeof amount !== 'string') {
    next(ApiErrors.unprocessableEntity({ message: '"amount" must be a string' }));
    return;
  }
  if (amount.length < 3) {
    next(ApiErrors
      .unprocessableEntity({ message: '"amount" length must be at least 3 characters long' }));
    return;
  }

  next();
};
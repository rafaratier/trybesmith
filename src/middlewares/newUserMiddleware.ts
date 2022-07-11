import { NextFunction, Request, Response } from 'express';
import ApiErrors from '../utils/ApiErrors';

export const validateNewUserName = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;

  if (!username) {
    next(ApiErrors.badRequest({ message: '"username" is required' }));
    return;
  }

  if (typeof username !== 'string') {
    next(ApiErrors.unprocessableEntity({ message: '"username" must be a string' }));
    return;
  }
  if (username.length < 3) {
    next(ApiErrors
      .unprocessableEntity({ message: '"username" length must be at least 3 characters long' }));
    return;
  }

  next();
};

export const validateNewUserClass = async (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;

  if (!classe) {
    next(ApiErrors.badRequest({ message: '"classe" is required' }));
    return;
  }

  if (typeof classe !== 'string') {
    next(ApiErrors.unprocessableEntity({ message: '"classe" must be a string' }));
    return;
  }
  if (classe.length < 3) {
    next(ApiErrors
      .unprocessableEntity({ message: '"classe" length must be at least 3 characters long' }));
    return;
  }

  next();
};

export const validateNewUserLevel = async (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;

  if (!level) {
    next(ApiErrors.badRequest({ message: '"level" is required' }));
    return;
  }

  if (typeof level !== 'number') {
    next(ApiErrors.unprocessableEntity({ message: '"level" must be a number' }));
    return;
  }
  if (level < 1) {
    next(ApiErrors
      .unprocessableEntity({ message: '"level" length must be greater than or equal to 1' }));
    return;
  }

  next();
};

export const validateNewUserPwd = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    next(ApiErrors.badRequest({ message: '"password" is required' }));
    return;
  }

  if (typeof password !== 'string') {
    next(ApiErrors.unprocessableEntity({ message: '"password" must be a string' }));
    return;
  }
  if (password.length < 8) {
    next(ApiErrors
      .unprocessableEntity({ message: '"password" length must be at least 8 characters long' }));
    return;
  }

  next();
};
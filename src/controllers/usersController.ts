import { Request, Response } from 'express';
import usersService from '../services/usersService';

const createUser = async (req: Request, res: Response) => {
  const token = await usersService.createUser(req.body);

  res.status(201).json({ token });
};

export default { createUser };
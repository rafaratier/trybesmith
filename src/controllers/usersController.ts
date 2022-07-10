import { Request, Response } from 'express';
import usersService from '../services/usersService';

const create = async (req: Request, res: Response) => {
  const newUserToken = await usersService.createUser(req.body);

  res.status(201).json({ newUserToken });
};
export default { create };
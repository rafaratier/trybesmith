import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const getAllOrders = async (req: Request, res: Response) => {
  const allOrders = await ordersService.getAllOrders();

  return res.status(200).json(allOrders);
};

export default {
  getAllOrders,
};
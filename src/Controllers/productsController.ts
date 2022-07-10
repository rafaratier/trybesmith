import { Request, Response } from 'express';
import productsService from '../Services/productsService';

const getAllProducts = async (req: Request, res: Response) => {
  const allProducts = await productsService.getAllProducts();

  if (allProducts.length === 0) {
    res.status(204).json({ message: 'No products registered' });
  }

  res.status(200).json(allProducts);
};

export default {
  getAllProducts,
};
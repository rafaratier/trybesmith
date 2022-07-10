import { Request, Response } from 'express';
import IProduct from '../interfaces/productsInterface';
import productsService from '../services/productsService';

const getAllProducts = async (req: Request, res: Response) => {
  const allProducts = await productsService.getAllProducts();

  if (allProducts.length === 0) {
    res.status(204).json({ message: 'No products registered' });
  }

  res.status(200).json(allProducts);
};

const createProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;

  const newProduct: IProduct = await productsService.createProduct(name, amount);

  res.status(201).json(newProduct);
};
export default {
  getAllProducts,
  createProduct,
};
import IProduct from '../interfaces/productsInterface';
import productsModel from '../models/productsModel';

const getAllProducts = async (): Promise<IProduct[]> => {
  const allProducts = await productsModel.getAllProducts();

  return allProducts;
};

export default {
  getAllProducts,
};
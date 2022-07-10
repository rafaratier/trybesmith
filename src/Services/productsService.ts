import IProduct from '../Interfaces/productsInterface';
import productsModel from '../Models/productsModel';

const getAllProducts = async (): Promise<IProduct[]> => {
  const allProducts = await productsModel.getAllProducts();

  return allProducts;
};

export default {
  getAllProducts,
};
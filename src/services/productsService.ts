import IProduct from '../interfaces/productsInterface';
import productsModel from '../models/productsModel';

const getAllProducts = async (): Promise<IProduct[]> => {
  const allProducts = await productsModel.getAllProducts();

  return allProducts;
};

const createProduct = async (name: string, amount: string): Promise<IProduct> => {
  const { insertId } = await productsModel.createProduct(name, amount);

  const newProduct: IProduct = {
    id: insertId,
    name,
    amount,
    orderId: null,
  };

  return newProduct;
};

export default {
  getAllProducts,
  createProduct,
};
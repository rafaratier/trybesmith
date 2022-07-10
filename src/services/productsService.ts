import IProduct from '../interfaces/productsInterface';
import productsModel from '../models/productsModel';

const getAllProducts = async (): Promise<IProduct[]> => {
  const allProducts = await productsModel.getAllProducts();

  return allProducts;
};

const createProduct = async (product: IProduct): Promise<IProduct> => {
  const { insertId } = await productsModel.createProduct(product);

  const newProduct: IProduct = {
    id: insertId,
    name: product.name,
    amount: product.amount,
    orderId: null,
  };

  return newProduct;
};

export default {
  getAllProducts,
  createProduct,
};
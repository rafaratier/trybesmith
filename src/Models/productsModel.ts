import connection from './connection';
import IProduct from '../Interfaces/productsInterface';

const getAllProduct = async (): Promise<IProduct[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return products as IProduct[];
};

export default {
  getAllProduct,
};
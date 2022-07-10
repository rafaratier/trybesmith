import connection from './connection';
import IProduct from '../interfaces/productsInterface';

const getAllProducts = async (): Promise<IProduct[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return products as IProduct[];
};

export default {
  getAllProducts,
};
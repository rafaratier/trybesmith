import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/productsInterface';

const getAllProducts = async (): Promise<IProduct[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return products as IProduct[];
};

const createProduct = async (name: string, amount: string): Promise<ResultSetHeader> => {
  const [newProductDetails] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return newProductDetails;
};
export default {
  getAllProducts,
  createProduct,
};
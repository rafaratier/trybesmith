import IOrder from '../interfaces/orderInterface';
import connection from './connection';

const getAllOrders = async (): Promise<IOrder[]> => {
  const [allOrders] = await connection
    .execute(
      'SELECT * FROM Trybesmith.Orders',
    );

  return allOrders as IOrder[];
};

export default {
  getAllOrders,
};
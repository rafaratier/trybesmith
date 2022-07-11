import IOrder from '../interfaces/orderInterface';
import connection from './connection';

const getAllOrders = async (): Promise<IOrder[]> => {
  const [allOrders] = await connection
    .execute(
      `SELECT o.id, o.userId, p.id AS productIds
                FROM Trybesmith.Orders AS o
                JOIN Trybesmith.Products AS p
                ON o.id = p.orderId`,
    );

  return allOrders as IOrder[];
};

export default {
  getAllOrders,
};
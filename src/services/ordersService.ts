import IOrder from '../interfaces/orderInterface';
import ordersModel from '../models/ordersModel';
import productsModel from '../models/productsModel';

const getAllOrders = async (): Promise<IOrder[]> => {
  const allOrders = await ordersModel.getAllOrders();

  const allProducts = await productsModel.getAllProducts();

  // combineOrdersAndProducts combines an order to all products sold with that order Id
  const orders = allOrders.map((order) => {
    const combinedOrdersAndProducts = {
      ...order,
      productsIds: allProducts
        .filter((product) => product.orderId === order.id) // checks if an product was sold on that order Id
        .map((product) => product.id),
    };
    return combinedOrdersAndProducts;
  });

  return orders;
};

export default {
  getAllOrders,
};
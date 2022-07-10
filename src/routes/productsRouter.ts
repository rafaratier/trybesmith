import express from 'express';
import productsController from '../controllers/productsController';
import {
  validateNewProductAmount,
  validateNewProductName,
} from '../middlewares/newProductMiddleware';

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.post(
  '/',
  validateNewProductName,
  validateNewProductAmount,
  productsController.createProduct,
);

export default productsRouter;
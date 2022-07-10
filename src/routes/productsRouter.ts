import express from 'express';
import productsController from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);

export default productsRouter;
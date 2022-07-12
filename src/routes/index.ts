import express from 'express';
import ordersRouter from './ordersRouter';
import productsRouter from './productsRouter';
import usersRouter from './usersRouter';

const router = express.Router();

router.use('/products', productsRouter);

router.use('/users', usersRouter);

router.use('/orders', ordersRouter);

export default router;
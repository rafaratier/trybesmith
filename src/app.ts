import express from 'express';
import errorHandlerMiddleware from './middlewares/apiErrorMiddleware';
import router from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.use(errorHandlerMiddleware);

export default app;

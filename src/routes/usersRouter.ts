import express from 'express';
import usersService from '../services/usersService';

const usersRouter = express.Router();

usersRouter.post('/', usersService.createUser);

export default usersRouter;
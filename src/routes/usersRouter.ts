import express from 'express';
import usersController from '../controllers/usersController';
import {
  validateNewUserClass,
  validateNewUserLevel,
  validateNewUserName,
  validateNewUserPwd } from '../middlewares/newUserMiddleware';

const usersRouter = express.Router();

usersRouter.post(
  '/',
  validateNewUserName,
  validateNewUserClass,
  validateNewUserLevel,
  validateNewUserPwd,
  usersController.createUser,
);

export default usersRouter;
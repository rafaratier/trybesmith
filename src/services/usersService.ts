import IUser from '../interfaces/userInterface';
import usersModel from '../models/usersModel';
import tokenHandler from '../utils/tokenHandler';

const createUser = async (user: IUser) => {
  const { username, classe, level } = user;
  const { insertId } = await usersModel.createUser(user);

  return tokenHandler.generateJWTToken({
    id: insertId,
    username,
    classe,
    level,
  });
};

export default {
  createUser,
};
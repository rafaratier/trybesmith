import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/userInterface';
import connection from './connection';

const createUser = async (user: IUser): Promise<ResultSetHeader> => {
  const { username, classe, level, password } = user;
  const [newUserDetails] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );

  return newUserDetails;
};

export default {
  createUser,
};
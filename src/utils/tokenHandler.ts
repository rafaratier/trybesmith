import jwt, { Secret } from 'jsonwebtoken';

const generateJWTToken = <T> (info: T) => {
  const JWT_SECRET: Secret = 'tokenShouldNotBeHere';

  return jwt.sign(
    { info },
    JWT_SECRET,
    {
      expiresIn: '7d',
      algorithm: 'HS256',
    },
  );
};

export default {
  generateJWTToken,
};
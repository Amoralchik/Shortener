import * as dotenv from 'dotenv';
dotenv.config();

export const entityRepository = {
  url: 'URL_REPOSITORY',
  user: 'USER_REPOSITORY',
};

export const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;
export const jwtSecret = process.env.JWT_SECRET;

export const hostUrl = 'http://localhost:3000/';

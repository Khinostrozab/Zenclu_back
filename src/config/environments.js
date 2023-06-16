import dotenv from 'dotenv';

dotenv.config();

export const env = {
  PORT: process.env.PORT,
  MONGO_DB: process.env.MONGO_DB,
  MONGO_DB_HOST: process.env.MONGO_DB_HOST,
  MONGO_DB_USER: process.env.MONGO_DB_USER,
  MONGO_DB_PASSWORD: process.env.MONGO_DB_PASSWORD,
  MONGO_DB_PORT: process.env.MONGO_DB_PORT,
};

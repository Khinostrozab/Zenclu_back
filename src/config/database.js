import mongoose from 'mongoose';
import { env } from './environments';

const uri = `mongodb://${env.MONGO_DB_USER}:${env.MONGO_DB_PASSWORD}@${env.MONGO_DB_HOST}:${env.MONGO_DB_PORT}/${env.MONGO_DB}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options);

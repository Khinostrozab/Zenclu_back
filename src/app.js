/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/routers';
import { errorResponseMiddleware } from './middleware';
import './config/database';

function buildApp() {
  const app = express();
  app
    .use(
      cors({
        origin: '*',
      })
    )
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(logger('dev'))
    .use(express.json())
    .use('/api', router)
    .use(errorResponseMiddleware);
  return app;
}

export default buildApp;

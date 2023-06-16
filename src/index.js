import { env } from './config/environments';
import buildApp from './app';

const express = buildApp();

express.listen(env.PORT);

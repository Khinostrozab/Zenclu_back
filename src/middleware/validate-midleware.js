import createHttpError from 'http-errors';
import { promisseHandler } from '../utils/promisse-handler';

const validateMidleware = (schema) => async (req, res, next) => {
  const { body } = req;
  const options = {
    abortEarly: false,
  };
  const [error] = await promisseHandler(schema.validate(body, options));
  if (error) {
    return next(new createHttpError.BadRequest(error.errors));
  }
  return next();
};

export default validateMidleware;

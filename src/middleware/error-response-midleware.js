import { ErrorResponse } from '../models/dto';

const errorResponseMiddleware = (error, req, res, next) => {
  const errorResponse = new ErrorResponse({
    status: error.status,
    message: error.message,
  });
  res.set('Content-Type', 'application/problem+json');
  res.status(errorResponse.status).json(errorResponse);
  return next();
};

export default errorResponseMiddleware;

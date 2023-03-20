import { NextFunction, Request, Response } from 'express';

class ErrorHadnler extends Error {
  status: number;

  message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

function errorMiddleware(
  error: ErrorHadnler,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  let status: number = error.status || 500;
  let message: string = error.message || 'Something went wrong';
  if (error.name === 'CastError') {
    status = 400;
    message = 'Wrong Id';
  }
  if (error.name === 'MongoError') {
    status = 400;
    message = 'This email is already in use';
  }
  response.status(status).send({
    status,
    message
  });
  next();
}
export default errorMiddleware;

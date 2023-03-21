/* eslint-disable no-unsafe-optional-chaining */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

declare module 'express' {
  interface Request {
    user?: any;
    token?: string | undefined;
  }
}

export const authMiddleware = (_: Request, res: Response, next: NextFunction) => {
  const token = _.headers.authorization?.split(' ')[1];
  if (!token) {
    next(new Error('Please, provide a token'));
  }
  try {
    const user = jwt.verify(token || '', process.env.JWT_SECRET);
    _.token = token;
    _.user = user;
    next();
  } catch (err) {
    next(new Error('Please, provide a token'));
  }
};

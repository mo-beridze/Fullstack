import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

declare module 'express' {
  interface Request {
    user?: any;
    token?: string | undefined;
  }
}

export const authMiddleware = (_: Request, res: Response, next: NextFunction) => {
  const [typeToken, token] = _.headers.authorization?.split(' ');
  if (!token) {
    next(new Error('Please, provide a token'));
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    _.token = token;
    _.user = user;
    next();
  } catch (err) {
    next(new Error('Please, provide a token'));
  }
};

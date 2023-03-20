import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IUserSignIn } from '../types/auth.type';
import { ValidationError } from './error';

function userValidation(req: Request, res: Response, next: NextFunction) {
  const postSchema = Joi.object<IUserSignIn>({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    avatar: Joi.string().min(3).required()
  });
  const validationResult = postSchema.validate(req.body);
  if (validationResult.error) {
    next(new ValidationError(validationResult.error.message));
  }
  next();
}

export default userValidation;

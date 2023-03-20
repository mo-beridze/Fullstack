import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { Todo } from '../types/todos.type';
import { ValidationError } from './error';

function validatePost(req: Request, res: Response, next: NextFunction) {
  const postSchema = Joi.object<Todo>({
    topic: Joi.string().min(3).max(15).required(),
    description: Joi.string().min(3).max(500).required(),
    search: Joi.string().min(1).max(10),
    status: Joi.string().valid('completed', 'pending')
  });
  const validationResult = postSchema.validate(req.body);
  if (validationResult.error) {
    next(new ValidationError(validationResult.error.message));
  }
  next();
}

export default validatePost;

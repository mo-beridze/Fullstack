import { Router } from 'express';
import { asyncWrapper } from '../../middleware/asyncWrapper';
import validationMiddleware from '../../middleware/addPost.validation';
import todoController from '../../controllers/todo.controller';
import { authMiddleware } from '../../middleware/auth.middleware';

const todosRouter: Router = Router();

todosRouter.use(authMiddleware);

todosRouter.get('/', asyncWrapper(todoController.getAllTodo.bind(todoController)));
todosRouter.get('/:id', asyncWrapper(todoController.getTodoById.bind(todoController)));
todosRouter.post(
  '/',
  validationMiddleware,
  asyncWrapper(todoController.addTodo.bind(todoController))
);
todosRouter.put(
  '/:id',
  validationMiddleware,
  asyncWrapper(todoController.changeTodo.bind(todoController))
);
todosRouter.delete('/:id', asyncWrapper(todoController.deleteTodo.bind(todoController)));

export default todosRouter;

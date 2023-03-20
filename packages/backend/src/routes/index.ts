import { Application } from 'express';
import errorMiddleware from '../middleware/errorMiddleware';
import authRouter from './api/auth.route';

import todosRouter from './api/todos.route';

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get('/', (_req, res) => {
      res.send('API Running');
    });
    this.app.use('/api/todos', todosRouter);
    this.app.use('/api/auth', authRouter);
    this.app.use(errorMiddleware);
  }
}

export default AppRouter;

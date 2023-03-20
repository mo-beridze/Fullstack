import { Request } from 'express';
import { Todo } from '../types/todos.type';
import TodoService from '../services/todo.service';

declare module 'express' {
  interface Request {
    user?: any;
  }
}
// controllers
export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(_: Request): Promise<Todo[] | null> {
    const { _id: userId } = _.user;
    const { status, search, page, size } = _.query as {
      status: string;
      search: string;
      page: string;
      size: string;
    };
    const todos = await this.todoService.findAllTodos(userId, page, size, status, search);
    return todos;
  }

  async getTodoById(_: Request) {
    const { id: todoId } = _.params;
    const { _id: userId } = _.user;
    const todos = await this.todoService.getTodoById(todoId, userId);
    return todos;
  }

  async addTodo(_: Request) {
    const { _id: userId } = _.user;
    const { topic, description, search, status } = _.body;
    const todo = await this.todoService.addTodo({ topic, description, search, status }, userId);
    return todo;
  }

  async deleteTodo(_: Request) {
    const { id: todoId } = _.params;
    const todo = await this.todoService.deleteTodoById(todoId);
    return todo;
  }

  async changeTodo(_: Request) {
    const { id: todoId } = _.params;
    const { _id: userId } = _.user;
    const { topic, description, status } = _.body;
    const todo = await this.todoService.changeTodoById(
      todoId,
      { topic, description, status },
      userId
    );
    return todo;
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;

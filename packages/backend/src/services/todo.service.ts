/* eslint-disable radix */
import Todos from '../models/Todos';
import { Todo } from '../types/todos.type';

export default class TodoService {
  async findAllTodos(userId: string, page: string, size: string, status?: string, search?: string) {
    const skip = (parseInt(page) - 1) * parseInt(size);
    const todos = Todos.find({ userId });

    if (status) {
      todos.find({ status });
    }
    if (search) {
      todos.find({ $text: { $search: `"${search}"` } });
    }
    const count = (await todos).length;
    const finalTodos = await todos.skip(skip).limit(parseInt(size));
    return { todos: finalTodos, count };
  }

  async getTodoById(todoId: string, userId: string) {
    const todos = await Todos.findOne({ _id: todoId, userId });
    return todos;
  }

  async addTodo(input: Todo, userId: string) {
    const { topic, description, search, status } = input;
    const todo = new Todos({ topic, description, search, status, userId });
    return todo.save();
  }

  async changeTodoById(todoId: string, input: Todo, userId: string) {
    const { topic, description, status } = input;
    await Todos.findOneAndUpdate({ _id: todoId }, { topic, description, status, userId });
  }

  async deleteTodoById(todoId: string) {
    await Todos.findOneAndRemove({ _id: todoId });
  }
}

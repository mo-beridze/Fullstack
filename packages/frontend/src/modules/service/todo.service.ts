import HttpService from './http';
import Todo from '../common/types/todo.types';

export default class TodoService extends HttpService {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }
  // status: string, search: string

  getTodos(status?: string, search?: string, page?: string, size?: string) {
    // todo?search=test&status=completed
    if (status && search) {
      return this.get({
        url: `todos?page=${page}&size=${size}&searh=${search}&status=${status}`
      });
    }
    if (status) {
      return this.get({
        url: `todos?page=${page}&size=${size}&status=${status}`
      });
    }
    if (search) {
      return this.get({
        url: `todos?page=${page}&size=${size}&search=${search}`
      });
    }
    return this.get({
      url: `todos?page=${page}&size=${size}`
    });
  }

  getTodoById(id: string) {
    return this.get({
      url: `todos/${id}`
    });
  }

  deleteTodoById(id: string) {
    return this.delete({
      url: `todos/${id}`
    });
  }

  postTodo(todo: Omit<Todo, '_id'>) {
    return this.post({
      url: 'todos/',
      data: todo
    });
  }

  putTodo(id: string, todo: Omit<Todo, '_id'>) {
    return this.put({
      url: `todos/${id}`,
      data: todo
    });
  }
}

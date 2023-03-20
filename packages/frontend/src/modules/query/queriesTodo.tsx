import { useMutation, useQuery, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import Todo from '../common/types/todo.types';
import TodoService from '../service/todo.service';

const todoService = new TodoService();

export const useFetchTodos = (status?: string, search?: string, page?: string, size?: string) =>
  useQuery<{ todos: Todo[]; count: number }, Error>({
    queryKey: [QUERY_KEYS.TODOS, status, search, page, size],
    queryFn: () => todoService.getTodos(status, search, page, size)
  });

export const useFetchTodoById = (id: string) =>
  useQuery<Todo, Error>('todo', () => todoService.getTodoById(id));

export const useDeleteTodoById = () => {
  const queryClient = useQueryClient();
  return useMutation((id: string) => todoService.deleteTodoById(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.TODOS);
    }
  });
};

export const usePostTodo = () => {
  const queryClient = useQueryClient();
  return useMutation((todo: Omit<Todo, '_id'>) => todoService.postTodo(todo), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
    }
  });
};

export const usePutTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (todo: Todo) =>
      todoService.putTodo(
        todo._id,
        Object.keys(todo).reduce(
          // @ts-ignore
          (acc, key) => ({ ...acc, ...(key === '_id' ? {} : { [key]: todo[key] }) }),
          {}
        )
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.TODOS);
      }
    }
  );
};

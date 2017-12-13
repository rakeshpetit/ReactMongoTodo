export const ADD_TODO = 'ADD_TODO';
export const ADD_TODOS = 'ADD_TODOS';
export const SEARCH_TODO = 'SEARCH_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO';

import callApi from '../../util/apiCaller';

export function addTodo(todo) {
  console.log('addTodo called', todo);
  return {
    type: ADD_TODO,
    todo
  };
}

export function addTodos(todos) {
  console.log('addTodos called', todos);
  return {
    type: ADD_TODOS,
    todos
  };
}

export function addTodoRequest(todo) {
  console.log('addTodoRequest called', todo.id);
  return (dispatch) => {
    return callApi('todos', 'post', {
      todo: {
        name: todo.name,
        completed: todo.completed,
        id: todo.id
      },
    }).then(
      res => {
        console.log(res);
        dispatch(addTodo(res.todo));
      }
  );
  };
}

export function fetchTodos() {
  return (dispatch) => {
    return callApi('todos').then(res => {
      dispatch(addTodos(res.todos));
    });
  };
}

export function searchTodo(search) {
  console.log('searchTodo called');
  return {
    type: SEARCH_TODO,
    search
  };
}

export function toggleCompleted(id) {
  console.log('toggleCompleted called');
  return {
    type: TOGGLE_COMPLETED,
    id
  };
}

export function toggleCompletedRequest(id) {
  return (dispatch) => {
    return callApi(`todos/${id}`, 'put').then(() => dispatch(toggleCompleted(id)));
  };
}

export function showCompleted(show) {
  console.log('showCompleted called');
  return {
    type: SHOW_COMPLETED,
    show
  };
}

export function deleteTodo(id) {
  console.log('deleteTodo called');
  return {
    type: DELETE_TODO,
    id
  };
}

export function deleteTodoRequest(id) {
  return (dispatch) => {
    return callApi(`todos/${id}`, 'delete').then(() => dispatch(deleteTodo(id)));
  };
}

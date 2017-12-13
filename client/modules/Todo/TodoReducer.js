import { ADD_TODO, ADD_TODOS, SEARCH_TODO, TOGGLE_COMPLETED, SHOW_COMPLETED, DELETE_TODO } from './TodoActions';

// Initial State
const initialState = { data: [], showCompleted: true, searchText: '' };

const TodoReducer = (state = initialState, action) => {
  console.log('state start', state);
  console.log('action', action);
  const item = action.todo;
    // if(item !== undefined)
    // {
    //   item.id = '_' + Math.random().toString(36).substr(2, 9);
    // }
  console.log('item', item);
  switch (action.type) {
    case ADD_TODO :
      return {
        ...state, data: [...state.data, item]
      };
    case ADD_TODOS :
      return {
        ...state, data: action.todos,
      };
    // case ADD_TODO :
    //   return {
    //     data: [action.post, ...state.data],
    //   };
    case SEARCH_TODO :
      console.log(action.search);
      return {
        ...state, searchText: action.search
      };
    case TOGGLE_COMPLETED :
      console.log(action.id);
      return {
        ...state,
        data: state.data.map(
          (itemToggle) => {
            if (action.id === itemToggle.id) {
              return { ...itemToggle, completed: !itemToggle.completed };
            }
            return itemToggle;
          }
        )
      };
    case SHOW_COMPLETED :
      console.log('show', action.show);
      return {
        ...state, showCompleted: action.show
      };
    case DELETE_TODO :
      console.log(action.id);
      return {
        ...state,
        data: state.data.filter((filteritem) => (filteritem.id !== action.id || !filteritem.completed))
      };
    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getTodos = state => state.todos.data;

export const getShowCompleted = state => state.todos.showCompleted;

export const getSearchText = state => state.todos.searchText;

// Export Reducer
export default TodoReducer;

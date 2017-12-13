import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
// Import Components
// Import Actions
import { fetchTodos, addTodoRequest, toggleCompletedRequest, showCompleted, deleteTodoRequest, searchTodo } from '../../TodoActions';

// Import Selectors
import { getTodos, getShowCompleted, getSearchText } from '../../TodoReducer';

class TodoListPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  searchTodo = (e) => {
    // console.log(e.target.value);
    // console.log('search length', e.target.value.length);
    if (e.target.value.length > 0) {
      this.props.dispatch(searchTodo(e.target.value));
    } else {
      this.props.dispatch(searchTodo(''));
    }
  }

  addTodo = (e) => {
    if (e.key === 'Enter') {
      // console.log(e.target.value);
      const id = `_${Math.random().toString(36).substr(2, 9)}`;
      this.props.dispatch(addTodoRequest({ name: e.target.value, completed: false, id }));
      this.props.dispatch(searchTodo(''));
      this.refs.todo.value = '';
    }
  };

  handleChangeChk = (id) => {
    console.log(id);
    this.props.dispatch(toggleCompletedRequest(id));
  }

  handleDeleteItem = (id, completed) => {
    console.log(id);
    if (completed) {
      this.props.dispatch(deleteTodoRequest(id));
    }
  }

  handleCompleted = (e) => {
    console.log(e.target.checked);
    this.props.dispatch(showCompleted(e.target.checked));
  }

  render() {
    console.log('todos in props', this.props.todos);
    console.log('showCompleted in props', this.props.showCompleted);
    console.log('searchText in props', this.props.searchText);
    let items = this.props.todos.filter((todo) => (this.props.showCompleted ||
      (!this.props.showCompleted && !todo.completed)
    ));

    items = items.filter((todo) => (todo.name.indexOf(this.props.searchText) !== -1));

    console.log(items);
    return (
      <div>
        <h1>Todo List</h1>
        <input type="text" onKeyPress={this.addTodo} onChange={this.searchTodo} ref="todo" />
        <div>
          <input id="completed" onChange={(e) => this.handleCompleted(e)} type="checkbox" defaultChecked />
          <label htmlFor="completed">Show completed</label>
        </div>
        <br /><br />
        <div className="listView">
         {
           items.map(todo => (

             (
             <div style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
               <input id="checkBox" onChange={() => this.handleChangeChk(todo.id)} checked={todo.completed} type="checkbox" />
               <span style={{ padding: '5px 5px' }}>{todo.name}</span>
               <button
                 style={{ marginLeft: '10px', backgroundColor: 'grey', padding: '5px 5px', color: 'white' }}
                 onClick={() => this.handleDeleteItem(todo.id, todo.completed)} type="button"
               >Delete!</button>
             </div>)


           ))
         }
        </div>
      </div>
    );
  }
}


// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    todos: getTodos(state),
    showCompleted: getShowCompleted(state),
    searchText: getSearchText(state)
  };
}

TodoListPage.propTypes = {
  todos: PropTypes.object,
  showCompleted: PropTypes.boolean,
  searchText: PropTypes.string,
  addTodo: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

TodoListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(TodoListPage);

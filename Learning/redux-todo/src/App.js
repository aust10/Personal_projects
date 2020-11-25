
import './App.css';

import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import VisibilityFilters from './components/VisibilityFilters/VisibilityFilters'

function App () {
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      {/* <VisibilityFilters /> */}
    </div>
  );
}

export default App;

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton'

import React from 'react';


const defaultTodos = [{ text: 'Cortar Cebolla',completed: false},{text: 'Cortar Zanahoria',completed: true},{text: 'Ir al parque',completed: false},{text: 'Laika',completed: true}];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios buscan: ' + searchValue)

  const completedTodos = todos.filter(
    todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        { defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))
        }
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton'

import React from 'react';


const defaultTodos = [{ text: 'Cortar Cebolla',completed: false},{text: 'Cortar Zanahoria',completed: true},{text: 'Ir al parque',completed: false},{text: 'Laika',completed: true}];

function App() {

  // estado de todos
  const [todos, setTodos] = React.useState(defaultTodos);

  // estado de busqueda
  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios buscan: ' + searchValue)

  // Contador
  const completedTodos = todos.filter(
    todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // Buscador
  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.includes(searchValue)
    }
  )

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        { searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))
        }
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;

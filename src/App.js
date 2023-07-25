import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton'

import React from 'react';


const defaultTodos = [
  {
    text: 'Cortar Cebolla',
    completed: false
  },
  {
    text: 'Cortar Zanahoria',
    completed: true
  },

  {
    text: 'Ir al parque',
    completed: false
  },
  {
    text: 'Laika',
    completed: true
  },
]

function App() {
  return (
    <>
      <TodoCounter completed={16} total={20} />
      <TodoSearch />

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

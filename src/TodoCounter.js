import React from 'react'
import './TodoCounter.css'

function TodoCounter({total, completed}) {
  return (
    <h1>
        Has completado <span>{completed}</span> de <span>{total}</span> Todos
    </h1>
  )
}

export { TodoCounter }
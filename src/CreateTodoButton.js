import React from 'react'

import './CreateTodoButton.css'

function CreateTodoButton() {
  return (
    <input type='button'
           value={'+'}
           className='CreateTodoButton'
           onClick={
            (event) =>{
              console.log('Click')
              console.log(event)
              console.log(event.target)
            }
           }/>
  )
}

export { CreateTodoButton }
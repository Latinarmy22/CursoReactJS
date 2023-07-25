import React from 'react'
import './TodoSearch.css';

function TodoSearch() {

  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios buscan: ' + searchValue)

  return (
    <input
      placeholder='Cortar Cebolla'
      className="TodoSearch"
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value);
        // console.log('evento del todoShearch')
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.value)
      }}/>
  )
}

export { TodoSearch };
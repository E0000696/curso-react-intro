import { TodoContext } from '../TodoContext';
import './TodoSearch.css'
import React, { useContext } from 'react'


function TodoSearch(){
 
    const {searchValue , 
      setSearchValue} = React.useContext(TodoContext);

    return (
      <div className="d-flex p-2 bd-d-flex p-2 justify-content-center">
        <form className="search" action="">
          <input type="search" placeholder="Texto a buscar..." required 
          value={searchValue}
          onChange={(event)=>{
            setSearchValue(event.target.value);
            console.log(searchValue)
          }}
          />
          <button type="submit">Buscar</button>
        </form>   
      </div>
    );
  }

  export { TodoSearch };
  
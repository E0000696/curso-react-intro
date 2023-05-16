import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

const estilos = {
  backgroundColor: 'red'
}

function TodoCounter(){
const {textHeader} = React.useContext(TodoContext);

    return (
      <header>
        <p></p>
        <h1 >
          {textHeader}
        </h1>
        <p></p>
      </header>
    );
  }

  export {TodoCounter}; //export nombrado para no equivocarse en el nombre
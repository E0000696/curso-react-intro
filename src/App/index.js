import { TodoProvider } from '../TodoContext';
import './App.css';
import {AppUI} from './AppUI'
import React, { useState } from 'react'

function App() {
 
  

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}





export default App;

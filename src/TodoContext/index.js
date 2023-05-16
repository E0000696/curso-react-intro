import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){

    const {
        item : todos, //los 2 puntitos renombran una propiedad
        saveItem : saveTodos,
        loading,
        error}= useLocalStorage('TODOS_V1', []);
        const [openModal, setOpenModal] = React.useState(false);
      const [textHeader, setTextHeader] = React.useState('');
      const completedTodos = todos.filter(todo => todo.completed).length;
      const totalTodos = todos.length;
    
      const [searchValue, setSearchValue] = React.useState('');
      console.log('Se bsucan tareas de '+searchValue);
    
      
      const seachedTodo = todos.filter(
        (todo) => {
          const todoText = todo.text.toUpperCase();
          const searchText = searchValue.toUpperCase();
          return todoText.includes(searchText);
        }

        
      );

      const addTodo= (text) => {
        const newTodos = [...todos]; //los 3 puntios indican que es una copia de todos
        newTodos.push({
          text, 
          completed: false
        })
        saveTodos(newTodos);        
      };
    
      const completeTodo = (text) => {
        const newTodos = [...todos]; //los 3 puntios indican que es una copia de todos
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
    
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
        defineTextHeader(newTodos);
      }
    
      
      const deleteTodo = (text) => {
        const newTodos = [...todos]; //los 3 puntios indican que es una copia de todos
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
      
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
        defineTextHeader(newTodos);
      }
    
      const defineTextHeader = (newTodos) =>{
        console.log('En metodo de definicion Header');
        const completedTodosIn = newTodos.filter(todo => todo.completed).length;
        const totalTodosIn = newTodos.length;
        console.log('Completos'+ completedTodosIn + ', total '+totalTodosIn);
        if(totalTodosIn == 0){
          setTextHeader('Ingresa tareas a la lista...');
        }
        else if(totalTodosIn > 0 && totalTodosIn == completedTodosIn ){
          setTextHeader('Ya no tienes tareas por realizar');
        }else{
          setTextHeader('Tienes '+completedTodosIn + ' de '+totalTodosIn+' tareas completadas');
        }
      };
    

    return(
        <TodoContext.Provider value={{
            completeTodo,
            textHeader,
            searchValue,
            setSearchValue,
            seachedTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}


export {TodoContext, TodoProvider, };
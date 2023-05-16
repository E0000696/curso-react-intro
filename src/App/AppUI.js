import React, { useState } from 'react'
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm';

function AppUI(){
  const {
    completeTodo,
    seachedTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal
} = React.useContext(TodoContext);

    return (
        <>
        <TodoCounter  />      
        <CreateTodoButton/>
        <TodoSearch />
  
  
                    <TodoList>
                    {loading && <TodosLoading/>}
                    {error && <TodosError/>}
                    {(!loading && seachedTodo.length == 0 ) && <EmptyTodos/>}

                  {seachedTodo.map(todo => (
                      <TodoItem 
                      key={todo.text} 
                      text={todo.text}
                      completed={todo.completed}
                      onComplete={()=>completeTodo(todo.text)}
                      onDelete={()=>deleteTodo(todo.text)}
                      />
                  ))}
                  
                </TodoList>
                      
        
      {openModal &&
      <Modal>
          <TodoForm></TodoForm>
      </Modal>
    }

    
  
  
      </>
    );
}


export {AppUI};
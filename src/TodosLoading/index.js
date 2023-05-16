import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div>
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text"></p>      
    </div>
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text"></p>      
    </div>
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text"></p>      
    </div>
    </div>    
  );
}

export { TodosLoading };
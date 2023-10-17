import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import React from 'react'

const  App=() =>{
  
  return (
    <div className="App">
      <div  className="container">
        <h1 className='title'>Todo List</h1>
        <TodoForm/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;

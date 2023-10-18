import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Home from "./components/Home/Home";
import React,{useEffect} from 'react'
import { getMeal } from "./store/theMealSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getMeal())
  },[])
  return (
    <div className="App">
      {/* <div  className="container">
        <h1 className='title'>Todo List</h1>
        <TodoForm/>
        <TodoList/>
      </div> */}
      <div className="container">
        <Home />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import TodoItem from "./TodoItem";
import { useSelector,useDispatch } from "react-redux";
import { deleteTodo } from "../store/todosSlice";

const TodoList = () => {
  const dispatch=useDispatch()
  const todos=useSelector((state)=>state.todos)

  const handelDelete=(id)=>{
    dispatch(deleteTodo(id))
  }
  return (
    <div>
         {
          todos.map((elem,i)=>{
            return  <TodoItem key={i} handelDelete={handelDelete} {...elem} />
          })
         }
    </div>
  );
};

export default TodoList;

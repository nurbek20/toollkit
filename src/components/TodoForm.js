import React,{useState} from "react";
import { addTodo } from "../store/todosSlice";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const dispatch=useDispatch()
    const [input,setInput]=useState("")
    const handleSubmit=(e)=>{
      e.preventDefault()
      if(input.trim()!==""){
        console.log(input);
        dispatch(addTodo(input))
        setInput("")
      }
    }
  return (
    <form  onSubmit={handleSubmit} className="todo-form">
      <input
      value={input}
      onChange={(e)=>setInput(e.target.value)}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;

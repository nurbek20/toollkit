import React, { useState } from "react";

const TodoItem = (props) => {
  const {
    id,
    text,
    change,
    completed,
    handleDeleteTodo,
    handleChangeTodo,
    handleEditTodo,
    handleToggleTodo
  } = props;
  console.log(props);
  const [input, setInput] = useState(text);
  const addClick = () => {
    if(input.trim()!==""){
      handleEditTodo(id,input)
    }
  };

  return (
    <div className="todo-item">
      {change ? (
        <>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="change"
            type="text"
          />
          <button onClick={addClick} className="changebtn">Add</button>
        </>
      ) : (
        <>
          <input checked={completed} onChange={()=>handleToggleTodo(id)} type="checkbox" name="" id="" />
          <span className={completed?"text":null}>{text}</span>
          <button disabled={completed ? true : false} onClick={() => handleChangeTodo(id)}>change</button>
          <button disabled={completed ? false : true} onClick={() => handleDeleteTodo(id)}>delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;

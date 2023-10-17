import React from "react";

const TodoItem = (props) => {
  const {id, text,handelDelete}=props

  let change=false
  return (
    <div className="todo-item">
      {change ? (
        <>
          <input
            className="change"
            type="text"
          />
          <button className="changebtn">Add</button>
        </>
      ) : (
        <>
          <input type="checkbox" name="" id="" />
          <span>{text}</span>
          <button>change</button>
          <button onClick={()=>handelDelete(id)} >delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;

import React from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  changeTodo,
  editTodo,
  toggleTodo,
} from "../store/todosSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log("todos>>>", todos);
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleChangeTodo = (id) => {
    dispatch(changeTodo(id));
  };
  const handleEditTodo = (id, text) => {
    console.log("handleEditTodo", id, text);
    dispatch(editTodo({ id, text }));
  };
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };
  return (
    <div>
      {todos.map((elem, i) => {
        return (
          <TodoItem
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleChangeTodo={handleChangeTodo}
            handleToggleTodo={handleToggleTodo}
            {...elem}
          />
        );
      })}
    </div>
  );
};

export default TodoList;

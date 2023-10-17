import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
        change: false,
      });
    },
    deleteTodo:(state,action)=>{
        return state.filter((elem)=>elem.id!==action.payload)
    }
  },
});
export const { addTodo,deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;

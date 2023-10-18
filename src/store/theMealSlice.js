import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL="https://www.themealdb.com/api/json/v1/1/"

const initialState={
    meal:[],
    
}

export const getMeal=createAsyncThunk("meal/getMeal",async(elem,{rejectWithValue,dispatch})=>{
    try {
        const data=await axios.get(`search.php?f=${elem}`)
        // console.log(data);
        dispatch(searchMeal(data.data.meals))
    } catch (err) {
        return rejectWithValue(err)
    }
})


const theMealSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        searchMeal:(state,action)=>{
            state.meal=action.payload
        }
    },
})
export const {searchMeal}=theMealSlice.actions

export default theMealSlice
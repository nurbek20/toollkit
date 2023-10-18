import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todosSlice'
import theMealSlice from './theMealSlice'


const store=configureStore({
    reducer:{
        todos:todosSlice,
        theMeal: theMealSlice.reducer
    }
})

export default store
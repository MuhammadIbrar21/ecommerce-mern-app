import cartSlice from './slices/cartSlice';
import { users } from './slices/usersSlice'
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// const mainReducers = combineReducers({
//     users: users.reducer
// })

export const store = configureStore({
    reducer: {
        users: users.reducer,
        cart: cartSlice.reducer
    }
})
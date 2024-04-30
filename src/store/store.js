import cartReducer from './slices/cartSlice';
import { users } from './slices/usersSlice'
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const mainReducers = combineReducers({
    users: users.reducer,
    cart: cartReducer
})

export const store = configureStore({
    reducer: mainReducers
})
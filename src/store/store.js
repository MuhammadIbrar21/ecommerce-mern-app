import cartReducer from './slices/cartSlice';
import productsReducer from './slices/productsSlice';
import { users } from './slices/usersSlice'
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const mainReducers = combineReducers({
    users: users.reducer,
    cart: cartReducer,
    products: productsReducer
})

export const store = configureStore({
    reducer: mainReducers
})
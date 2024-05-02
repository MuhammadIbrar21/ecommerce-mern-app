import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const items =
    localStorage.getItem("cartItems") !== null
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];

const setCartListFunc = (items) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
}

const initialState = {
    cartItems: items,
    amount: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.name === action.payload.name)
            if (cartItem) {
                cartItem.quantity = cartItem.quantity + 1
            } else {
                state.cartItems.push(action.payload)
            }
            setCartListFunc(
                state.cartItems.map((item) => item
                ))
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
            state.total = 0;
            localStorage.removeItem('cartItems');
        },
        removeItem: (state, action) => {
            const itemName = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.name !== itemName);
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.name === payload)
            if (cartItem) {
                cartItem.quantity = cartItem.quantity + 1;
            } else {
                toast.error('Kindly first add product to cart', {
                    position: 'bottom-right'
                })
            }
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.name === payload)
            if (cartItem.quantity > 1) {
                cartItem.quantity = cartItem.quantity - 1;
            } else {
                state.cartItems = state.cartItems.filter((item) => item.name !== cartItem.name);
            }
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.quantity;
                total += item.quantity * item.price;
            });
            state.amount = amount;
            state.total = total;

        },
    },

});


export const { addToCart, clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;

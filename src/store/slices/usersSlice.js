import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";

export const users = createSlice({
    name: 'users',
    initialState: {
        currentUser: null
    },
    reducers: {
        setLogin: (state, action) => {
            state.currentUser = action.payload
        },
        setLogout: (state, action) => {
            state.currentUser = null;
            localStorage.removeItem('token');
            <Navigate to='/login' />
            localStorage.removeItem('isChecked');
        }
    }
})

export const { setLogin, setLogout } = users.actions
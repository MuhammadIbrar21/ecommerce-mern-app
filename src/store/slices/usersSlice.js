import { createSlice } from "@reduxjs/toolkit";

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
        }
    }
})

export const { setLogin, setLogout } = users.actions
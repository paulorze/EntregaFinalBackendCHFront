import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
        resetUser: (state, action) => {
            return null;
        }
    }
});

export const {setUser, resetUser} = userSlice.actions;
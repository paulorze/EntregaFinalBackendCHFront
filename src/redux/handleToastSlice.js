import { createSlice } from "@reduxjs/toolkit";

export const handleToastSlice = createSlice({
    name: 'handleToast',
    initialState: false,
    reducers: {
        openToast: (state, action) => {
            return true;
        },
        closeToast: (state, action) => {
            return false;
        }
    }
});

export const {openToast, closeToast} = handleToastSlice.actions;
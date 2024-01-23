import { createSlice } from "@reduxjs/toolkit";

export const handleToastErrorSlice = createSlice({
    name: 'handleToastError',
    initialState: false,
    reducers: {
        openToastError: (state, action) => {
            return true;
        },
        closeToastError: (state, action) => {
            return false;
        }
    }
});

export const {openToastError, closeToastError} = handleToastErrorSlice.actions;
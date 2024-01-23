import { createSlice } from "@reduxjs/toolkit";

const setInitialState = JSON.parse(localStorage.getItem('cart')) || {};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: setInitialState,
    reducers: {
        cartAddProduct: (state, action) => {
            const newState = {...state, [action.payload._id] : {
                _id: action.payload._id,
                quantity: action.payload.quantity
            }}
            localStorage.setItem('cart',JSON.stringify(newState));
            return newState;
        },
        cartDeleteProduct: (state, action) => {
            delete state[action.payload];
            localStorage.setItem('cart',JSON.stringify(state));
            return state;
        },
        cartClean: (state, action) => {
            localStorage.clear();
            return {};
        },
    }
});

export const getProductQuantity = (state, productID) => {
    return state.cart[productID]?.quantity || 1;
}

export const getProductsTotalQuantity = (state) => {
    let totalQuantity = 0;
    for (const product in state.cart) {
            totalQuantity += state.cart[product]?.quantity;
    };
    return totalQuantity;
};

export const {cartAddProduct, cartDeleteProduct, cartClean} = cartSlice.actions;
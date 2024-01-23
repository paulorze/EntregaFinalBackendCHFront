import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { handleToastErrorSlice } from "./handleToastErrorSlice";
import { handleToastSlice } from "./handleToastSlice";
import { userSlice } from "./userSlice";

const StoreRedux = configureStore({
    reducer: {
        handleToast: handleToastSlice.reducer,
        handleToastError: handleToastErrorSlice.reducer,
        userData: userSlice.reducer,
        cart: cartSlice.reducer,
    }
});

export default StoreRedux;
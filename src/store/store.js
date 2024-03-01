import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/women/cartSlice";
import cartSliceMen from "../slice/men/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        cartMen: cartSliceMen,
        // favorites: s1,
    }
})

export default store
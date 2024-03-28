import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/women/cartSlice";
import cartSliceMen from "../slice/men/cartSlice";
import favoritesSlice from "../slice/women/favoritesSlice";
import favoritesSliceMen from "../slice/men/favoritesSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        cartMen: cartSliceMen,
        favorites: favoritesSlice,
        favoritesMen: favoritesSliceMen,
    }
})

export default store
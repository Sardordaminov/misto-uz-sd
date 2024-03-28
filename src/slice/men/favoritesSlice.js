import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("favoritesMen")) || []

const favoritesSlice = createSlice({
    name: "favoritesMen",
    initialState,
    reducers: {
        addToFav: (state, action) => {
            const { id, name, image, price } = action.payload;
            const existingItem = state.find(item => item.id === id)

            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.push({ id, name, image, price, isFavourite: true, quantity: 1 })
            }
            localStorage.setItem('favoritesMen', JSON.stringify(state))
        },
        removeFromFav: (state, action) => {
            const FavId = action.payload;

            const updateFav = state.filter(item => item.id !== FavId);
            localStorage.setItem("favoritesMen", JSON.stringify(updateFav))
            return updateFav
        },
    }
})
export const { addToFav, removeFromFav} = favoritesSlice.actions;
export default favoritesSlice.reducer;
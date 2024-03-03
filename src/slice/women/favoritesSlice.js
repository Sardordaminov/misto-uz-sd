import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("favorites")) || []

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFav: (state, action) => {
            const { id, name, image, price, isFavourite} = action.payload;

        },
    }
})
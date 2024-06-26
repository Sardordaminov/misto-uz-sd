import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cartMen")) || []

const cartSlice = createSlice({
    name: "cartMen",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, name, image, price } = action.payload;
            const existingItem = state.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.push({ id, name, image, price, quantity: 1 });
            }
            localStorage.setItem('cartMen', JSON.stringify(state))
        },
        removeFromCart: (state, action) => {
            const cartId = action.payload;

            const updateCart = state.filter(item => item.id !== cartId);
            localStorage.setItem("cartMen", JSON.stringify(updateCart))
            return updateCart
        },
        incrementQty: (state, action) => {
            const cartId = action.payload;
            const existingItem = state.find((item) => item.id === cartId);
            if (existingItem) {
                existingItem.quantity += 1;
            }
            localStorage.setItem("cartMen", JSON.stringify(state));
        },
        decrementQty: (state, action) => {
            const cartId = action.payload;
            const existingItem = state.find((item) => item.id === cartId);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            }
            localStorage.setItem("cartMen", JSON.stringify(state));
        },
    }
})

export const { addToCart, removeFromCart, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
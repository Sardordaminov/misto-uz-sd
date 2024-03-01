import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);
            const { id, name, image, price } = action.payload;
            const existingItem = state.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.push({ id, name, image, price, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state))
        },
        removeFromCart: (state, action) => {
            const cartId = action.payload;

            const updateCart = state.filter(item => item.id !== cartId);
            localStorage.setItem("cart", JSON.stringify(updateCart))
            return updateCart
        },
        incrementQty: (state, action) => {
            const cartId = action.payload;
            const existingItem = state.find((item) => item.id === cartId);
            if (existingItem) {
                existingItem.quantity += 1;
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },
        decrementQty: (state, action) => {
            const cartId = action.payload;
            const existingItem = state.find((item) => item.id === cartId);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },
    }
})

export const { addToCart, removeFromCart, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
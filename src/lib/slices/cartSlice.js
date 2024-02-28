// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//Create Initial State
const initialState = {
    items:[]
};

//Create the slice with Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, image } = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.items?.find((item) => item.id === id);
      if (existingItem) {
        // If the item exists, update the quantity
        existingItem.qty += 1;
      } else {
        // If the item doesn't exist, add it to the cart
        state.items?.push({ id, title, price, qty: 1, image });
      }
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      state.items = state.items?.filter((item) => item.id !== cartId);
      toast("Remove item from cart", {
        type: 'error', autoClose: 1000,
    })
    },
    incrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.items?.find((item) => item.id === cartId);
      if (cartItem) {
        cartItem.qty += 1;
      }
      toast("Increasing cart items", {
        type: 'success', autoClose: 1000,
    })
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.items?.find((item) => item.id === cartId);
      if (cartItem && cartItem.qty === 1) {
        state.items = state.items?.filter((item) => item.id !== cartId);
      }
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty -= 1;
      }
      toast("Decreasing cart items", {
        type: 'error', autoClose: 1000,
    })
      
    },
  },
});

//export the reducers(actions)
export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice;
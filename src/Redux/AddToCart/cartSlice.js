import { createSlice } from "@reduxjs/toolkit";

// Initial state from local storage, if available
const storedCart = JSON.parse(localStorage.getItem("cart"));
const storedTotalAmount = JSON.parse(localStorage.getItem("totalAmount"));
// const initialState = { items: storedCart || [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: storedCart || [],
    totalAmount: storedTotalAmount || 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalAmount += newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      saveCartToLocalStorage(state.items, state.totalAmount);
      // state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalAmount -= existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        // state.items = state.items.filter((item) => item.id !== action.payload);
      }
      saveCartToLocalStorage(state.items, state.totalAmount);
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      saveCartToLocalStorage(state.items, state.totalAmount);
      clearCartFromLocalStorage();
    },
  },
});

const saveCartToLocalStorage = (cart, totalAmount) => {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
};

const clearCartFromLocalStorage = () => {
  localStorage.removeItem("cart");
  localStorage.removeItem("totalAmount");
};

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
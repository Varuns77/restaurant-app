import { createSlice } from "@reduxjs/toolkit";

// Initial state from local storage, if available
const storedCart = JSON.parse(localStorage.getItem("cart"));
// const initialState = { items: storedCart || [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: storedCart || [],
    totalAmount: 0,
  },
  reducers: {
    addOrder: (state, action) => {
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
      saveCartToLocalStorage(state.items);
      // state.items.push(action.payload);
    },
    removeOrder: (state, action) => {
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
      saveCartToLocalStorage(state.items);
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      clearCartFromLocalStorage();
    },
  },
});

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const clearCartFromLocalStorage = () => {
  localStorage.removeItem("cart");
};

export const { addOrder, removeOrder, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

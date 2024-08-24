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
          disabled: true,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
        existingItem.disabled = true; // Keep the item disabled as it's already in the cart
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
      existingItem.disabled = false;
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

//   // Initial state from local storage, if available
// const storedCart = JSON.parse(localStorage.getItem("cart"));
// const initialState = { cart: storedCart || [] };

// const orderSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItem(state, action) {
//       const existingItem = state.cart.find((item) => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//         existingItem.totalItemPrice += existingItem.price;
//       } else {
//         state.cart.push({
//           ...action.payload,
//           quantity: 1,
//           totalItemPrice: action.payload.price,
//         });
//       }
//       state.totalPrice += action.payload.price;
//       saveCartToLocalStorage(state.cart);
//     },
//     deleteItem(state, action) {
//       state.cart = state.cart.filter((item) => item.id !== action.payload);
//       saveCartToLocalStorage(state.cart);
//     },
//     increaseItemQuantity(state, action) {
//       const existingItem = state.cart.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//         existingItem.totalItemPrice += existingItem.price;
//         state.totalPrice += existingItem.price;
//       }
//       saveCartToLocalStorage(state.cart);
//     },
//     decreaseItemQuantity(state, action) {
//       const existingItem = state.cart.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         if (existingItem.quantity > 1) {
//           existingItem.quantity -= 1;
//           existingItem.totalItemPrice -= existingItem.price;
//           state.totalPrice -= existingItem.price;
//         } else {
//           state.cart = state.cart.filter(item => item.id !== action.payload.id);
//           state.totalPrice -= existingItem.price;
//         }
//       }
//       saveCartToLocalStorage(state.cart);
//     },
//     clearCart(state) {
//       state.cart = [];
//       state.totalPrice = 0;
//       clearCartFromLocalStorage();
//     },
//   },
// });

// // Helper Functions

// const saveCartToLocalStorage = (cart) => {
//   localStorage.setItem("cart", JSON.stringify(cart));
// };

// const clearCartFromLocalStorage = () => {
//   localStorage.removeItem("cart");
// };

// // Export actions and reducer
// export const {
//   addItem,
//   deleteItem,
//   increaseItemQuantity,
//   decreaseItemQuantity,
//   clearCart,
// } = orderSlice.actions;

// export default orderSlice.reducer;

// // Selector Functions

// export const getCart = (state) => state.cart?.cart;

// export const getTotalCartQuantity = (state) =>
//   state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

// export const getTotalCartPrice = (state) =>
//   state.cart.cart.reduce((sum, item) => sum + item.totalItemPrice, 0);

// export const getCurrentQuantityById = (id) => (state) =>
//   state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

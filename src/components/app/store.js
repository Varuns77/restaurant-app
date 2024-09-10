import { configureStore } from '@reduxjs/toolkit';
// import orderReducer from '../Redux/AddToCart/orderSlice';
import cartReducer from '../../Redux/AddToCart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
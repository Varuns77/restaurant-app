import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'order',
    initialState: {
      items: [], 
    },
    reducers: {
      addOrder: (state, action) => {
        state.items.push(action.payload);
      },
      removeOrder: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      },
    },
  });
  
  export const { addOrder, removeOrder } = orderSlice.actions;
  export default orderSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    products: [],
    count: 0,
    total: 0,
  },
  reducers: {
    // Reducer to add an order
    addOrder: (state, action) => {
      // Assuming action.payload contains the order details
      const { products, count, total } = action.payload;

      // Update the state with the new order details
      state.products = products;
      state.count = count;
      state.total = total;
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    count: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.count += action.payload.count; // Update count based on the added product count
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.count;
    },
    updateCart: (state, action) => {  
      const { productId, quantity } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product._id === productId
      );

      if (productIndex !== -1) {
        const updatedCount = state.products[productIndex].count + quantity;

        if (updatedCount > 0) {
          // If the updated count is greater than 0, update the count and total
          state.products[productIndex].count = updatedCount;
          state.count += quantity;
          state.total += state.products[productIndex].price * quantity;
        } else {
          // If the updated count is 0 or negative, remove the product from the cart
          state.count -= state.products[productIndex].count;
          state.total -= state.products[productIndex].price * state.products[productIndex].count;
          state.products.splice(productIndex, 1);
        }
      }
    },
    removeAllQuantity: (state, action) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product._id === productId
      );

      if (productIndex !== -1) {
        state.count -= state.products[productIndex].count;
        state.total -= state.products[productIndex].price * state.products[productIndex].count;
        state.products.splice(productIndex, 1);
      }
    },
  },
});

export const { addProduct, updateCart , removeAllQuantity} = cartSlice.actions;
export default cartSlice.reducer;

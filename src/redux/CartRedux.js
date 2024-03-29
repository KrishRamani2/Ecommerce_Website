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
      const { _id, size, count, price } = action.payload;
      const existingProductIndex = state.products.findIndex(
        (product) => product._id === _id && product.size === size
      );

      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].count += count;
      } else {
        state.products.push(action.payload);
      }

      state.count += count;
      state.total += price * count;
    },
    updateCart: (state, action) => {  
      const { productId, quantity } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product._id === productId
      );

      if (productIndex !== -1) {
        const updatedCount = state.products[productIndex].count + quantity;

        if (updatedCount > 0) {
          state.products[productIndex].count = updatedCount;
          state.count += quantity;
          state.total += state.products[productIndex].price * quantity;
        } else {
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
    dispatchAllProducts: (state,action) => {
      return {
        ...state,
        products: action.payload, 
      };
    },
  },
});

export const { addProduct, updateCart, removeAllQuantity, dispatchAllProducts } = cartSlice.actions;
export default cartSlice.reducer;

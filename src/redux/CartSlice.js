import {createSlice} from '@reduxjs/toolkit';

const pointSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProduct(state, action) {
      const isProductInCart = state.findIndex(
        item => item.id === action.payload.id,
      );
      if (isProductInCart < 0) {
        state.push(action.payload);
      }
      if (isProductInCart >= 0) {
        state[isProductInCart].quantity += 1;
      }
    },
    deleteProduct(state, action) {
      state = state.filter(item => item.id !== action.payload);
      return state;
    },
    updateProduct(state, action) {
      const indexOfProduct = state.findIndex(
        item => item.id === action.payload.id,
      );
      const currentProduct = state[indexOfProduct];
      if (currentProduct.quantity <= 0) {
        currentProduct.quantity = 1;
      }
      if (action.payload.type === 'plus') {
        currentProduct.quantity += 1;
        console.log(currentProduct.quantity);
      }
      if (action.payload.type === 'minus' && currentProduct.quantity > 0) {
        currentProduct.quantity -= 1;
        console.log(currentProduct.quantity);
      }
    },
  },
});

const {reducer, actions} = pointSlice;
export const {addProduct, deleteProduct, updateProduct} = actions;
export default reducer;

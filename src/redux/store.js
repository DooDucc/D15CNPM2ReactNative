import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './CartSlice';
// create root reducer
const rootReducer = {
  cart: CartReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;

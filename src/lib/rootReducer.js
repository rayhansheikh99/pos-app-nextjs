import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';

const rootReducer = combineReducers({
  [cartSlice.name]: cartSlice.reducer,
});

export default rootReducer;
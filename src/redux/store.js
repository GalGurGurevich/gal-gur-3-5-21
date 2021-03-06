import { configureStore } from '@reduxjs/toolkit';
import storeReducer from '../redux/itemStoreSlice';

export default configureStore({
  reducer: {
    userItemCart: storeReducer,
  },
});

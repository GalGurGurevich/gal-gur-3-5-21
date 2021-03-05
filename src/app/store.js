import { configureStore } from '@reduxjs/toolkit';
import storeReducer from '../features/Item/itemStoreSlice';

export default configureStore({
  reducer: {
    userItemCart: storeReducer,
  },
});

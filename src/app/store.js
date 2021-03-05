import { configureStore } from '@reduxjs/toolkit';
import storeReducer from '../Components/Pages/itemStoreSlice';

export default configureStore({
  reducer: {
    userItemCart: storeReducer,
  },
});

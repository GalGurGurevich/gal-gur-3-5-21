import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exchangeRates from '../../API/exchangeRates'

const getCurrenyRates = createAsyncThunk('users/fetchByIdStatus', async (thunkAPI) => {
    const response = await exchangeRates.apply();
    return response.data
  }
)

export const itemStoreSlice = createSlice({
  name: 'itemStore',
  initialState: {
    items: [],
    recivedItems: [],
    delayTimeBetweenAPICall: 0,
    dollarToShekel: null,
    displayShekel: false
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [getCurrenyRates.fulfilled]: (state, action) => {
      state.dollarToShekel = action.payload
    }
  }
});

export const { addItem } = itemStoreSlice.actions;

export default itemStoreSlice.reducer;

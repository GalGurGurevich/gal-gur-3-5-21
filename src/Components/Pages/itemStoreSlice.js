import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exchangeRates from '../../API/exchangeRates'

export const getCurrenyRates = createAsyncThunk("getCurrenyRates", async (thunkAPI) => {
    const response = await exchangeRates().then(result => result);
    return response
  }
)

export const itemStoreSlice = createSlice({
  name: 'itemStore',
  initialState: {
    items: [],
    recivedItems: [],
    itemIDCounter: 0,
    delayTimeBetweenAPICall: 100,
    dollarToShekel: null,
    apiError: false,
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
      state.itemIDCounter++;
    },
    receiveItem: (state, action) => {
      console.log("receiveItem", action.payload)
      state.recivedItems = [...state.recivedItems, action.payload];
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [getCurrenyRates.fulfilled]: (state, action) => {
      state.dollarToShekel = action.payload.rates.ILS
    }
  }
});

export const { addItem, changeDisplayOfExchangeRate, receiveItem } = itemStoreSlice.actions;

export default itemStoreSlice.reducer;

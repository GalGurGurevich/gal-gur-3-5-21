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
    aggregatedStore: [],
    itemIDCounter: 0,
    delayTimeBetweenAPICall: 10000,
    dollarToShekel: null,
    apiError: false,
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload].sort((a, b) => new Date(a.deliveryAt) - new Date(b.deliveryAt));
      state.itemIDCounter++;
    },
    receiveItem: (state, action) => {
      state.recivedItems = [...state.recivedItems, action.payload];
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    getAggregatedStore: (state, action) => {
      state.aggregatedStore = [...action.payload];
    }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [getCurrenyRates.fulfilled]: (state, action) => {
      state.dollarToShekel = action.payload.rates.ILS
    },
    [getCurrenyRates.rejected]: (state, action) => {
      state.apiError = true
    },
  }
});

export const { addItem, changeDisplayOfExchangeRate, receiveItem, getAggregatedStore } = itemStoreSlice.actions;

export default itemStoreSlice.reducer;

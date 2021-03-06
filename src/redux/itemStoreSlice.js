import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import exchangeRates from '../../src/API/exchangeRates';

const timeInterval = 10000;

export const getCurrenyRates = createAsyncThunk('getCurrenyRates', async thunkAPI => {
    const response = await exchangeRates().then(result => result);
    return response;
});

export const itemStoreSlice = createSlice({
    name: 'itemStore',
    initialState: {
        items: [],
        receivedItems: [],
        itemIDCounter: 0,
        delayTimeBetweenAPICall: timeInterval,
        dollarToShekel: null,
        apiError: false,
    },
    reducers: {
        addItem: (state, action) => {
            state.items = [...state.items, action.payload].sort((a, b) => new Date(a.deliveryAt) - new Date(b.deliveryAt));
            state.itemIDCounter++;
        },
        receiveItem: (state, action) => {
            state.receivedItems = [...state.receivedItems, action.payload];
            state.items = state.items.filter(item => item.id !== action.payload.id);
        }
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [getCurrenyRates.fulfilled]: (state, action) => {
            state.dollarToShekel = action.payload.rates.ILS;
            state.apiError = false
        },
        [getCurrenyRates.rejected]: (state, action) => {
            state.apiError = true;
        },
    },
});

export const { addItem, changeDisplayOfExchangeRate, receiveItem } = itemStoreSlice.actions;

export default itemStoreSlice.reducer;

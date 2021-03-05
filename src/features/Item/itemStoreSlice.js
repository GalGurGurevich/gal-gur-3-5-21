import { createSlice } from '@reduxjs/toolkit';

export const itemStoreSlice = createSlice({
  name: 'itemStore',
  initialState: {
    items: [],
    itemTotalSum: 0
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
      state.itemTotalSum += action.payload.price
    }
  },
});

export const { addItem } = itemStoreSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTotal = state => state.itemTotalSum;

export default itemStoreSlice.reducer;

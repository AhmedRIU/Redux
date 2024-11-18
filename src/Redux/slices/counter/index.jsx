import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 }, // Change initial state to an object
  reducers: {
    increment: (state) => {
      state.value += 1; // Update the `value` property
    },
    decrement: (state) => {
      state.value -= 1; // Update the `value` property
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

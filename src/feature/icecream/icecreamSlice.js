import { createSlice } from "@reduxjs/toolkit";

const initalCake = {
  icecreamQuant: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState: initalCake,
  reducers: {
    ordered: (state) => {
      state.icecreamQuant--;
    },
    restocked: (state, action) => {
      state.icecreamQuant += action.payload;
    },
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;

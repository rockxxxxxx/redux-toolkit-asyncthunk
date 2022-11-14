import { createSlice } from "@reduxjs/toolkit";

const initialCake = {
  cakeQuant: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initialCake,
  reducers: {
    ordered: (state) => {
      state.cakeQuant--;
    },
    restocked: (state, action) => {
      state.cakeQuant += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../feature/cake/cakeSlice";
import icecreamReducer from "../feature/icecream/icecreamSlice";
import userReducer from "../feature/user/userSlice";

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
});

export default store;

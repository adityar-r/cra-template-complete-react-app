import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload.isLogin;
    },
  },
});

export const { setLogin } = uiSlice.actions;

export default uiSlice.reducer;

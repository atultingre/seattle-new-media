import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    isUserLoggedIn: localStorage.getItem("isUserLoggedIn") || false,
    // name: "",
    // userID: null,
    // email: "",
    // password: "",
  },
  reducers: {
    updateLoginInfo: (state, actions) => {
      state.isUserLoggedIn = actions.payload.isUserLoggedIn;
    },
  },
});

export const { updateLoginInfo } = user.actions;
export default user;

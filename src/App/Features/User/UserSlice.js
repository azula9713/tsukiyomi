import { createSlice } from "@reduxjs/toolkit";
import User from "../../Models/User.model";

const initialState = User;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.isLoggedIn = true;
    },

    setSignOutStatus: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUserLoginDetails, setSignOutStatus } = userSlice.actions;

export const selectUser = (state) => {
  return {
    name: state.user.name,
    email: state.user.email,
    photo: state.user.photo,
    isLoggedIn: state.user.isLoggedIn,
  };
};

export default userSlice.reducer;

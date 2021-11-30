import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/User/UserSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

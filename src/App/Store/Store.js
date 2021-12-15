import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/User/UserSlice";
import moviesReducer from "../Features/Movie/MovieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

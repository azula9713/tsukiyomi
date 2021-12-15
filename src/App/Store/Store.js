import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/User/UserSlice";
import moviesReducer from "../Features/Movie/MovieSlice";
import requestAPIReducer from "../Features/RequestAPI/RequestAPISlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    requestAPI: requestAPIReducer,
  },
});

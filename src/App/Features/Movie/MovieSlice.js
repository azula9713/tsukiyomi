import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movies.movies;

export default movieSlice.reducer;

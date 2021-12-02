import { createSlice } from "@reduxjs/toolkit";
import Content from "../../Models/Content.model";

const initialState = Content;

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newArrive = action.payload.newArrive;
      state.original = action.payload.original;
      state.continueWatch = action.payload.continueWatching;
    },
  },
});

export const { setContent } = contentSlice.actions;

export const original = (state) => state.content.original;
export const recommend = (state) => state.content.recommend;
export const newArrive = (state) => state.content.newArrive;
export const continueWatch = (state) => state.content.continueWatch;

export default contentSlice.reducer;

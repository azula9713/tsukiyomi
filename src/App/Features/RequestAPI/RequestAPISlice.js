import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const requestAPISlice = createSlice({
  name: "requestAPI",
  initialState,
  reducers: {
    setRequestAPIStart: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    setRequestAPISuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
    },
    setRequestAPIError: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { setRequestAPIStart, setRequestAPISuccess, setRequestAPIError } =
  requestAPISlice.actions;

export const apiResult = (state) => {
  return {
    isLoading: state.requestAPI.isLoading,
    isError: state.requestAPI.isError,
    errorMessage: state.requestAPI.errorMessage,
  };
};

export default requestAPISlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const disableCameraSlice = createSlice({
  name: "disableCamera",
  initialState: {
    isLoading: false,
  },
  reducers: {
    disableCamera: (state) => {
      state.isLoading = true;
    },
    enableCamera: (state) => {
      state.isLoading = false;
    },
  },
});

export const { disableCamera, enableCamera } = disableCameraSlice.actions;
export default disableCameraSlice.reducer;

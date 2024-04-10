import { configureStore } from "@reduxjs/toolkit";
import disableCameraSlice from "./disableCameraSlice";

export const store = configureStore({
  reducer: {
    disableCamera: disableCameraSlice,
  },
});

// Import: Packages
import { createSlice } from "@reduxjs/toolkit";

// Import: Utils
import getInitialTheme from "../../utils/getInitialTheme";

// Slice: selectedThemeSlice
export const selectedThemeSlice = createSlice({
  name: "selectedTheme",
  initialState: {
    status: null,
    isGlobalDarkTheme: getInitialTheme(),
  },
  reducers: {
    setIsGlobalDarkTheme: (state, { payload }) => {
      state.isGlobalDarkTheme = payload;
    },
  },
});

// Actions: setIsGlobalDarkTheme
export const { setIsGlobalDarkTheme } = selectedThemeSlice.actions;

// Reducer: selectedThemeSlice.reducer
export default selectedThemeSlice.reducer;

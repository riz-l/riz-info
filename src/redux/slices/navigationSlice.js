// Import: Packages
import { createSlice } from "@reduxjs/toolkit";

// Slice: navigationSlice
export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    status: null,
    isNavigationOpen: false,
  },
  reducers: {
    setIsNavigationOpen: (state) => {
      state.isNavigationOpen = !state.isNavigationOpen;
    },
  },
});

// Actions: setIsNavigationOpen
export const { setIsNavigationOpen } = navigationSlice.actions;

// Reducer: navigationSlice.reducer
export default navigationSlice.reducer;

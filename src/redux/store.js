// Import: Packages
import { configureStore } from "@reduxjs/toolkit";

// Import: Reducers
import selectedThemeReducer from "./slices/selectedThemeSlice";

// Redux Store:
export default configureStore({
  reducer: {
    selectedTheme: selectedThemeReducer,
  },
});

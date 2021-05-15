// Import: Packages
import { configureStore } from "@reduxjs/toolkit";

// Import: Reducers
import globalThemeSlice from "./slices/globalThemeSlice";

// Redux Store:
export default configureStore({
  reducer: {
    globalTheme: globalThemeSlice,
  },
});

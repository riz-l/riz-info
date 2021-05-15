// Import: Packages
import { configureStore } from "@reduxjs/toolkit";

// Import: Reducers
import globalThemeReducer from "./slices/globalThemeSlice";
import navigationReducer from "./slices/navigationSlice";

// Redux Store:
export default configureStore({
  reducer: {
    globalTheme: globalThemeReducer,
    navigation: navigationReducer,
  },
});

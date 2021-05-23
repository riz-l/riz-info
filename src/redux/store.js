// Import: Packages
import { configureStore } from "@reduxjs/toolkit";

// Import: Reducers
import globalThemeReducer from "./slices/globalThemeSlice";
import navigationReducer from "./slices/navigationSlice";
import sanityProjectsReducer from "./slices/sanityProjectsSlice";
import sanitySingleProjectReducer from "./slices/sanitySingleProjectSlice";

// Redux Store:
export default configureStore({
  reducer: {
    globalTheme: globalThemeReducer,
    navigation: navigationReducer,
    sanityProjects: sanityProjectsReducer,
    sanitySingleProject: sanitySingleProjectReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import menuReducer from "./mobileMenuSlice";

const appStore = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
  },
});
export default appStore;

import { configureStore } from "@reduxjs/toolkit";
import factsReducer from "./slices/factsSlice"; // Import the facts slice reducer
import themeReducer from "./slices/themeSlice"; // Import the theme slice reducer

// Configure the Redux store
const store = configureStore({
  reducer: {
    facts: factsReducer, // Register the facts reducer under the "facts" state key
    theme: themeReducer, // Register the theme reducer under the "theme" state key
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Disables the serializable check middleware
      // This is useful if you're storing non-serializable values like functions or class instances
      serializableCheck: false,
    }),
});

// Type representing the entire Redux state tree
export type RootState = ReturnType<typeof store.getState>;

// Type representing the store's dispatch function (for use in typed hooks)
export type AppDispatch = typeof store.dispatch;

// Export the configured store
export default store;

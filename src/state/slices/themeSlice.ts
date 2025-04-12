// src/redux/slices/themeSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Used to persist theme preferences locally

// Possible values for the theme mode
export type ThemeMode = "light" | "dark" | "system";

// Type definition for the theme state
interface ThemeState {
  mode: ThemeMode; // The current theme mode (light, dark, or system default)
  showAdvancedActions: boolean; // Whether to show advanced UI actions
}

// Initial state for the theme slice
const initialState: ThemeState = {
  mode: "system", // Default to using system theme
  showAdvancedActions: true, // Show advanced actions by default
};

// Create the theme slice using Redux Toolkit
const themeSlice = createSlice({
  name: "theme", // Slice name used as prefix in action types
  initialState, // The initial state of the theme slice
  reducers: {
    // Set the theme mode and save it to AsyncStorage
    setThemeMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      AsyncStorage.setItem("THEME_MODE", action.payload); // Persist the selected mode
    },

    // Load the theme mode from storage into the state (used on app start)
    loadThemeMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
    },

    // Toggle the showAdvancedActions flag and persist it
    toggleAdvancedActions(state) {
      state.showAdvancedActions = !state.showAdvancedActions;
      AsyncStorage.setItem(
        "SHOW_ADVANCED_ACTIONS",
        JSON.stringify(state.showAdvancedActions) // Convert boolean to string
      );
    },

    // Load the advanced actions setting from storage into the state
    loadAdvancedActions(state, action: PayloadAction<boolean>) {
      state.showAdvancedActions = action.payload;
    },
  },
});

// Export actions for use in components or thunks
export const {
  setThemeMode,
  loadThemeMode,
  toggleAdvancedActions,
  loadAdvancedActions,
} = themeSlice.actions;

// Export the reducer to include in the Redux store
export default themeSlice.reducer;

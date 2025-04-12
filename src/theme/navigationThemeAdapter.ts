// src/theme/navigationThemeAdapter.ts

import {
  DefaultTheme,
  DarkTheme,
  Theme as NavigationTheme,
} from "@react-navigation/native"; // Importing default and dark themes from React Navigation

// Custom light theme for React Navigation
export const navigationLightTheme: NavigationTheme = {
  ...DefaultTheme, // Inherit base values from the default light theme
  colors: {
    ...DefaultTheme.colors, // Spread existing default colors
    background: "#fff3e0", // App background color
    primary: "#f57c00", // Primary accent color (e.g., buttons, highlights)
    card: "#ffe0b2", // Background color for navigation cards (e.g., tab bar, headers)
    text: "#4e342e", // Primary text color
    border: "#d7ccc8", // Border color for card edges and inputs
    notification: "#d84315", // Notification badge color
  },
};

// Custom dark theme for React Navigation
export const navigationDarkTheme: NavigationTheme = {
  ...DarkTheme, // Inherit base values from the default dark theme
  colors: {
    ...DarkTheme.colors, // Spread existing dark colors
    background: "#1c1c1c", // App background color in dark mode
    primary: "#f57c00", // Primary accent color in dark mode
    card: "#2e2e2e", // Background color for cards (tabs, headers, etc.)
    text: "#fff3e0", // Text color in dark mode
    border: "#4e342e", // Border color in dark mode
    notification: "#ff7043", // Notification badge color
  },
};

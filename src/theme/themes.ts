import { MD3DarkTheme, MD3LightTheme } from "react-native-paper"; // Import Material Design 3 light and dark themes
import type { MD3Theme } from "react-native-paper"; // Type definition for a Material Design 3 theme

// Custom light theme based on MD3LightTheme
export const lightTheme: MD3Theme = {
  ...MD3LightTheme, // Inherit default light theme settings
  colors: {
    ...MD3LightTheme.colors, // Spread default color values
    primary: "#f57c00", // Main accent color (used for buttons, highlights, etc.)
    secondary: "#d84315", // Secondary accent color
    background: "#fff3e0", // App background color
    surface: "#ffe0b2", // Background color for surfaces like cards
    onSurface: "#4e342e", // Text/icon color on top of surface
  },
};

// Custom dark theme based on MD3DarkTheme
export const darkTheme: MD3Theme = {
  ...MD3DarkTheme, // Inherit default dark theme settings
  colors: {
    ...MD3DarkTheme.colors, // Spread default color values
    primary: "#f57c00", // Main accent color in dark mode
    secondary: "#ff7043", // Secondary accent color
    background: "#1c1c1c", // App background color in dark mode
    surface: "#2e2e2e", // Card and surface background in dark mode
    onSurface: "#fff3e0", // Text/icon color on top of surface in dark mode
  },
};

import React from "react";
import {
  NavigationContainer,
  Theme as NavigationTheme,
} from "@react-navigation/native"; // Main navigation container and theme type
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Tab navigation
import { HomeScreen } from "../screens/HomeScreen"; // Home screen component
import { FavoritesScreen } from "../screens/FavoritesScreen"; // Favorites screen component
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Icon library for tab icons
import { SettingsScreen } from "../screens/SettingsScreen"; // Settings screen component

// Create the bottom tab navigator instance
const Tab = createBottomTabNavigator();

// Props for the Navigation component
interface Props {
  theme: NavigationTheme; // Theme object to customize navigation colors (light/dark mode)
}

// Main navigation component
export default function Navigation({ theme }: Props) {
  return (
    // Navigation container wraps the whole navigation system and applies the theme
    <NavigationContainer theme={theme}>
      {/* Tab navigator holds the main tabs of the app */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // Hides the default header for all screens
        }}
      >
        {/* Tab 1: All Cat Facts */}
        <Tab.Screen
          name="Paw-some Facts" // Tab label
          component={HomeScreen} // Corresponding screen component
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cat" color={color} size={size} />
            ),
          }}
        />

        {/* Tab 2: Favorite Cat Facts */}
        <Tab.Screen
          name="Purr-favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={size} />
            ),
          }}
        />

        {/* Tab 3: App Settings */}
        <Tab.Screen
          name="Cat-tings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

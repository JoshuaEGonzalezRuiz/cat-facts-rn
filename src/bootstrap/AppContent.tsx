// src/app/AppContent.tsx
import React from "react";
import { useColorScheme, View, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

import Navigation from "../navigation";
import { RootState } from "../state/store";
import { darkTheme, lightTheme } from "../theme/themes";
import {
  navigationDarkTheme,
  navigationLightTheme,
} from "../theme/navigationThemeAdapter";
import { useLoadUserPreferences } from "./useLoadUserPreferences";

export const AppContent = () => {
  const systemScheme = useColorScheme();
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const isDark =
    themeMode === "dark" || (themeMode === "system" && systemScheme === "dark");

  const loaded = useLoadUserPreferences();

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator
          size="large"
          color={
            isDark ? lightTheme.colors.secondary : darkTheme.colors.secondary
          }
        />
      </View>
    );
  }

  return (
    <>
      <StatusBar
        style={isDark ? "light" : "dark"}
        backgroundColor={
          isDark ? lightTheme.colors.onBackground : darkTheme.colors.onSurface
        }
      />
      <PaperProvider theme={isDark ? darkTheme : lightTheme}>
        <Navigation
          theme={isDark ? navigationDarkTheme : navigationLightTheme}
        />
      </PaperProvider>
    </>
  );
};

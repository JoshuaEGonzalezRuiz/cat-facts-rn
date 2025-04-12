import React from "react";
import { RadioButton, Text, List, Switch } from "react-native-paper"; // UI components from react-native-paper
import { useDispatch, useSelector } from "react-redux"; // Hooks to interact with Redux
import { RootState } from "../state/store"; // Root state type for Redux
import {
  setThemeMode, // Action to change the theme mode
  ThemeMode, // Type for the theme mode
  toggleAdvancedActions, // Action to toggle advanced UI features
} from "../state/slices/themeSlice";

import { ScreenHeader } from "../components/ScreenHeader"; // Reusable header component

// Settings screen that allows users to change theme and toggle advanced actions
export const SettingsScreen = () => {
  const dispatch = useDispatch();

  // Get the current theme mode from Redux state
  const mode = useSelector((state: RootState) => state.theme.mode);

  // Called when the user selects a different theme option
  const handleChange = (value: string) => {
    dispatch(setThemeMode(value as ThemeMode)); // 🔥 Explicit cast to ThemeMode
  };

  // Get the current value of advanced actions toggle
  const showAdvanced = useSelector(
    (state: RootState) => state.theme.showAdvancedActions
  );

  // Toggles the state of advanced actions on/off
  const handleToggleAdvanced = () => {
    dispatch(toggleAdvancedActions());
  };

  return (
    <>
      <ScreenHeader title="Paw-ferences 🎨" />
      <RadioButton.Group onValueChange={handleChange} value={mode}>
        <RadioButton.Item label="Light" value="light" />
        <RadioButton.Item label="Dark" value="dark" />
        <RadioButton.Item label="System Default" value="system" />
      </RadioButton.Group>
      <List.Item
        title="Advanced actions (copy, save image)"
        right={() => (
          <Switch
            value={showAdvanced}
            onValueChange={handleToggleAdvanced} // Toggle handler
          />
        )}
      />
    </>
  );
};

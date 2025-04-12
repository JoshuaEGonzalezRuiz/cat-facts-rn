// src/app/useLoadUserPreferences.ts
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { loadThemeMode, loadAdvancedActions } from "../state/slices/themeSlice";
import { isValidTheme } from "../theme/themeHelpers";

export const useLoadUserPreferences = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      const theme = await AsyncStorage.getItem("THEME_MODE");

      if (theme && isValidTheme(theme)) {
        dispatch(loadThemeMode(theme));
      }

      const advanced = await AsyncStorage.getItem("SHOW_ADVANCED_ACTIONS");
      if (advanced !== null) {
        dispatch(loadAdvancedActions(JSON.parse(advanced)));
      }

      setLoaded(true);
    };

    load();
  }, [dispatch]);

  return loaded;
};

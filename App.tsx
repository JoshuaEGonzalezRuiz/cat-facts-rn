import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as ReduxProvider } from "react-redux";
import store from "./src/state/store";
import { AppContent } from "./src/bootstrap/AppContent";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ReduxProvider store={store}>
        <AppContent />
      </ReduxProvider>
    </GestureHandlerRootView>
  );
}

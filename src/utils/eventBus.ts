// src/utils/eventBus.ts
import mitt from "mitt";

// Definimos los eventos que puede manejar la app
export type AppEvents = {
  showSnackbar: {
    message: string;
    variant?: "info" | "success" | "error" | "warning";
  };
};

export const eventBus = mitt<AppEvents>();

import React from "react";
import { Snackbar, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

export type SnackbarVariant = "info" | "success" | "error" | "warning";

interface Props {
  visible: boolean;
  message: string;
  onDismiss: () => void;
  duration?: number;
  variant?: SnackbarVariant;
  icon?: string;
}

const variantStyles: Record<
  SnackbarVariant,
  { background: string; emoji: string }
> = {
  info: { background: "#A5BFCC", emoji: "ℹ️" },
  success: { background: "#367E18", emoji: "✅" },
  error: { background: "#990000", emoji: "❌" },
  warning: { background: "#FF5B00", emoji: "⚠️" },
};

export const FeedbackSnackbar: React.FC<Props> = ({
  visible,
  message,
  onDismiss,
  duration = 2000,
  variant = "info",
  icon,
}) => {
  const theme = useTheme();
  const { background, emoji } = variantStyles[variant];

  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={duration}
      style={[styles.snackbar, { backgroundColor: background }]}
      wrapperStyle={styles.wrapper}
    >
      <Text style={[styles.message, { color: "#fff" }]}>
        {" "}
        {/* white text for all variants */}
        {icon ?? emoji} {message}
      </Text>
    </Snackbar>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    borderRadius: 16,
    elevation: 6,
    marginHorizontal: 16,
    justifyContent: "center", // 🔥 Centra horizontalmente
    alignItems: "center", // 🔥 Centra verticalmente (por si acaso)
  },
  wrapper: {
    bottom: 32,
  },
  message: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    maxWidth: 300, // ✅ Limita el ancho del texto
  },
});

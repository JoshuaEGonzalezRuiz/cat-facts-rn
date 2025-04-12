import { useEffect, useState } from "react";
import { SnackbarVariant } from "../components/FeedbackSnackbar";
import { eventBus } from "../utils/eventBus";

export const useGlobalSnackbar = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState<SnackbarVariant>("info");

  useEffect(() => {
    const handler = ({
      message,
      variant,
    }: {
      message: string;
      variant?: SnackbarVariant;
    }) => {
      setMessage(message);
      setVariant(variant ?? "info");
      setVisible(true);
    };

    eventBus.on("showSnackbar", handler);
    return () => eventBus.off("showSnackbar", handler);
  }, []);

  return {
    snackbarVisible: visible,
    snackbarText: message,
    snackbarVariant: variant,
    setSnackbarVisible: setVisible,
  };
};

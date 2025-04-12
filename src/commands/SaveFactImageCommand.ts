// src/commands/SaveFactImageCommand.ts
import ViewShot from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import { eventBus } from "../utils/eventBus";

export class SaveFactImageCommand {
  constructor(private viewShotRef: React.RefObject<ViewShot>) {}

  async execute() {
    try {
      const uri = await this.viewShotRef.current?.capture?.();
      if (!uri) throw new Error("Capture failed");

      const permission = await MediaLibrary.requestPermissionsAsync();
      if (!permission.granted) throw new Error("Permission denied");

      await MediaLibrary.saveToLibraryAsync(uri);

      eventBus.emit("showSnackbar", {
        message: "Fact saved to your gallery! 😺",
        variant: "success",
      });
    } catch {
      eventBus.emit("showSnackbar", {
        message: "Failed to save image. 😿",
        variant: "error",
      });
    }
  }
}

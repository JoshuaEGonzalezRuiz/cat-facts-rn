import { Share } from "react-native"; // React Native API for invoking the native share dialog
import { CatFact } from "../models/CatFact"; // Import the CatFact type

// Shares a cat fact using the device's native sharing options
export const shareFact = async (fact: CatFact) => {
  try {
    // Opens the native share dialog with the formatted message
    await Share.share({
      message: `🐱 Fun cat fact:\n\n${fact.fact}`,
    });
  } catch (error) {
    // Logs any error that occurs while trying to share
    console.error("Error while sharing:", error);
  }
};

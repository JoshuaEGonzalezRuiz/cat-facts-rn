// src/utils/clipboard.ts

import * as Clipboard from "expo-clipboard"; // Expo module for accessing the device clipboard
import { CatFact } from "../models/CatFact"; // Import the CatFact type

// Copies a formatted cat fact to the device clipboard
export const copyFactToClipboard = async (fact: CatFact) => {
  await Clipboard.setStringAsync(`🐱 Fun Fact:\n${fact.fact}`);
  // Sets the clipboard content to a fun formatted string with the cat fact
};

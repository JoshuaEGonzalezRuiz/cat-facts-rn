import AsyncStorage from "@react-native-async-storage/async-storage"; // AsyncStorage provides persistent key-value storage
import { CatFact } from "../../models/CatFact"; // Importing the CatFact type

const FAVORITES_KEY = "FAVORITES"; // Key used to store/retrieve favorite facts from AsyncStorage

// Saves an array of favorite CatFacts to AsyncStorage
export const saveFavorites = async (favorites: CatFact[]) => {
  try {
    // Convert the favorites array to a JSON string and store it under FAVORITES_KEY
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Error saving favorites:", error); // Log error if saving fails
  }
};

// Loads favorite CatFacts from AsyncStorage
export const loadFavorites = async (): Promise<CatFact[]> => {
  try {
    // Retrieve the stored value (if any) using the FAVORITES_KEY
    const result = await AsyncStorage.getItem(FAVORITES_KEY);

    // If data exists, parse it from JSON and return it; otherwise return an empty array
    return result ? JSON.parse(result) : [];
  } catch (error) {
    console.error("Error loading favorites from storage:", error); // Log error if loading fails
    return []; // Return empty array as fallback
  }
};

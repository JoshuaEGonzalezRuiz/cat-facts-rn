// src/viewmodels/favoritesViewModel.ts

import { useSelector } from "react-redux"; // Redux hooks for dispatching actions and accessing state
import { RootState } from "../state/store"; // Type for the entire Redux state

// Custom hook that serves as the ViewModel for the Favorites screen
export const useFavoritesViewModel = () => {
  // Selects the list of favorite cat facts from the Redux store
  const favorites = useSelector((state: RootState) => state.facts.favorites);

  // Values and functions returned for use in the Favorites screen
  return {
    favorites, // List of favorite cat facts
  };
};

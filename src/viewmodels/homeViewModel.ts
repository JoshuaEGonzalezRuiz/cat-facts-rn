// src/viewmodels/homeViewModel.ts

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFacts, // Thunk to fetch facts from API
  loadFavoritesFromStorage, // Thunk to load favorites from AsyncStorage
} from "../state/slices/factsSlice";

import { RootState } from "../state/store"; // Type definition for the root Redux state

// Custom hook that acts as the ViewModel for the Home screen
export const useHomeViewModel = () => {
  const dispatch = useDispatch(); // Used to dispatch Redux actions

  // Extract relevant state from Redux store
  const { data, loading, page, favorites } = useSelector(
    (state: RootState) => state.facts
  );

  // Load favorites and initial facts when component mounts
  useEffect(() => {
    dispatch(loadFavoritesFromStorage() as any); // Load saved favorites
    dispatch(fetchFacts(page) as any); // Fetch facts for current page
  }, [dispatch]);

  // Fetch the next page of facts if not already loading
  const loadMore = () => {
    if (!loading) dispatch(fetchFacts(page) as any);
  };

  // Values and functions returned for use in the Home screen component
  return {
    facts: data, // List of loaded cat facts
    favorites, // List of favorite facts
    loading, // Loading status
    loadMore, // Function to fetch more facts
  };
};

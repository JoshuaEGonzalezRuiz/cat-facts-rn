// src/redux/slices/factsSlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CatFact } from "../../models/CatFact";
import { CatFactsRepositoryImpl } from "../../data/repositories/CatFactsRepositoryImpl";

const repository = new CatFactsRepositoryImpl();

export const loadFavoritesFromStorage = createAsyncThunk(
  "facts/loadFavorites",
  async () => {
    return await repository.getFavorites();
  }
);

export const fetchFacts = createAsyncThunk(
  "facts/fetchFacts",
  async (page: number) => {
    return await repository.getFacts(page);
  }
);

const factsSlice = createSlice({
  name: "facts",
  initialState: {
    data: [] as CatFact[],
    favorites: [] as CatFact[],
    page: 1,
    loading: false,
  },
  reducers: {
    toggleFavorite(state, action) {
      const fact = action.payload;
      const index = state.favorites.findIndex((f) => f.fact === fact.fact);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(fact);
      }
      repository.saveFavorites(state.favorites);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFacts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, ...action.payload];
        state.page += 1;
      })
      .addCase(fetchFacts.rejected, (state, action) => {
        console.log("Fetch failed:", action.error);
        state.loading = false;
      })
      .addCase(loadFavoritesFromStorage.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  },
});

export const { toggleFavorite } = factsSlice.actions;
export default factsSlice.reducer;

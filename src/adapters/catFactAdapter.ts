// src/adapters/catFactAdapter.ts
import { CatFact } from "../models/CatFact";

export const adaptCatFactApiResponse = (apiData: any): CatFact[] => {
  return apiData.data.map((item: any) => ({
    fact: item.fact,
    length: item.length,
  }));
};

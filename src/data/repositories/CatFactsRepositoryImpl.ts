import { ICatFactsRepository } from "../../domain/repositories/ICatFactsRepository";
import { getFacts } from "../../api/catFactsApi";
import { loadFavorites, saveFavorites } from "../services/storageService";
import { adaptCatFactApiResponse } from "../../adapters/catFactAdapter";
import { CatFact } from "../../models/CatFact";

export class CatFactsRepositoryImpl implements ICatFactsRepository {
  async getFacts(page: number): Promise<CatFact[]> {
    const response = await getFacts(page);
    return adaptCatFactApiResponse(response);
  }

  async getFavorites(): Promise<CatFact[]> {
    return await loadFavorites();
  }

  async saveFavorites(favorites: CatFact[]): Promise<void> {
    await saveFavorites(favorites);
  }
}

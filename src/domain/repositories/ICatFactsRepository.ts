import { CatFact } from "../../models/CatFact";

export interface ICatFactsRepository {
  getFacts(page: number): Promise<CatFact[]>;
  getFavorites(): Promise<CatFact[]>;
  saveFavorites(favorites: CatFact[]): Promise<void>;
}

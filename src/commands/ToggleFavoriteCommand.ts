// src/commands/ToggleFavoriteCommand.ts
import { CatFact } from "../models/CatFact";
import { AppDispatch } from "../state/store";
import { toggleFavorite } from "../state/slices/factsSlice";
import { eventBus } from "../utils/eventBus";

export class ToggleFavoriteCommand {
  constructor(
    private fact: CatFact,
    private dispatch: AppDispatch,
    private isFavorite: boolean
  ) {}

  execute() {
    this.dispatch(toggleFavorite(this.fact));

    eventBus.emit("showSnackbar", {
      message: this.isFavorite
        ? "Scratched off your list 🐾"
        : "Added to your purr-favorites! 😻",
      variant: this.isFavorite ? "warning" : "success",
    });
  }
}

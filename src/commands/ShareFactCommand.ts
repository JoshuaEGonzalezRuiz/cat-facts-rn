// src/commands/ShareFactCommand.ts
import { CatFact } from "../models/CatFact";
import { shareFact } from "../utils/shareFact";
import { eventBus } from "../utils/eventBus";

export class ShareFactCommand {
  constructor(private fact: CatFact) {}

  async execute() {
    try {
      await shareFact(this.fact);
      eventBus.emit("showSnackbar", {
        message: "Fact shared successfully!",
        variant: "info",
      });
    } catch {
      eventBus.emit("showSnackbar", {
        message: "Failed to share fact.",
        variant: "error",
      });
    }
  }
}

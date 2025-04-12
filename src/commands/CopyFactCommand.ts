// src/commands/CopyFactCommand.ts
import { CatFact } from "../models/CatFact";
import { copyFactToClipboard } from "../utils/clipboard";
import { eventBus } from "../utils/eventBus";

export class CopyFactCommand {
  constructor(private fact: CatFact) {}

  async execute() {
    await copyFactToClipboard(this.fact);
    eventBus.emit("showSnackbar", {
      message: "Copied to clipboard!",
      variant: "success",
    });
  }
}

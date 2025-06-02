import "./style.css";

import { onGuessed } from "./events/onGuessed";

const guessButton = document.getElementById(
  "guess-button"
) as HTMLButtonElement;

if (guessButton) {
  guessButton.addEventListener("click", onGuessed);
}

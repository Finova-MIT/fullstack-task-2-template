import inputValidator from "./inputValidator";

import { createPopup } from "../../components/popup";
import { fetchCurrentPrice } from "../../utils/stockApi";

const guessInput = document.getElementById("guess") as HTMLInputElement;
const priceElements = document.getElementsByClassName(
  "price"
) as HTMLCollectionOf<HTMLSpanElement>;
const successContainer = document.getElementById("success") as HTMLDivElement;
const failureContainer = document.getElementById("failure") as HTMLDivElement;

const onGuessed = async () => {
  if (!guessInput || !priceElements || !successContainer || !failureContainer)
    return createPopup("Error in finding elements");

  const validationError = inputValidator(guessInput);
  if (validationError) return createPopup(validationError);

  const currentPrice = (await fetchCurrentPrice()) || 0;
  const guessedPrice = parseFloat(guessInput.value);
  const diff = Math.abs(guessedPrice - currentPrice);

  for (let i = 0; i < priceElements.length; i++) {
    priceElements[i].textContent = `₹${currentPrice}`;
  }

  if (diff <= 1) {
    successContainer.style.display = "block";
    failureContainer.style.display = "none";
  } else {
    successContainer.style.display = "none";
    failureContainer.style.display = "block";
  }
};

export default onGuessed;

const inputValidator = (guessInput: HTMLInputElement): string | undefined => {
  if (!guessInput.value) return "Please enter a value";

  const guess = parseFloat(guessInput.value);
  if (isNaN(guess)) return "Please enter a valid number";
  if (guess < 0) return "Please enter a positive number";
  if (guess > 1000) return "Too optimistic lol";

  if (guessInput.value.split(".")[1]?.length > 2)
    return "Please enter a number with at most 2 decimal places";
};

export default inputValidator;

function chooseRandomWord(text) {
 if (!text || text.trim() === '') {
    return "";
  }

  // 1. Count the number of words in the string.
  // We assume words are separated by single spaces.
  let wordCount = 1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      wordCount++;
    }
  }

  // 2. Pick a random number corresponding to a word.
  // For example, if there are 3 words, it picks 1, 2, or 3.
  const randomWordIndex = Math.floor(Math.random() * wordCount) + 1;

  // 3. Find the chosen word in the string.
  let currentWord = 1;
  let startIndex = 0;
  // Loop until we find the start of our randomly selected word.
  for (let i = 0; i < text.length && currentWord < randomWordIndex; i++) {
    if (text[i] === ' ') {
      currentWord++;
      startIndex = i + 1;
    }
  }

  // Find the end index of that word.
  let endIndex = text.length; // Default to the end of the string.
  for (let i = startIndex; i < text.length; i++) {
    if (text[i] === ' ') {
      endIndex = i;
      break;
    }
  }

  // 4. Extract the word using the start and end positions.
  return text.substring(startIndex, endIndex);
}

// --- Example Usage ---
let shop = "Engine Foods Garments";
let randomWord = chooseRandomWord(shop);

console.log(`The original string is: "${shop}"`);
console.log(`A randomly chosen word is: "${randomWord}"`);
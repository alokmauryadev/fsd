/**
 * A list of common words to ignore in the frequency analysis.
 */
const stopWords = ["a", "an", "the", "in", "on", "and", "is", "of", "to"];

const sampleText = "The quick, brown fox jumps over the lazy dog. The dog is very lazy!";
/**
 * Analyzes a string of text to provide statistics.
 * @param {string} text - The text to be analyzed.
 * @returns {object} An object containing wordCount, characterCount, and wordFrequency.
 */
const punctuationPattern = /[.,!]/g;

console.time('program')
function analyzeText(text) {
    let output = {
  wordCount: 0,
  characterCount: 0,
  wordFrequency: {
  }
}

    let cleanedData = text.toLowerCase().replace(punctuationPattern,'').split(" ")
    let finalText = cleanedData.filter(element=>!stopWords.includes(element))
    output.wordCount = finalText.length;

    for (const word of finalText) {
        
        output.characterCount += word.length;

        output.wordFrequency[word] = (output.wordFrequency[word] || 0) + 1
    }
    console.log(uniqueWords)
    // finalText.forEach((word) => {
    //     output.wordFrequency[word] = (output.wordFrequency[word] || 0) + 1;
    // });

    return output
}
const analysis = analyzeText(sampleText);
console.log(analysis);

console.timeEnd('program')
/*
Expected Output:
{
  wordCount: 12,
  characterCount: 47,
  wordFrequency: {
    quick: 1,
    brown: 1,
    fox: 1,
    jumps: 1,
    over: 1,
    lazy: 2,
    dog: 2,
    very: 1
  }
}
*/

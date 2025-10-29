function reverseWordsInSentence(sentence) {
    // 1. Split the sentence into an array of words.
    const words = sentence.split(' ');

    // 2. Use map() to create a new array of reversed words.
    const reversedWords = words.map(word => {
        // For each word, apply the same reversal logic you used!
        return word.split('').reverse().join('');
    });

    // 3. Join the new array back into a sentence.
    const finalSentence = reversedWords.join(' ');

    console.log(finalSentence);
}
reverseWordsInSentence("My Name iS Alok")
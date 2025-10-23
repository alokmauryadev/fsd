/**
 * Uses a backtracking algorithm to generate all string combinations.
 *
 * @param {string} inputString The string to expand, e.g., "abc.pqr[2..5].xyz"
 * @returns {string[]} An array of all expanded strings.
 */
function getExpandedStrings(inputString) {
  
  // --- 1. Parse the Input ---
  // This regex captures the name, start, and end of a range.
  const rangeRegex = /(.*)\[(\d+)\.\.(\d+)\]/;
  const parts = inputString.split('.');
  
  const optionsList = parts.map(part => {
    const match = part.match(rangeRegex);
    
    if (match) {
      // It's a range (e.g., "pqr[2..5]")
      const name = match[1];
      const start = parseInt(match[2]);
      const end = parseInt(match[3]);
      
      const options = [];
      for (let i = start; i <= end; i++) {
        options.push(`${name}[${i}]`);
      }
      return options; // e.g., ['pqr[2]', 'pqr[3]', 'pqr[4]', 'pqr[5]']
    } else {
      // It's a static part (e.g., "abc")
      return [part]; // e.g., ['abc']
    }
  });

  // At this point, optionsList is:
  // [
  //   ['abc'], 
  //   ['pqr[2]', 'pqr[3]', 'pqr[4]', 'pqr[5]'], 
  //   ['xyz'], 
  //   ['lmn[1]', 'lmn[2]', 'lmn[3]'], 
  //   ['ijk']
  // ]

  // --- 2. Backtracking (DSA Algorithm) ---
  const results = [];

  /**
   * A recursive helper function to build combinations.
   * @param {number} partIndex - The current index of optionsList we are processing.
   * @param {string[]} currentPath - An array of strings built so far.
   */
  function backtrack(partIndex, currentPath) {
    
    // --- Base Case ---
    // If we have processed all parts, we've built a full combination.
    if (partIndex === optionsList.length) {
      results.push(currentPath.join('.'));
      return;
    }

    // --- Recursive Step ---
    // Get all options for the current part (e.g., ['pqr[2]', 'pqr[3]', ...])
    const currentOptions = optionsList[partIndex];
    
    // Iterate over each option
    for (const option of currentOptions) {
      // 1. Choose: Add the current option to our path
      currentPath.push(option);
      
      // 2. Explore: Recurse to the next part (partIndex + 1)
      backtrack(partIndex + 1, currentPath);
      
      // 3. Unchoose (Backtrack): Remove the option so we can try
      //    the next one in the for-loop on the next iteration.
      currentPath.pop();
    }
  }
  backtrack(0, []);
  
  return results;
}

// --- Example Usage ---
const testString = "abc.pqr[2..5].xyz.lmn[1..3].ijk";
const expandedList = getExpandedStrings(testString);

console.log(`Input: ${testString}\n`);
console.log("Output:");
expandedList.forEach(s => {
  console.log(s);
});

console.log(`\nTotal combinations: ${expandedList.length}`);
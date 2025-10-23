// 1. We must wrap our code in an async function to use 'await'
async function getWeather() {
  
  // 2. This replaces the .catch() block. 
  //    It will "catch" any error that happens inside 'try'.
  try {
    // 3. We 'await' the fetch call. 
    //    'response' will be the actual Response object, not a Promise.
    const response = await fetch('https://wttr.in/London?format=j1');

    // 4. CRITICAL: This is the *exact same* manual error check.
    //    'await' does NOT change this. A 404 will not go to 'catch'.
    if (!response.ok) {
      // We 'throw' an error, which immediately stops the 'try'
      // block and jumps to the 'catch' block.
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 5. We 'await' the .json() call.
    //    'data' will be the actual parsed JSON object.
    const data = await response.json();

    // 6. Now we can just use the data, all in the same block!
    console.log('--- Weather for London ---');
    console.log(`Current Temp: ${data.current_condition[0].temp_C}°C`);
    console.log(`Feels Like:   ${data.current_condition[0].FeelsLikeC}°C`);
    console.log(`Description:  ${data.current_condition[0].weatherDesc[0].value}`);
    
    // You can uncomment this to see the entire massive data object
    // console.log(data);

  } catch (error) {
    // 7. This 'catch' block handles *all* failures:
    //    - Network error (e.g., user is offline)
    //    - Our thrown error (if !response.ok)
    //    - JSON parsing error (if server returns invalid JSON)
    console.error('Failed to fetch weather data:', error);
  }
}

// 8. Call the function to run it
getWeather();
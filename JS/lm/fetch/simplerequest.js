
fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    // 1st step: Handle the initial response (the "covered tray")
    // We'll check if the response was successful
    if (!response.ok) {
      // .ok is a boolean: true if status is 200-299
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    // 2nd step: Parse the body (open the tray)
    // We must return this promise to chain it
    return response.json(); 
  })
  .then(data => {
    // 3rd step: Use the final data (the "food")
    console.log();
  })
  .catch(error => {
    // This .catch() handles errors from *any* part of the chain
    // This includes network errors OR parsing errors
    console.error('There was a problem with your fetch operation:', error);
  });
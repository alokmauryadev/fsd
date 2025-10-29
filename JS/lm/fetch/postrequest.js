// 1. The data we want to send
const newTodo = {
  userId: 1,
  title: 'Learn Fetch API',
  completed: false
};

// 2. The options object, configured for a POST request
const options = {
  method: 'POST',
  headers: {
    // This tells the server to expect JSON
    'Content-Type': 'application/json' 
  },
  // This is the actual data, as a string
  body: JSON.stringify(newTodo)
};

// 3. The fetch call
fetch('https://jsonplaceholder.typicode.com/todos', options)
  .then(response => {
    if (!response.ok) {
      // Check for server errors (e.g., 400 Bad Request)
      throw new Error('HTTP status ' + response.status);
    }
    // A successful POST request often returns the created object
    // (sometimes with its new 'id')
    return response.json(); 
  })
  .then(createdData => {
    console.log('Success! Server responded with:', createdData);
    // The API would typically respond with something like:
    // { userId: 1, title: 'Learn Fetch API', completed: false, id: 201 }
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
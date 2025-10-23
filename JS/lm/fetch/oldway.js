// The "old way" using XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');

// We have to listen for "events" to know what's happening
xhr.onload = function() {
  if (xhr.status === 200) {
    // Success!
    console.log(JSON.parse(xhr.responseText));
  } else {
    // An error from the server (like 404, 500)
    console.error('Request failed. Status:', xhr.status);
  }
};

xhr.onerror = function() {
  // A network-level error (e.g., no internet)
  console.error('Network error occurred');
};

xhr.send();
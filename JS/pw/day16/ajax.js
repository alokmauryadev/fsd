// Select elements
let postDiv = document.querySelector(".posts");
let nameInput = document.getElementById("username");
let btn = document.getElementById("btn");

function getPosts() {

  let username = nameInput.value

  if (username === "") {
    postDiv.innerText = "";
    return;
  }

  console.log("Checking username:", username);

  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://jsonplaceholder.typicode.com/users?name=${username}`, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);

      if (data.length === 0) {
        postDiv.innerText = `You can take this Username "${username}".`;
      } else {
        postDiv.innerText = `Username "${username}" is already taken.`;
      }

    } else {
      console.error('Error fetching posts: ', xhr.status);
    }
  };

  xhr.onerror = function () {
    console.error('Request failed');
  };

  xhr.send();
}

// Call on every key press
nameInput.addEventListener("blur", () => {
  getPosts();
});

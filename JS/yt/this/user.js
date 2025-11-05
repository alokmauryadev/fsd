let userForm = document.getElementById("userForm");
userForm.addEventListener("submit", addUser);
function addUser(event) {
  event.preventDefault()
  const name = document.getElementById("name");
  const role = document.getElementById("role");
  const bio = document.getElementById("bio");
  const photoURL = document.getElementById("photoURL");
  const users = document.querySelector(".users");

 if (!name.value || !role.value || !bio.value || !photoURL.value) {
      alert("Please fill in all fields.");
      return;
  }

  const userdiv = document.createElement("div");
  userdiv.classList.add("user");
  userdiv.innerHTML = `
    <div class="profilePhoto"><img src="${photoURL.value}" alt=""></div>
    <div class="profileDetails">
      <span class="name">${name.value}</span>
      <span class="role">${role.value}</span>
      <span class="bio">${bio.value}</span>
    </div>
  `;
users.appendChild(div);
userForm.reset();

}

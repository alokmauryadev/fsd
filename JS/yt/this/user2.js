let form = document.getElementById("userForm");
const username = document.getElementById("name");
const role = document.getElementById("role");
const bio = document.getElementById("bio");
const photoURL = document.getElementById("photoURL");

const userManager ={
    users:[],
    roles:[{designer: "UI/UX Designer"},{engineer: "Backend Engineer"},{developer:"Full Stack Developer"}],
    init: function(){
        form.addEventListener("submit",this.submitForm.bind(this))
    },
    submitForm: function(e){
        e.preventDefault();
        this.addUser();
    },
    addUser: function(){
            let userRole= this.roles.filter((e)=>role.value in e)
            this.users.push({
            username: username.value,
            role: userRole.map(e=>e[role.value]),
            bio:bio.value,
            profileURL:photoURL.value,
        })
        form.reset();
        this.renderUI();
    },
    renderUI: function(){
     document.querySelector(".users").innerHTML = "";
        this.users.forEach((user)=>{
              const userdiv = document.createElement("div");
  userdiv.classList.add("user");
  userdiv.innerHTML = `
    <div class="profilePhoto"><img src="${user.profileURL}" alt=""></div>
    <div class="profileDetails">
      <span class="name">${user.username}</span>
      <span class="role">${user.role}</span>
      <span class="bio">${user.bio}</span>
    </div>
  `;
    document.querySelector(".users").appendChild(userdiv);

    userdiv.addEventListener("click",(event)=>this.removeUser(event.currentTarget))
        })
    },
    removeUser: function(div) {
        // Get username from clicked div
        const username = div.querySelector('.name').textContent;
        // Remove from array
        this.users = this.users.filter(user => user.username !== username);
        // Render UI again
        this.renderUI();
    }
};
userManager.init();
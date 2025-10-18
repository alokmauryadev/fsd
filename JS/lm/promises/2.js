const fetchProfile = () => new Promise(resolve => {
  setTimeout(() => resolve({ username: "Alok" }), 500);
});

const fetchNotifications = () => new Promise(resolve => {
  setTimeout(() => resolve([ "New message", "New friend request" ]), 1000);
});

Promise.all([fetchProfile(),fetchNotifications()]).then((values)=>{
    console.log("Profile",values[0])
    console.log("Notifications",values[1])
})

const fastError = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("I failed first!")), 500);
});

const slowSuccess = new Promise(resolve => {
  setTimeout(() => resolve("I succeeded, but too late..."), 1000);
});

Promise.race([fastError, slowSuccess])
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.log("Error:", error.message);
  });

  const p1 = Promise.resolve("Success");
const p2 = Promise.reject(new Error("Failure"));
const p3 = Promise.resolve("Another Success");

Promise.allSettled([p1, p2, p3])
  .then(results => {
    console.log(results);
  });
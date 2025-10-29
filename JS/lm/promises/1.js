function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id !== 101) return reject(new Error("User not found!"));
      resolve({ id: id, name: "Alok" });
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId !== 101) return reject(new Error("Posts not found!"));
      resolve([{ id: 1, content: "Hello!" }]);
    }, 1000);
  });
}

function fetchPostComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (postId !== 1) return reject(new Error("Comments not found!"));
      resolve([{ content: "Great post!" }]);
    }, 1000);
  });
}

fetchUser(101).finally(()=>{
    console.log("1. Starting data fetch...");
}).then((user)=>{
    console.log("User Id ",user.id)
    console.log("Name ", user.name)
    return fetchUserPosts(user.id);
}).then((posts)=>{
    console.log(posts)
    const firstPostId = posts[0].id;
    return fetchPostComments(firstPostId)
}).then((comments)=>{
    console.log(comments)
}).catch(error=>{
    console.error("An error occurred in the chain:", error.message)
}).finally(()=>{
    console.log("3. Data fetch complete.")
});
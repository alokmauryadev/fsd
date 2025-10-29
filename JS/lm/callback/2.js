// Function 1: Gets the user data
function fetchUser(id, callback) {
  setTimeout(() => {
    if (id !== 101) {
      callback(new Error("User not found!"), null);
    } else {
      callback(null, { id: id, name: "Alok" });
    }
  }, 1000);
}

// Function 2: Gets posts for a given user ID
function fetchUserPosts(userId, callback) {
  setTimeout(() => {
    const posts = [ { id: 1, content: "Hello!" } ];
    if (userId !== 101) {
      callback(new Error("Could not find posts for user."), null);
    } else {
      callback(null, posts);
    }
  }, 1000);
}

// Function 3: Gets comments for a given post ID
function fetchPostComments(postId, callback) {
  setTimeout(() => {
    const comments = [ { content: "Great post!" } ];
    if (postId !== 1) {
      callback(new Error("Could not find comments for post."), null);
    } else {
      callback(null, comments);
    }
  }, 1000);
}
// We start the process by calling fetchUser
fetchUser(101, (error,user) => {
    if(error===null){
  console.log("User found:", user.name);

    
  // Now, we use the user.id to make the next call
  fetchUserPosts(user.id, (error,posts) => {
        if(error===null){

    posts.forEach(e => {
        if(e.userId===user.id){
            console.log("Posts found:", e);
        }
    });

    fetchPostComments(2,(error,postcomment)=>{
    if(error===null){
        postcomment.forEach(e => {
            console.log("Comments found:", e);
        });}
             else{
        console.log(error);
    }
       
    })}
     else{
        console.log(error);
    }

  });

    }
    else{
        console.log(error);
    }
});
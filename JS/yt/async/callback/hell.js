function getProfile(username,cb){
    console.log("Fetching Profile")
    setTimeout(()=>{
        console.log( `profile fetched of ${username}`);
        cb({id:212, username})
    },2000)
}
{
function getPosts(id,cb){
    console.log("Fetching Posts")
    setTimeout(()=>{
        console.log(`Posts Fetched for: ${id}`);
        cb({id,postId:121,posts:["post 1","post 2"]})
    },1000)
}

function getComments(id,cb){
    console.log("Fethcing Comments...")
    setTimeout(()=>{
        console.log(`Commends Fetched for: ${id}`)
        cb({id,comments:[1,2,3,4,5]})
    },1000)
}

getProfile("harsh",function(profileData){
    console.log(profileData)
    getPosts(profileData.id,(posts)=>{
        console.log(posts)
        getComments(posts.postId,(comments)=>{
            console.log(comments)
        })
    })
})}



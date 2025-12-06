async function fetchData() {
    console.log("Before api calls");

    try {
        // Trigger both fetches simultaneously
        const [postResponse, userResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts/1"),
            fetch("https://jsonplaceholder.typicode.com/users")
        ]);

        console.log("After both finished");
        
        // Note: fetch returns a Response object, not the JSON data directly.
        console.log(postResponse); 
        console.log(userResponse);
        
    } catch (error) {
        console.error("One or both requests failed:", error);
    }
}

fetchData();

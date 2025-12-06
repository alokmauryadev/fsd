let timer; // debounce timer

// Debounce function
function debounce(fun, delay) {
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fun.apply(this, args), delay);
    };
}

// Actual API call
function searchUsers(query) {
    if (!query) {
        document.getElementById("results").innerHTML = "";
        return;
    }

    fetch(`https://api.freeapi.app/api/v1/public/randomusers`)
        .then(res => res.json())
        .then(data => {
            const filtered = data.filter(user =>
                user.name.toLowerCase().includes(query.toLowerCase())
            );

            renderResults(filtered);
        })
        .catch(err => {
            console.error("API Error:", err);
        });
}

function renderResults(users) {
    const div = document.getElementById("results");

    if (users.length === 0) {
        div.innerHTML = "<p>No users found</p>";
        return;
    }

    div.innerHTML = users
        .map(u => `<p><strong>${u.name}</strong> — ${u.email}</p>`)
        .join("");
}

const debouncedSearch = debounce(searchUsers, 500);

// Input event listener
document.getElementById("searchInput").addEventListener("input", function () {
    debouncedSearch(this.value);
});

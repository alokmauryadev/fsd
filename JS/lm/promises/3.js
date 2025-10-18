// --- Here are your "APIs" ---
// (Do not modify these)

function fetchUserLocation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success
      resolve({ city: "Lucknow", country: "India" });
      
      // --- UNCOMMENT THIS LINE TO TEST A FAILURE ---
    //   reject(new Error("Failed to fetch location."));
    }, 500); // 500ms
  });
}

function fetchWeatherForecast() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ temp: 30, condition: "Sunny" });
    }, 800); // 800ms
  });
}

function fetchLocalNews() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Headline 1: City Thrives", "Headline 2: New Park Opens"]);
    }, 300); // 300ms
  });
}

// --- Write your solution below ---

async function fetchDashboardData() {
  try {
const results = await Promise.all([
      fetchUserLocation(),
      fetchWeatherForecast(),
      fetchLocalNews()
    ]);

    // 2. Destructure the results array for clarity
    const [location, weather, news] = results;

    // 3. This code only runs if ALL promises fulfill
    console.log("--- Dashboard Loaded Successfully ---");
    console.log("Location:", location.city);
    console.log("Weather:", `${weather.temp}°C, ${weather.condition}`);
    console.log("Headlines:", news.join(", "));

  } catch (error) {
    // 4. If ANY promise in Promise.all rejects,
    // the 'await' will throw an error and we jump here.
    console.error("Failed to load dashboard:", error.message);
  }
}

// Call your function to test it
fetchDashboardData();
let citynameInput = document.getElementById("cityname")
let city = document.querySelector(".city")
let tempNumber = document.getElementById("tempn")
let tempStatus = document.getElementById("tempstatus")

tempNumber.textContent = "_ _"
async function fetchWeatherData(city){
    try{
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
        const geores = await fetch(geoUrl)
        const geodata = await geores.json()

        const results = geodata.results
        const {latitude, longitude} = results[0]
        console.log(geodata)

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=uv_index_max&timezone=auto`;
        const weatherRes = await fetch(weatherUrl)
        const weatherData = await weatherRes.json()
        console.log(weatherData)
        let currentWeather = weatherData.current
        tempNumber.textContent = currentWeather.apparent_temperature
    }catch(e){
        console.log(e)
    }
}

fetchWeatherData("Lucknow")

citynameInput.addEventListener("keyup",(e)=>{
    if(e.code=="Enter"){
        fetchWeatherData(citynameInput.value)
    }
})
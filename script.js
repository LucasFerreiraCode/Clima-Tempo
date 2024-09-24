const searchInput = document.querySelector(".search-input");
const currentWeatherDiv = document.querySelector(".current-weather");

const API_KEY = "2072570e7c7b4afa9e6192309242409";

const getWeatherDetails = async (cityName) => {
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}`;

    try {
        //fetch weather data form the API and parse the response as JSON
        const response = await fetch(API_URL);
        const data = await response.json();

        //Extract current weather details
        const temperature = data.current.temp_c;
        const description = data.current.condition.text;

        currentWeatherDiv.querySelector(".temperature").innerHTML = `${temperature}<span>°C</span>`

        console.log(data)
    } catch (error) {
        console.log(error);
    }
        
}

//handle user input in the search box
searchInput.addEventListener("keyup", (e) => {
    const cityName = searchInput.value.trim();

    if (e.key == "Enter" && cityName) {
        getWeatherDetails(cityName);
    }
});
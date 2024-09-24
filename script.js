const searchInput = document.querySelector(".search-input");

const API_KEY = "2072570e7c7b4afa9e6192309242409";

const getWeatherDetails = async (cityName) => {
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}`;

    try {
        //fetch weather data form the API and parse the response as JSON
        const response = await fetch(API_URL);
        const data = await response.json();

        const temperature = 
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
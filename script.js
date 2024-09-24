const searchInput = document.querySelector(".search-input");

const API_KEY = "5534b8884fb24388939102358240908";

const getWeatherDetails = async (cityName) => {
    const API_URL = 'http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}';

    try {
        //fetch weather data form the API and parse the response as JSON
        const response = await fetch(API_URL);
        const data = await response.json();

        console.log(data)
    } catch (error) {

    }
        
}

//handle user input in the search box
searchInput.addEventListener("keyup", (e) => {
    const cityName = searchInput.value.trim();

    if (e.key == "Enter" && cityName) {
        getWeatherDetails(cityName);
    }
});
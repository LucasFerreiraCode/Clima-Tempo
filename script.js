const searchInput = document.querySelector(".search-input");

const getWeatherDetails = (cityName) => {
    const API_URL = 'http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}';
}

searchInput.addEventListener("keyup", (e) => {
    const cityName = searchInput.value.trim();

    if (e.key == "Enter" && cityName) {
        getWeatherDetails(cityName);
    }
});
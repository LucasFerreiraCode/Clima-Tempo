const searchInput = document.querySelector(".search-input");
const currentWeatherDiv = document.querySelector(".current-weather");

const API_KEY = "2072570e7c7b4afa9e6192309242409";

//weather codes for mapping to custom icons
const weatherCodes = {
    clear: [1000],
    clouds: [1003, 1006, 1009],
    mist: [1030, 1135, 1147],
    rain: [1063, 1150, 1153, 1168, 1171, 1180, 1183, 1198, 1201, 1240, 1243, 1246, 1273, 1276],
    moderte_heavy_rain: [1186, 1189, 1192, 1195, 1243, 1246],
    snow: [1066, 1069, 1072, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264, 1279, 1282],
    thunder: [1087, 1279, 1282],
    thunder_rain: [1273, 1276]
}

const getWeatherDetails = async (cityName) => {
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}`;

    try {
        //fetch weather data form the API and parse the response as JSON
        const response = await fetch(API_URL);
        const data = await response.json();

        //Extract current weather details
        const temperature = Math.floor(data.current.temp_c);
        const description = data.current.condition.text;
        const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(data.current.condition.code))

        //update the current weather display
        currentWeatherDiv.querySelector(".weather-icon").src = `./img/.svg`;
        currentWeatherDiv.querySelector(".temperature").innerHTML = `${temperature}<span>°C<span>`;
        currentWeatherDiv.querySelector(".description").innerText = description;

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
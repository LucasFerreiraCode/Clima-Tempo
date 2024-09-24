const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("keyup", () => {
    const cityName = searchInput.value.trim();

    if(e.key == "Enter" && cityName) {
        console.log(cityName);
    }
});
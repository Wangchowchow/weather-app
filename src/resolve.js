const resolve = (() => {
    function resolveData(data) {
        if (!data) return;

        const searchResult = document.querySelector(".search-result");
        searchResult.classList.add("active");

        const cityName = document.querySelector(".city-name");
        const temperature = document.querySelector(".temperature");
        const feelsLike = document.querySelector(".feels-like");
        const humidity = document.querySelector(".humidity");
        const wind = document.querySelector(".wind");

        cityName.textContent = `${data.cityName}`;
        temperature.textContent = `${data.temperature} °C`;
        feelsLike.textContent = `Feels like: ${data.feelsLike} °C`;
        humidity.textContent = `Humidity: ${data.humidity} %`;
        wind.textContent = `Wind: ${data.wind} km/h`;
    }

    return {resolveData};
})();

export default resolve;
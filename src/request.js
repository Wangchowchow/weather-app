const request = (() => {
    async function requestData(city) {
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=39927cf8afc65b9b7ed1c185506f1814`;
        try {
            const response = await fetch(api, {mode: "cors"});
            if (!response.ok) throw new Error(`City/Region ${city} not found`);
            const data = convertData(await response.json());
            return data;
        } catch (error) {
            alert(error);
            return null;
        }
    }
    return {requestData};

    function convertData(data) {
        const {
            name: cityName,
            main: {temp: temperature, feels_like: feelsLike, humidity},
            wind: {speed: wind},
        } = data;
        return {cityName, temperature, feelsLike, humidity, wind};
    }
})();

export default request;
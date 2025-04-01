const apiKey = "your_api_key"; // Replace with your OpenWeatherMap API Key

async function getWeather() {
    const city = document.getElementById("city").value;
    const weatherInfo = document.getElementById("weather-info");

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    weatherInfo.innerHTML = "Loading...";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            weatherInfo.innerHTML = "❌ City not found!";
        } else {
            weatherInfo.innerHTML = `
                <h3>📍 ${data.name}, ${data.sys.country}</h3>
                <p>🌡 Temperature: ${data.main.temp}°C</p>
                <p>⛅ Weather: ${data.weather[0].description}</p>
            `;
        }
    } catch (error) {
        console.log(error);
        weatherInfo.innerHTML = "⚠️ Error fetching data.";
    }
}

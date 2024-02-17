export function displayWeatherData(location) {
    console.log(`Display weather data for: ${location}`);
    const weatherDiv = document.querySelector("#weather-data");
    const city = document.createElement("h1");
    const country = document.createElement("h4");
    const timeZone = document.createElement("p");
    const tempC = document.createElement("h2");
    const tempF = document.createElement("h2");
    const conditionText = document.createElement("h2");
    const icon = document.createElement("img");
    const uv = document.createElement("p");
    const windSpeedK = document.createElement("p");
    const windSpeedM = document.createElement("p");

    city.textContent = location.city;
    country.textContent = location.country;
    timeZone.textContent = location.timeZone;
    tempC.textContent = location.tempC;
    tempF.textContent = location.tempF;
    conditionText.textContent = location.conditionText;
    icon.src = location.icon;
    uv.textContent = location.uv;
    windSpeedK.textContent = location.windSpeedK;
    windSpeedM.textContent = location.windSpeedM;

    weatherDiv.appendChild(city);
    weatherDiv.appendChild(country);
    weatherDiv.appendChild(timeZone);
    weatherDiv.appendChild(conditionText);
    weatherDiv.appendChild(icon);
    weatherDiv.appendChild(tempC);
    weatherDiv.appendChild(uv);
    weatherDiv.appendChild(windSpeedK);
}
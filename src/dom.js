export function displayWeatherData(location) {
    console.log(`Display weather data for: ${location}`);
    const weatherDiv = document.querySelector("#weather-data");
    const cityCountry = document.createElement("h1");
    const timeZone = document.createElement("p");
    const tempC = document.createElement("h2");
    const tempF = document.createElement("h2");
    const conditionText = document.createElement("h2");
    const icon = document.createElement("img");
    const uv = document.createElement("p");
    const windSpeedK = document.createElement("p");
    const windSpeedM = document.createElement("p");

    cityCountry.textContent = `${location.city} (${location.country})`;
    timeZone.textContent = location.timeZone;
    tempC.textContent = `Temperature: ${location.tempC}˚C`;
    tempF.textContent = `Temperature: ${location.tempF}˚F`;
    conditionText.textContent = location.conditionText;
    icon.src = location.icon;
    uv.textContent = `UV index: ${location.uv}`;
    windSpeedK.textContent = `Wind speed: ${location.windSpeedKMH} km/h`;
    windSpeedM.textContent = `Wind speed: ${location.windSpeedMPH} m/h`;

    weatherDiv.appendChild(cityCountry);
    weatherDiv.appendChild(timeZone);
    weatherDiv.appendChild(conditionText);
    weatherDiv.appendChild(icon);
    weatherDiv.appendChild(tempC);
    weatherDiv.appendChild(uv);
    weatherDiv.appendChild(windSpeedK);
}
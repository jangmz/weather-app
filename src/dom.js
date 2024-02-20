export function displayWeatherData(location) {
    console.log(`Display weather data for: ${location}`);

    const pageBody = document.body;
    const weatherDiv = document.querySelector("#weather-data");

    // change weather data div to visible
    if (weatherDiv.style.display === "") {
        weatherDiv.style.display = "grid"; // none
    }

    // clear current div
    clearSubElements(weatherDiv);

    // creating all elements
    const cityCountry = document.createElement("div");
    const timeZone = document.createElement("div");
    const tempC = document.createElement("div");
    const tempF = document.createElement("div");
    const conditionText = document.createElement("div");
    const icon = document.createElement("img");
    const uv = document.createElement("div");
    const windSpeedK = document.createElement("div");
    const windSpeedM = document.createElement("div");

    // set IDs
    cityCountry.id = "city-country";
    timeZone.id = "time-zone";
    tempC.id = "temp-c";
    tempF.id = "temp-f";
    conditionText.id = "conditions";
    icon.id = "icon";
    uv.id = "uv";
    windSpeedK.id = "windspeed-kmh";
    windSpeedM.id = "windspeed-mph";

    // set text
    cityCountry.textContent = `${location.city} (${location.country})`;
    timeZone.textContent = location.timezone;
    tempC.textContent = `${location.tempC}˚C`;
    tempF.textContent = `${location.tempF}˚F`;
    conditionText.textContent = location.conditionText;
    icon.src = location.icon;
    uv.textContent = `UV index: ${location.uv}`;
    windSpeedK.textContent = `Wind speed: ${location.windSpeedKMH} km/h`;
    windSpeedM.textContent = `Wind speed: ${location.windSpeedMPH} m/h`;

    // set css classes
    if (location.tempC >= 20) {
        pageBody.classList = "hot-n-sunny";
    } else if (location.tempC < 20 && location.tempC >= 15) {
        pageBody.classList = "hot-n-cold";
    } else {
        pageBody.classList = "cold";
    }

    // adding elements to the page
    weatherDiv.appendChild(cityCountry);
    weatherDiv.appendChild(timeZone);
    weatherDiv.appendChild(conditionText);
    weatherDiv.appendChild(icon);
    weatherDiv.appendChild(tempC);
    weatherDiv.appendChild(uv);
    weatherDiv.appendChild(windSpeedK);
}

export function displayError(error) {
    console.log(error);
}

function clearSubElements(parentElement) {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}  
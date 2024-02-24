import "./styles/main.css";
import "./eventListeners.js";
import "./dom.js";
import { displayWeatherData, displayError } from "./dom.js";

class WeatherInfo {
    constructor(city, country, timezone, tempC, tempF, humidity, lastUpdated, uv, conditionText, icon, windSpeedKMH, windSpeedMPH) {
        this.city = city,
        this.country = country,
        this.timezone = timezone,
        this.tempC = tempC,
        this.tempF = tempF,
        this.humidity = humidity,
        this.lastUpdated = lastUpdated,
        this.uv = uv,
        this.conditionText = conditionText,
        this.icon = icon,
        this.windSpeedKMH = windSpeedKMH,
        this.windSpeedMPH = windSpeedMPH
    }
}

function parseWeatherData(data) {
    const weatherDataObj = new WeatherInfo(
        data.location.name,
        data.location.country,
        data.location.tz_id,
        data.current.temp_c,
        data.current.temp_f,
        data.current.humidity,
        data.current.last_updated,
        data.current.uv,
        data.current.condition.text,
        data.current.condition.icon,
        data.current.wind_kph,
        data.current.wind_mph
        )
    
    return weatherDataObj;
}

async function weatherFetch(location) {
    try {
        // fetching data
        const weatherPromise = await fetch(`https://api.weatherapi.com/v1/current.json?key=fd8dc2d5fda54d06a95141222240102&q=${location}`, { mode: "cors" });

        if (!weatherPromise.ok) {
            throw new Error("Failed to fetch data!");
        } else {
            // getting json file
            const weatherJson = await weatherPromise.json();
            const weatherData = parseWeatherData(weatherJson);
            
            console.log(weatherData);
            console.log("Finished fetching");

            return weatherData;
        }
    } catch(error) {
        console.error("Error: " + error.message);
        displayError(error.message);
    }
}

export async function userLocationInput(location) {
    const loadingDiv = document.querySelector("#loading");

    loadingDiv.style.display = "block";

    // waits for the weather object to be returned and after that data is displayed to the pages
    try {
        const weatherData = await weatherFetch(location);

        console.log(weatherData);

        if (weatherData === undefined) {
            throw new Error("This city does not exist!");
        }

        loadingDiv.style.display = "";

        displayWeatherData(weatherData);
    } catch (error) {
        loadingDiv.style.display = "";
        console.error("Error: " + error.message);
    }
    console.log("Finished displaying");
}

// fetches a gif and returns URL of the gif
export async function fetchGif(query) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ZgIwQmQDUIY1PVfPt7hyWL0eLYrTvxNh&s=${query}`, {mode: "cors"});
        if (!response.ok) {
            throw new Error("Cannot fetch data!");
        }
        
        const gifData = await response.json();
        //console.log(gifData.data.images.original.url);
        const imageSource = gifData.data.images.original.url; 

        return imageSource;
    } catch (error) {
        console.log(`Error occured: ${error}`);
    }
}
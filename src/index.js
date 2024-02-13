import "./styles/main.css";

async function weatherFetch(location) {
    const weatherPromise = await fetch(`https://api.weatherapi.com/v1/current.json?key=fd8dc2d5fda54d06a95141222240102&q=${location}`, { mode: "cors" });
    const weatherData = await weatherPromise.json();
    
    console.log(weatherData);
    console.log(`Weather in ${weatherData.location.name}, ${weatherData.location.country}: ${weatherData.current.condition.text} (${weatherData.current.temp_c}˚C)`);
}

weatherFetch("Ljubljana");


/*

[x] Set up a blank HTML document with the appropriate links to your JavaScript and CSS files.
[x] Write the functions that hit the API. You’re going to want functions that can 
    take a location and return the weather data for that location. For now, just console.log() 
    the information.
[] Write the functions that process the JSON data you’re getting from the API and return 
    an object with only the data you require for your app.
    Data needed: 
        -Country, location
        -timezone
        -temperature in C and F
        -feels like in C and F
        -humidity
        -last updated
        -uv index
        -condition text & icon
        -wind speed in kmh and mph
[] Set up a form that will let users input their location and will fetch the weather info 
    (still just console.log() it).
[] Display the information on your webpage!
[] Add any styling you like!
[] Optional: add a ‘loading’ component that displays from the time the form is 
    submitted until the information comes back from the API. Use DevTools to test 
    for low-end devices.

*/
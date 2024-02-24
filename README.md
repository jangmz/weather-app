# Weather Web Application

Welcome to the Weather Web Application! This application allows users to fetch weather information for a specific location and provides relevant details including temperature, humidity, UV index, and wind speed. Additionally, it dynamically displays weather-related GIFs based on the current weather conditions.

## Preview
Click [HERE](https://jangmz.github.io/weather-app/) to see the app.

## Features
Fetches real-time weather data from the WeatherAPI
Utilizes the GIPHY API to display relevant GIFs
Presents weather information in both Celsius and Fahrenheit
Responsive design for a seamless user experience

## Technologies Used
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) (ES6+)
- ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
- ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
- ![Debian](https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white)
- ![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
- ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Installation
### To run the Weather Web Application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm: npm install
4. Build the project using Webpack: npm run build
5. Open the index.html file in your preferred web browser.

## Usage
1. Enter the desired location in the provided input field.
2. Click on the "Get Weather" button to fetch weather information.
3. Enjoy the weather details along with a relevant GIF!

## Code Overview
The application consists of the following main components:

- index.html: Provides the structure of the web page.
- main.css: Defines the styles for the application.
- eventListeners.js: Contains event listeners for user interactions.
- dom.js: Handles DOM manipulation and displays weather data and error messages.
- index.js: Orchestrates the fetching of weather data and GIFs.
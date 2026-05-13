🌤️ Weather App

A simple and elegant weather application that provides real-time weather information for any city worldwide. Built with HTML, CSS, and JavaScript, this app fetches data from the OpenWeatherMap API.

✨ Features

• Real-time Weather Data: Get current temperature, humidity, and wind speed

• City Search: Search for weather in any city worldwide

• Dynamic Weather Icons: Visual representation of weather conditions

• Responsive Design: Works seamlessly on desktop and mobile devices

• User-friendly Interface: Clean and intuitive design

🚀 Demo

    Live Demo (Add your deployed link here)

📋 Prerequisites

• Before you begin, ensure you have:

• A modern web browser (Chrome, Firefox, Safari, Edge)

• Internet connection for API calls

• Text editor (VS Code recommended)

• OpenWeatherMap API key (free)

🛠️ Installation

1.Clone the repository

    git clone https://github.com/yourusername/weather-app.git
    cd weather-app

2.Get an API key

    • Visit OpenWeatherMap

    • Sign up for a free account

    • Get your API key from the dashboard

3.Add your API key

    • Open index.js

    • Replace the API key with your own:

4.Add weather images

    • Create an assets folder in the project root

    • Add the following images:
        1sunny.webp
        2.rain.jpeg
        3.clear.png
        4.clouds.png
        5.snow.png

🎮 How to Use

1.Open the application

    • Double-click index.html or use Live Server in VS Code

2.Search for a city

    • Type a city name in the search box (e.g., "London", "Tokyo", "New York")
    • Click the search icon or press Enter

3.View weather information

    • Current temperature in Celsius

    • Weather description

    • Humidity percentage

    • Wind speed in Km/s

    • Weather condition image

🎯 Features in Detail

Weather Conditions Displayed
•☀️ Clear: Sunny weather

    •☁️ Clouds: Cloudy conditions

    •🌧️ Rain: Rainy weather

    •❄️ Snow: Snowy conditions

Data Displayed
• Temperature (°C)

    • Humidity (%)

    • Wind Speed (Km/s)

    • Weather Description

🛠️ Technologies Used

    1.HTML5: Structure and layout

    2.CSS3: Styling, Flexbox, responsive design

    3.JavaScript (ES6+):

        • Async/Await for API calls

        • Fetch API

        • DOM manipulation

        • Event handling

    4.OpenWeatherMap API: Weather data provider

    5.Font Awesome: Icons

🔧 API Reference

This project uses the OpenWeatherMap Current Weather Data API

API Endpoint:
https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}

🐛 Known Issues
• No error handling for invalid city names

    • API key is exposed in the code (consider using environment variables)

    • Limited to 5 weather conditions

    • No loading animation during API calls

🔮 Future Improvements

    • Add 5-day weather forecast

    • Implement geolocation for automatic city detection

    • Add more weather conditions (thunderstorm, mist, etc.)

    • Include error handling and user feedback

    • Add loading animations

    • Save recent searches

    • Toggle between Celsius and Fahrenheit

    • Add weather maps

    • Dark/Light theme toggle


🙏 Acknowledgments

    • OpenWeatherMap for providing the free weather API

    • Font Awesome for the beautiful icons

    • Icons and images from various free sources

📞 Contact

    ARULMANI S - arulmanisasi174@gmail.com

    Project Link: https://github.com/sarulmani/weather-app

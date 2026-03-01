let city_input = document.getElementById('city')
let city_search = document.getElementById('search_icon')
// ! temperature
let img = document.getElementById('display_image')
let temp = document.getElementById('temp')
// ! humidity
let hum = document.getElementById('hum')
console.log(hum)

// ! Wind
let wind = document.getElementById('wind')

let description = document.getElementById('description')

// ! writing the functionality
let checkWeather = async (city) => {
    let api = "6a40c289a16cab027993879c5c319b62"
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`)
    let weather = await data.json()
    console.log(weather)
    temp.innerHTML = `${Math.round(weather.main.temp)} <sup>o</sup>C`;
    hum.innerHTML = `${weather.main.humidity}%`;
    wind.innerHTML = `${weather.wind.speed}Km/s`;
    description.innerHTML = weather.weather[0].main

    if (weather.weather[0].main == "Rain") {
        img.src = './assets/rain.jpeg'
    }
    else if (weather.weather[0].main == "Clear") {
        img.src = './assets/clear.png'
    }
    else if (weather.weather[0].main == "Clouds") {
        img.src = './assets/clouds.png'
    }
    else if (weather.weather[0].main == "Snow") {
        img.src = './assets/snow.png'
    }
    else {
        img.src = './assets/sunny.webp'
    }
}
city_search.addEventListener('click', () => {
    checkWeather(city_input.value)
    city_input.value = ""
})
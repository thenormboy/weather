import { today, tomorrow, nextday } from './object.js'

const todayWeather = document.querySelector('#today-weather');

async function getForecastWeather() {
  const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=0d4b53107f7e4a1099e195400231810&q=Paris&days=3',
    {mode: 'cors'});
  const weatherData = await response.json();
  console.log(weatherData.forecast)

  setTodayForecastInfo(weatherData)
  setTomorrowForecastInfo(weatherData)
  setNextDayForecastInfo(weatherData)
}

async function getCurrentWeather() {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=0d4b53107f7e4a1099e195400231810&q=Paris',
        {mode: 'cors'})
    const weatherData = await response.json()

    setTodayCurrentInfo(weatherData)
}

function setNextDayForecastInfo(weatherData) {
    nextday.setHeader = 'Weekday'
    nextday.setIcon = weatherData.forecast.forecastday[2].day.condition.icon

    nextday.setHighTempC = weatherData.forecast.forecastday[2].day.maxtemp_c
    nextday.setLowTempC = weatherData.forecast.forecastday[2].day.mintemp_c
    nextday.setHighTempF = weatherData.forecast.forecastday[2].day.maxtemp_f
    nextday.setLowTempF = weatherData.forecast.forecastday[2].day.mintemp_f

    tomorrow.setPrecip = weatherData.forecast.forecastday[2].day.daily_chance_of_rain
}

function setTomorrowForecastInfo(weatherData) {
    tomorrow.setHeader = 'Tomorrow'
    tomorrow.setIcon = weatherData.forecast.forecastday[1].day.condition.icon

    tomorrow.setHighTempC = weatherData.forecast.forecastday[1].day.maxtemp_c
    tomorrow.setLowTempC = weatherData.forecast.forecastday[1].day.mintemp_c
    tomorrow.setHighTempF = weatherData.forecast.forecastday[1].day.maxtemp_f
    tomorrow.setLowTempF = weatherData.forecast.forecastday[1].day.mintemp_f

    tomorrow.setPrecip = weatherData.forecast.forecastday[1].day.daily_chance_of_rain
}

function setTodayCurrentInfo(weatherData) {
    today.location.setCity = weatherData.location.name
    today.location.setRegion = weatherData.location.region
    today.location.setCountry = weatherData.location.country

    today.setDate = weatherData.current.last_updated

    today.mainInfo.setTemperatureC = weatherData.current.temp_c
    today.mainInfo.setTemperatureF = weatherData.current.temp_f

    today.mainInfo.setCondition = weatherData.current.condition.text

    today.mainInfo.setFeelsLikeC = weatherData.current.feelslike_c
    today.mainInfo.setFeelsLikeF = weatherData.current.feelslike_f

    today.otherInfo.setWindKph = weatherData.current.wind_kph
    today.otherInfo.setWindMph = weatherData.current.wind_mph

    today.otherInfo.setHumidity = weatherData.current.humidity
    today.otherInfo.setUvIndex = weatherData.current.uv
}

function setTodayForecastInfo(weatherData) {

    today.mainInfo.setIcon = weatherData.forecast.forecastday[0].day.condition.icon

    today.mainInfo.setHighTempC = weatherData.forecast.forecastday[0].day.maxtemp_c
    today.mainInfo.setLowTempC = weatherData.forecast.forecastday[0].day.mintemp_c
    today.mainInfo.setHighTempF = weatherData.forecast.forecastday[0].day.maxtemp_f
    today.mainInfo.setLowTempF = weatherData.forecast.forecastday[0].day.mintemp_f
  
    today.otherInfo.setPrecip = weatherData.forecast.forecastday[0].day.daily_chance_of_rain
  
    today.otherInfo.setSunrise = weatherData.forecast.forecastday[0].astro.sunrise
    today.otherInfo.setSunset = weatherData.forecast.forecastday[0].astro.sunset
}

export {
    getForecastWeather,
    getCurrentWeather
}
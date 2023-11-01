import { today, tomorrow, nextday } from './object.js'

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

    const nextHighLow = document.querySelector('.next-highlow')
    nextday.setHighTempC = weatherData.forecast.forecastday[2].day.maxtemp_c
    nextday.setLowTempC = weatherData.forecast.forecastday[2].day.mintemp_c
    nextday.setHighTempF = weatherData.forecast.forecastday[2].day.maxtemp_f
    nextday.setLowTempF = weatherData.forecast.forecastday[2].day.mintemp_f
    let highlowCValue = "H: " + nextday.getHighTempC + String.fromCharCode(176) + " L: " + nextday.getLowTempC + String.fromCharCode(176)
    nextHighLow.textContent = highlowCValue

    const nextPrecip = document.querySelector('.next-precip')
    nextday.setPrecip = weatherData.forecast.forecastday[2].day.daily_chance_of_rain
    let nextPrecipValue = nextday.getPrecip + "%"
    nextPrecip.textContent = nextPrecipValue
}

function setTomorrowForecastInfo(weatherData) {
    tomorrow.setHeader = 'Tomorrow'
    tomorrow.setIcon = weatherData.forecast.forecastday[1].day.condition.icon

    const tomorrowHighLow = document.querySelector('.tomorrow-highlow')
    tomorrow.setHighTempC = weatherData.forecast.forecastday[1].day.maxtemp_c
    tomorrow.setLowTempC = weatherData.forecast.forecastday[1].day.mintemp_c
    tomorrow.setHighTempF = weatherData.forecast.forecastday[1].day.maxtemp_f
    tomorrow.setLowTempF = weatherData.forecast.forecastday[1].day.mintemp_f
    let highlowCValue = "H: " + tomorrow.getHighTempC + String.fromCharCode(176) + " L: " + tomorrow.getLowTempC + String.fromCharCode(176)
    tomorrowHighLow.textContent = highlowCValue

    const tomorrowPrecip = document.querySelector('.tomorrow-precip')
    tomorrow.setPrecip = weatherData.forecast.forecastday[1].day.daily_chance_of_rain
    let tomorrowPrecipValue = tomorrow.getPrecip + "%"
    tomorrowPrecip.textContent = tomorrowPrecipValue
}

function setTodayCurrentInfo(weatherData) {
    today.location.setCity = weatherData.location.name
    today.location.setRegion = weatherData.location.region
    today.location.setCountry = weatherData.location.country

    const location = document.querySelector('.location')
    let locationValue = today.location.getCity + ', ' + today.location.getRegion + ', ' + today.location.getCountry
    location.textContent = locationValue

    const date = document.querySelector('.date')
    today.setDate = weatherData.current.last_updated
    date.textContent = today.getDate

    const temperatureC = document.querySelector('.today-temperature')
    today.mainInfo.setTemperatureC = weatherData.current.temp_c
    today.mainInfo.setTemperatureF = weatherData.current.temp_f
    let todayTempCValue = today.mainInfo.getTemperatureC + String.fromCharCode(176) + 'C'
    let todayTempFValue = today.mainInfo.getTemperatureF + String.fromCharCode(176) + 'F'
    temperatureC.textContent = todayTempCValue


    const condition = document.querySelector('.today-condition')
    today.mainInfo.setCondition = weatherData.current.condition.text
    condition.textContent = today.mainInfo.getCondition

    const todayFeelsLike = document.querySelector('.today-feelslike')
    today.mainInfo.setFeelsLikeC = weatherData.current.feelslike_c
    today.mainInfo.setFeelsLikeF = weatherData.current.feelslike_f
    let todayFeelsLikeCValue = "Feels Like: " + today.mainInfo.getFeelsLikeC + String.fromCharCode(176) + 'C'
    let todayFeelsLikeFValue = "Feels Like: " + today.mainInfo.getFeelsLikeF + String.fromCharCode(176) + 'F'
    todayFeelsLike.textContent = todayFeelsLikeCValue

    const wind = document.querySelector('.wind')
    today.otherInfo.setWindKph = weatherData.current.wind_kph
    today.otherInfo.setWindMph = weatherData.current.wind_mph
    let windKph = today.otherInfo.getWindKph + ' kph'
    let windMph = today.otherInfo.getWindMph + ' mph'
    wind.textContent = windKph


    const humidity = document.querySelector('.humidity')
    today.otherInfo.setHumidity = weatherData.current.humidity
    let humidityValue = today.otherInfo.getHumidity + '%'
    humidity.textContent = humidityValue

    const uvIndex = document.querySelector('.uv-index')
    today.otherInfo.setUvIndex = weatherData.current.uv
    uvIndex.textContent = today.otherInfo.getUvIndex
}

function setTodayForecastInfo(weatherData) {


    const todayIcon = document.querySelector('.today-icon')
    today.mainInfo.setIcon = weatherData.forecast.forecastday[0].day.condition.icon
    todayIcon.src = today.mainInfo.getIcon

    const todayHighLow = document.querySelector('.today-highlow')
    today.mainInfo.setHighTempC = weatherData.forecast.forecastday[0].day.maxtemp_c
    today.mainInfo.setLowTempC = weatherData.forecast.forecastday[0].day.mintemp_c
    today.mainInfo.setHighTempF = weatherData.forecast.forecastday[0].day.maxtemp_f
    today.mainInfo.setLowTempF = weatherData.forecast.forecastday[0].day.mintemp_f
    let highlowCValue = "H: " + today.mainInfo.getHighTempC + String.fromCharCode(176) + " L: " + today.mainInfo.getLowTempC + String.fromCharCode(176)
    todayHighLow.textContent = highlowCValue
  
    const todayPrecip = document.querySelector('.today-precip')
    today.otherInfo.setPrecip = weatherData.forecast.forecastday[0].day.daily_chance_of_rain
    let todayPrecipValue = today.otherInfo.getPrecip + "%"
    todayPrecip.textContent = todayPrecipValue
  
    const sunrise = document.querySelector('.sunrise')
    const sunset = document.querySelector('.sunset')
    today.otherInfo.setSunrise = weatherData.forecast.forecastday[0].astro.sunrise
    today.otherInfo.setSunset = weatherData.forecast.forecastday[0].astro.sunset
    sunrise.textContent = today.otherInfo.getSunrise
    sunset.textContent = today.otherInfo.getSunset
}

function setCurrentWeather() {

    getCurrentWeather()
    getForecastWeather()

    const location = document.querySelector('.location')

    let locationValue = today.location.getCity + ', ' + today.location.getRegion + ', ' + today.location.getCountry

    location.value = locationValue
}

export {
    getForecastWeather,
    getCurrentWeather
}
import { today } from './object.js'

const todayWeather = document.querySelector('#today-weather');

async function getWeather() {
  const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=0d4b53107f7e4a1099e195400231810&q=Paris&days=3',
    {mode: 'cors'});
  const weatherData = await response.json();
  console.log(weatherData.forecast)
  today.location.setCity = weatherData.location.name
  today.location.setRegion = weatherData.location.region
  today.location.setCountry = weatherData.location.country
  console.log(today.location)
  //todayWeather.value = weatherData;
}

export {
    getWeather
}
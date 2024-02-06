const options = {
  enableHighAccuracy: true,
  timeout: 100000,
  maximumAge: 0,
}

let posFound = false
let weatherData = []

navigator.geolocation.getCurrentPosition(
  geolocationSuccess,
  geolocationError,
  options,
)

function geolocationSuccess(pos) {
  let lat = pos.coords.latitude
  let long = pos.coords.longitude

  fetch(
    `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${long}`,
  )
    .then((response) => response.json())
    .then((data) => {
      getWeatherForTimes(data)
      posFound = true
      view()
    })
}

function geolocationError(err) {
  console.log(err)
}

function pad(n) {
  return n < 10 ? '0' + n : n
}

function getFormattedTime(hours) {
  let curDate = new Date()
  let year = curDate.getFullYear()
  let month = curDate.getMonth() + 1
  let day = curDate.getDate()
  let hour = curDate.getHours()

  hour += hours
  if (hour >= 24) {
    hour -= 24
    day += 1
  }

  return `${year}-${pad(month)}-${pad(day)}T${pad(hour)}:00:00Z`
}

function getWeatherForTimes(data) {
  let timeseries = data.properties.timeseries

  for (let i = 0; i < timeseries.length; i++) {
    if (weatherData.length == 3) {
      break
    }

    if (timeseries[i].time === getFormattedTime(1)) {
      weatherData.push({
        time: 1,
        details: timeseries[i].data.instant.details,
      })
    }
    if (timeseries[i].time === getFormattedTime(6)) {
      weatherData.push({
        time: 6,
        details: timeseries[i].data.instant.details,
      })
    }
    if (timeseries[i].time === getFormattedTime(24)) {
      weatherData.push({
        time: 24,
        details: timeseries[i].data.instant.details,
      })
    }
  }

  console.log(firstHour, sixthHour, nextDay)
}

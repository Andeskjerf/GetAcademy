const options = {
  enableHighAccuracy: true,
  timeout: 100000,
  maximumAge: 0,
}

let posFound = false

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
  ).then((response) => {
    response.json().then((data) => {
			getWeatherForTimes(data)
      posFound = true
      view()
    })
  })
}

function geolocationError(err) {
  console.log(err)
}

function getWeatherForTimes(data) {
  let timeseries = data.properties.timeseries
	let curDate = new Date()
	let year = curDate.getFullYear()
	let month = curDate.getMonth() + 1
	let day = curDate.getDate()
	let hour = curDate.getHours()
	console.log(year, month, day, hour)
  console.log(timeseries)
}

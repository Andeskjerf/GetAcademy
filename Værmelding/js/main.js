function getDirection(degrees) {
  const directions = ['NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N']
  let index = Math.round((degrees / 45) % 8)
  return directions[index]
}

function drawWeatherCard(data) {
  return `
		<div class="weatherCard">
			<h3>Været om ${data.time} time(r)</h3>
			<p>Temp: ${data.details.air_temperature}C</p>
			<p>Fuktighet: ${data.details.relative_humidity}%</p>
			<p>Vind: ${data.details.wind_speed} m/s</p>
			<p>Vind retning: ${data.details.wind_from_direction}° ${getDirection(data.details.wind_from_direction)}</p>
		</div>
	`
}

function drawBody() {
  if (posFound) {
    let html = ''
    weatherData.forEach((data) => (html += drawWeatherCard(data)))
    return html
  }
  return `<p>Henter lokasjon, vent litt...</p>`
}

function view() {
  let app = document.getElementById('app')
  app.innerHTML = `
		<h1>Værmelding</h1>
		<div id="weatherContainer">
			${drawBody()}
		</div>
		`
}

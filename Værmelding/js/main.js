function drawWeatherCard() {

}

function drawBody() {
  if (posFound) {
    return `<p>Lokasjon funnet. Doxxing iverksatt</p>`
  }
  return `<p>Henter lokasjon, vent litt...</p>`
}

function view() {
  let app = document.getElementById('app')
  app.innerHTML = `
		<h1>Værmelding</h1>
		${drawBody()}
	`
}

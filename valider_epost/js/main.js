let valid = false

function validateEmail(elem) {
  let parts = elem.value.split('@')
	valid = parts.length > 1
	view()
}

function view() {
  document.getElementById('app').innerHTML = `
		<h1>Valider E-Post: ${valid}</h1>
	`
}

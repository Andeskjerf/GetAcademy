let reversed_string = 'Skriv for å starte!'

function reverseText(elem) {
	let result = ""

	for (let i = elem.value.length - 1; i > -1; i--) {
		result += elem.value[i]
	}

	reversed_string = result
	updateView()
}

function updateView() {
  document.getElementById('app').innerHTML = `
	<h3>${reversed_string}</h3>
	`
}

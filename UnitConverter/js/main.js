let types = {
  Length: [
    'Meter',
    'Kilometer',
    'Centimeter',
    'Millimeter',
    'Micrometer',
    'Nanometer',
    'Inch',
    'Feet',
    'Yard',
    'Mile',
  ],
  Weight: ['Ton', 'Kilogram', 'Gram', 'Milligram', 'Ounce', 'Pound'],
  Volume: [],
  Area: 'Area',
  Temperature: ['Celsius', 'Fahrenheit', 'Kelvin'],
  Time: 'Time',
}

let chosenType = Object.keys(types)[0]

function changeType(type) {
  chosenType = type
  view()
}

function convertUnit(value) {
	console.log(value)	
}

function drawUnitSelection() {
  let html = `<select onchange="convertUnit(this.value)" size="11">`
  for (let unit of types[chosenType]) {
    html += `<option value="${unit}">${unit}</option>`
  }
  html += `</select>`
  return html
}

function drawTypeSelection() {
  let html = '<div id="typeSelection">'
  for (let key in types) {
    html += `<button class="${key == chosenType ? 'active' : ''}" onclick="changeType('${key}')">${key}</button>`
  }
  html += '</div>'
  return html
}

function drawInputField(id) {
	return `<input onchange="convertUnit(this.value)" id="${id}" />`
}

function drawInput() {
  return `
		<div id="inputContainer">
			<div class="input">
				${drawInputField('inputLeft')}
				${drawUnitSelection()}
			</div>
			<div class="input">
				${drawInputField('inputRight')}
				${drawUnitSelection()}
			</div>
		</div>
	`
}

function view() {
  let app = document.getElementById('app')
  app.innerHTML = `
		${drawTypeSelection()}
		${drawInput()}
	`
}

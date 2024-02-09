const LENGTH_FACTORS = {
  Nanometer: 1e-9,
  Micrometer: 1e-6,
  Millimeter: 1,
  Centimeter: 10,
  Meter: 1000,
  Kilometer: 1000000,
  Inch: 25.4,
  Feet: 304.8,
  Yard: 914.4,
  Mile: 1609344,
  LightYear: 9.4607e18,
}

const AREA_FACTORS = {
	Kilometer: 1000000,
	Meter: 1,
	Centimeter: 0.0001,
	Millimeter: 1.0e-6,
	Micrometer: 1e-12,
	Hectare: 10000,
	Mile: 2589988.110336,
	Yard: 0.83612736,
	Feet: 0.09290304,
	Inches: 0.00064516,
	Acre: 4046.8564224
}

const WEIGHT_FACTORS = {
  Ton: 1000000,
  Kilogram: 1000,
  Gram: 1,
  Milligram: 0.001,
  Ounce: 28.3495,
  Pound: 453.592,
}

const TIME_FACTORS = {
	Picosecond: 1e-12,
	Nanosecond: 1e-9,
	Microsecond: 1e-6,
	Millisecond: 0.001,
	Second: 1,
	Minute: 60,
	Hour: 3600,
	Day: 86400,
	Week: 604800,
	Month: 2592000,
	Year: 31536000,
}

const TYPES = {
  Length: Object.keys(LENGTH_FACTORS),
  Weight: Object.keys(WEIGHT_FACTORS),
  Volume: [],
  Area: Object.keys(AREA_FACTORS),
  Temperature: ['Celsius', 'Fahrenheit', 'Kelvin'],
  Time: Object.keys(TIME_FACTORS),
}

let chosenType = Object.keys(TYPES)[0]
let unitLeft
let unitRight
let inputValue = 0
let answer = 0

function updateAnswer(value) {
  let elem = document.getElementById('inputRight')
  elem.value = value
  elem.innerText = value
  answer = value
}

function changeType(type) {
  chosenType = type
  view()
}

function convertLength(value) {
  const fromFactor = LENGTH_FACTORS[unitLeft]
  const toFactor = LENGTH_FACTORS[unitRight]
  return (value * fromFactor) / toFactor
}

function convertWeight(value) {
  const fromFactor = WEIGHT_FACTORS[unitLeft]
  const toFactor = WEIGHT_FACTORS[unitRight]
  return (value * fromFactor) / toFactor
}

function convertArea(value) {
  const fromFactor = AREA_FACTORS[unitLeft]
  const toFactor = AREA_FACTORS[unitRight]
  return (value * fromFactor) / toFactor
}

function convertTime(value) {
	const fromFactor = TIME_FACTORS[unitLeft]
	const toFactor = TIME_FACTORS[unitRight]
	return (value * fromFactor) / toFactor
}

function convertTemperature(value) {
  switch (unitLeft) {
    case 'Celsius':
      if (unitRight == 'Fahrenheit') {
        return (value * 9) / 5 + 32
      } else if (unitRight == 'Kelvin') {
        return value + 273.15
      }
      break
    case 'Fahrenheit':
      if (unitRight == 'Celsius') {
        return ((value - 32) * 5) / 9
      } else if (unitRight == 'Kelvin') {
        return ((value - 32) * 5) / 9 + 273.15
      }
      break
    case 'Kelvin':
      if (unitRight == 'Celsius') {
        return value - 273.15
      } else if (unitRight == 'Fahrenheit') {
        return ((value - 273.15) * 9) / 5 + 32
      }
      break
  }
}

function convertUnit(value) {
  if (unitLeft == undefined || unitRight == undefined) {
    alert('Error! Chosen units are invalid!')
    return
  }
  console.log(value)
  inputValue = value
  switch (chosenType) {
    case 'Length':
      updateAnswer(convertLength(value))
      break
    case 'Weight':
      updateAnswer(convertWeight(value))
      break
		case 'Time':
			updateAnswer(convertTime(value))
			break
    case 'Volume':
      updateAnswer(convertVolume(value))
      break
    case 'Area':
      updateAnswer(convertArea(value))
      break
    case 'Temperature':
      updateAnswer(convertTemperature(value))
      break
    default:
      console.log('Error! Chosen type is invalid!')
  }
}

function resetInputFields() {
  answer = 0
  inputValue = 0
  document.getElementById('inputLeft').value = 0
  document.getElementById('inputRight').value = 0
}

function setUnit(value, side) {
  if (side == 'left') {
    unitLeft = value
  } else {
    unitRight = value
  }
  resetInputFields()
}

function drawUnitSelection(side) {
  let html = `<select selected="${side == 'left' ? unitLeft : unitRight}" onchange="setUnit(this.value, '${side}')" size="11">`
  for (let unit of TYPES[chosenType]) {
    html += `<option value="${unit}">${unit}</option>`
  }
  html += `</select>`
  return html
}

function drawTypeSelection() {
  let html = '<div id="typeSelection">'
  for (let key in TYPES) {
    html += `<button class="${key == chosenType ? 'active' : ''}" onclick="changeType('${key}')">${key}</button>`
  }
  html += '</div>'
  return html
}

function drawInputField(value, id) {
  return `<input onchange="convertUnit(this.value)" id="${id}" value="${value}" />`
}

function drawInput() {
  return `
		<div id="inputContainer">
			<div class="input">
				${drawInputField(inputValue, 'inputLeft')}
				${drawUnitSelection('left')}
			</div>
			<div class="input">
				${drawInputField(answer, 'inputRight')}
				${drawUnitSelection('right')}
			</div>
		</div>
	`
}

function view() {
  console.log(unitLeft, unitRight)
  let app = document.getElementById('app')
  app.innerHTML = `
		${drawTypeSelection()}
		${drawInput()}
	`
}

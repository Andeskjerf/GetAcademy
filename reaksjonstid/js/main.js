const ROWS = 5
const COLS = 5

let selectedLamp = -1
let clickedIn = ''
let startTime

function drawLamps() {
  let result = ``
  let i = 0
  for (let x = 0; x < ROWS; x++) {
    result += `<div class="row">`
    for (let y = 0; y < COLS; y++) {
      result += `<div class="lamp" id="${i}"></div>`
      i++
    }
    result += `</div>`
  }
  return result
}

function lampClicked() {
  let spentMs = Math.floor(new Date().getTime() - startTime)
  let spentSeconds = spentMs / 1000
	clickedIn = `<p>${spentSeconds} sekunder</p>`
	view()
}

function turnOnRandLamp() {
  selectedLamp = Math.floor(Math.random() * ROWS * COLS)
  startTime = new Date().getTime()
  document.getElementById(selectedLamp).onclick = lampClicked
  document.getElementById(selectedLamp).classList.add('lampOn')
}

function view() {
  document.getElementById('app').innerHTML = `
		${drawLamps()}
		${clickedIn}
	`
  setTimeout(() => turnOnRandLamp(), 1000)
}

let SIZE = 3
let chosenType = null

function hasWon() {
  let i = 0
  for (let y = 0; y < SIZE; y++) {
    let matches = []
    for (let x = 0; x < SIZE; x++) {
			if (document.getElementById(i).innerHTML == '') {
				continue
			}
      matches.push(document.getElementById(`${i}`).innerHTML)
      i++
    }
		console.log(matches)
		if (matches.length < SIZE) {
			continue
		}
    let first = matches[0]
    let isWin = true
    for (let j = 1; j < matches.length; j++) {
      if (first != matches[j]) {
        isWin = false
        break
      }
    }
    console.log(isWin)
  }
}

function clickBox(elem) {
  if (elem.innerHTML == '') {
    elem.innerHTML = chosenType.toUpperCase()
		hasWon()
    machineTurn()
  }
}

function vacantSpotsAvailable() {
  for (let i = 0; i < SIZE * SIZE; i++) {
    if (document.getElementById(i).innerHTML == '') {
      return true
    }
  }
  return false
}

function getRandomSpot() {
  let i = Math.floor(Math.random() * SIZE * SIZE)
  return document.getElementById(i)
}

function machineTurn() {
  if (vacantSpotsAvailable()) {
    let elem = getRandomSpot()
    while (elem.innerHTML != '') {
      elem = getRandomSpot()
    }
    elem.innerHTML = chosenType == 'x' ? 'O' : 'X'
		hasWon()
  }
}

function selectType(elem) {
  chosenType = elem.id
  view()
}

function drawBoard() {
  let html = ''
  let i = 0
  for (let x = 0; x < SIZE; x++) {
    html += `<div class="row">`
    for (let y = 0; y < SIZE; y++) {
      html += `<div class="box" id="${i}" onclick="clickBox(this)"></div>`
      i++
    }
    html += `</div>`
  }
  return html
}

function viewGameStart() {
  return `
		<div>
			<h1>Velg brikketype</h1>
			<div id="selectionContainer">
				<div class="selection" id="x" onclick="selectType(this)">X</div>
				<div class="selection" id="o" onclick="selectType(this)">O</div>
			</div>
		</div>
	`
}

function view() {
  let app = document.getElementById('app')
  if (chosenType == null) {
    app.innerHTML = viewGameStart()
  } else {
    app.innerHTML = `
			${drawBoard()}
		`
  }
}

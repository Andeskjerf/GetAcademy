let SIZE = 3
let chosenType = null

function horizontalWin() {
	let i = 0
  for (let y = 0; y < SIZE; y++) {
    let matchesX = []
    for (let x = 0; x < SIZE; x++) {
      if (document.getElementById(i).innerHTML == '') {
        i++
        continue
      }
      matchesX.push(document.getElementById(i).innerHTML)
      i++
    }
    if (matchesX.length < SIZE) {
      continue
    }
    let first = matchesX[0]
    let isWin = true
    for (let j = 1; j < matchesX.length; j++) {
      if (first != matchesX[j]) {
        isWin = false
        break
      }
    }
    return isWin
  }
}

function verticalWin() {
	let i = 0
	for (let x = 0; x < SIZE; x++) {
		i = x
		let matchesY = []
		for (let y = 0; y < SIZE; y++) {
			if (document.getElementById(i).innerHTML == '') {
				i += SIZE
				continue
			}
			matchesY.push(document.getElementById(i).innerHTML)
			i += SIZE
		}

    if (matchesY.length < SIZE) {
      continue
    }
    let first = matchesY[0]
    let isWin = true
    for (let j = 1; j < matchesY.length; j++) {
      if (first != matchesY[j]) {
        isWin = false
        break
      }
    }
    return isWin
	}
}

function hasWon() {
	let verticalWin = verticalWin()
	let horizontalWin = horizontalWin()
}

function clickBox(elem) {
  if (elem.innerHTML == '') {
    elem.innerHTML = chosenType.toUpperCase()
    hasWon()
    // machineTurn()
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
  for (let y = 0; y < SIZE; y++) {
    html += `<div class="row">`
    for (let x = 0; x < SIZE; x++) {
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

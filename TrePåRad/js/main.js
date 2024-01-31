let SIZE = 3
let chosenType = null
let starts = null

function isThreeInRow(list) {
  for (let y = 0; y < list.length; y++) {
    let content = list[y][0]
    let valid = true
    for (let x = 1; x < list[y].length; x++) {
      if (content != list[y][x] || list[y][x] == '') {
        valid = false
        break
      }
    }
    if (valid) {
      return true
    }
  }
}

function checkAllWins() {
  let vertical = []
  let horizontal = []
  let diagonal = [[], []]

  for (let x = 0; x < SIZE; x++) {
    horizontal.push([])
    vertical.push([])
  }

  let i = 0
  let j = 0
  for (let y = 0; y < SIZE; y++) {
    diagonal[0].push(document.getElementById(j).innerHTML)
    j += SIZE + 1
    for (let x = 0; x < SIZE; x++) {
      horizontal[y].push(document.getElementById(i).innerHTML)
      vertical[x].push(document.getElementById(i).innerHTML)
      i++
    }
  }

  j = SIZE * SIZE - SIZE
  for (let y = 0; y < SIZE; y++) {
    diagonal[1].push(document.getElementById(j).innerHTML)
    j -= SIZE - 1
  }

  if (
    isThreeInRow(horizontal) ||
    isThreeInRow(vertical) ||
    isThreeInRow(diagonal)
  ) {
    return true
  }
}

function hasWon(player) {
  if (checkAllWins()) {
    if (player) {
      alert('Du vant')
    } else {
      alert('Du tapte')
    }
    location.reload()
  }
}

function clickBox(elem) {
  if (elem.innerHTML == '') {
    elem.innerHTML = chosenType.toUpperCase()
    hasWon(true)
    machineTurn()
  }
}

function randomStarter() {
  if (Math.random() >= 0.5) {
    starts = 'x'
  } else {
    starts = 'o'
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
    hasWon(false)
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
    randomStarter()
  } else {
    app.innerHTML = `
			${drawBoard()}
		`
    if (starts != chosenType && starts != null) {
      machineTurn()
    }
    starts = null
  }
}

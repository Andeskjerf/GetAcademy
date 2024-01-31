let size = 3
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

  for (let x = 0; x < size; x++) {
    horizontal.push([])
    vertical.push([])
  }

  let i = 0
  let j = 0
  for (let y = 0; y < size; y++) {
    diagonal[0].push(document.getElementById(j).innerHTML)
    j += size + 1
    for (let x = 0; x < size; x++) {
      horizontal[y].push(document.getElementById(i).innerHTML)
      vertical[x].push(document.getElementById(i).innerHTML)
      i++
    }
  }

  j = size * size - size
  for (let y = 0; y < size; y++) {
    diagonal[1].push(document.getElementById(j).innerHTML)
    j -= size - 1
  }

  return (
    isThreeInRow(horizontal) || isThreeInRow(vertical) || isThreeInRow(diagonal)
  )
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
  for (let i = 0; i < size * size; i++) {
    if (document.getElementById(i).innerHTML == '') {
      return true
    }
  }
  return false
}

function getRandomSpot() {
  let i = Math.floor(Math.random() * size * size)
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

function setBoardSize(elem) {
  switch (elem.innerText) {
    case '3x3':
      size = 3
      break
    case '4x4':
      size = 4
      break
    case '5x5':
      size = 5
      break
  }
  view()
}

function drawUltimateBoard() {
  let html = ''
  let i = 0
  for (let y = 0; y < size; y++) {
    html += `<div class="row">`
    for (let x = 0; x < size; x++) {
      html += `
				<div class="board">
      		${drawBoard()}
      	</div>
				`
      i++
    }
    html += `</div>`
  }
  return html
}

function drawBoard() {
  let html = ''
  let i = 0
  for (let y = 0; y < size; y++) {
    html += `<div class="row">`
    for (let x = 0; x < size; x++) {
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

function drawButton(value) {
  return `
		<button class="button" onclick="setBoardSize(this)">${value}</button>
	`
}

function drawButtons() {
  return `
		<div id="buttons">
			${drawButton('3x3')}
			${drawButton('4x4')}
			${drawButton('5x5')}
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
			${drawButtons()}
			<div id="board">
				${drawUltimateBoard()}
			</div>
		`
    if (starts != chosenType && starts != null) {
      machineTurn()
    }
    starts = null
  }
}

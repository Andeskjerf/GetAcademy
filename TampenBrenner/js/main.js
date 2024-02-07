document.body.addEventListener('mousemove', mouseMoved)

let pos
let onDot = false
let distancePercentage = 0

function getDistance(x1, y1, x2, y2) {
  let xDistance = x2 - x1
  let yDistance = y2 - y1
  return Math.sqrt(xDistance * xDistance + yDistance * yDistance)
}

function mouseMoved(e) {
  let x = e.clientX
  let y = e.clientY

  let compressedValue = ((getDistance(x, y, pos.x, pos.y) * 100) / window.innerWidth) * 10
  distancePercentage = 100 - compressedValue

  if (e.target.id == 'dot') {
    onDot = true
  } else {
    onDot = false
  }

  view()
}

function getRandomXY() {
  let x = Math.floor(Math.random() * window.innerWidth)
  let y = Math.floor(Math.random() * window.innerHeight)
  return { x, y }
}

function drawDot() {
  if (pos) {
    return `<div id="dot" style="top: ${pos.y}px; left: ${pos.x}px; opacity: ${distancePercentage}%;"></div>`
  }
  pos = getRandomXY()
  return `<div id="dot" style="top: ${pos.y}px; left: ${pos.x}px; opacity: ${distancePercentage}%;"></div>`
}

function drawOnDotText() {
  if (onDot) {
    return `<h1 id="dotFound">Du fant dotten!</h1>`
  }
  return ''
}

function view() {
  let app = document.getElementById('app')
  app.innerHTML = `
		${drawDot()}
		${drawOnDotText()}
	`
}

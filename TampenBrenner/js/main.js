function getRandomXY() {
  let x = Math.floor(Math.random() * window.innerWidth)
  let y = Math.floor(Math.random() * window.innerHeight)
  return { x, y }
}

function drawDot() {
	let pos = getRandomXY()
  return `<div id="dot" style="top: ${pos.y}px; left: ${pos.x}px;"></div>`
}

function view() {
  let app = document.getElementById('app')
  app.innerHTML = `
		${drawDot()}
	`
}

const totalImages = 3
let currentSlide = 0

function drawCarousel() {
  let html = `<div id="carousel">`

  for (let i = 0; i < totalImages; i++) {
    html += `
			<img src="assets/${i}.jpg" />
		`
  }

  html += '</div>'
  return html
}

function drawButton(text) {
  return `
		<button class="button" onclick="buttonPressed('${text}')">${text}</button>
	`
}

function drawButtons() {
  return `
		<div id="buttons">
			${drawButton('Previous')}
			${drawButton('Next')}
		</div>
	`
}

function view() {
  let app = document.getElementById('app')
  app.innerHTML = `
		<div id="carouselContainer">
			${drawCarousel()}
		</div>
		${drawButtons()}
	`
}

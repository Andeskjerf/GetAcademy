const totalImages = 3
let currentSlide = 0

function updateSlides() {
  let images = document.querySelectorAll('#carousel img')
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('toTheLeft')
    images[i].classList.remove('toTheRight')
    if (i < currentSlide) {
      images[i].classList.add('toTheLeft')
    } else if (i > currentSlide) {
      images[i].classList.add('toTheRight')
    }
  }
}

function buttonPressed(text) {
  switch (text) {
    case 'Previous':
      currentSlide--
      if (currentSlide < 0) {
        currentSlide = totalImages - 1
      }
      break
    case 'Next':
      currentSlide++
      if (currentSlide >= totalImages) {
        currentSlide = 0
      }
      break
  }
  updateSlides()
}

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
  updateSlides()
}

const totalImages = 3
let currentSlide = 0

function updateSlides() {
  let images = document.querySelectorAll('#carousel img')
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('toTheLeft')
    images[i].classList.remove('toTheRight')
    images[i].removeEventListener('click', imageClicked)

    if (i < currentSlide) {
      images[i].classList.add('toTheLeft')
    } else if (i > currentSlide) {
      images[i].classList.add('toTheRight')
    } else {
      images[i].addEventListener('click', imageClicked)
    }
  }
}

function imageClicked(elem) {
  let imgWidth = elem.target.clientWidth
  let x = elem.layerX

  if (x < imgWidth / 2) {
    buttonPressed('Previous')
  } else {
    buttonPressed('Next')
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

function view() {
  let app = document.getElementById('app')
  app.innerHTML = `
		<div id="carouselContainer">
			${drawCarousel()}
		</div>
	`
  updateSlides()
}

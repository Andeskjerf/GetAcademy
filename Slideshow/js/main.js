const timer = 5000
const totalImages = 3
let currentSlide = 0
let oldSlide = 0
let imageTapped = false

// TODO: a bit messy!!
function updateSlides() {
  let carousel = document.getElementById('carousel')
  if (currentSlide == oldSlide) {
    let current = document.createElement('img')
    current.setAttribute('src', `assets/${currentSlide}.jpg`)
    current.setAttribute('id', 'current')
    current.onclick = imageClicked
    carousel.append(current)
    return
  }

  let current = document.getElementById('current')
  current.setAttribute('id', 'previous')
  let newSlide = document.createElement('img')
  newSlide.setAttribute('src', `assets/${currentSlide}.jpg`)
  newSlide.setAttribute('id', 'current')
  newSlide.onclick = imageClicked

  if (currentSlide == 0 && oldSlide == totalImages - 1) {
    newSlide.classList.add('toTheRight')
    current.classList.add('toTheLeft')
  } else if (currentSlide == totalImages - 1 && oldSlide == 0) {
    newSlide.classList.add('toTheLeft')
    current.classList.add('toTheRight')
  } else if (currentSlide < oldSlide) {
    current.classList.add('toTheRight')
    newSlide.classList.add('toTheLeft')
  } else if (currentSlide > oldSlide) {
    current.classList.add('toTheLeft')
    newSlide.classList.add('toTheRight')
  }

  carousel.append(newSlide)

  setTimeout(() => {
    newSlide.classList.remove('toTheLeft')
    newSlide.classList.remove('toTheRight')
  })

  setTimeout(() => {
    carousel.removeChild(current)
  }, 2500)
}

function imageClicked(elem) {
  let imgWidth = elem.target.clientWidth
  let x = elem.layerX

  if (x < imgWidth / 2) {
    updateIndex('Previous')
  } else {
    updateIndex('Next')
  }
  imageTapped = true
}

function updateIndex(text) {
  oldSlide = currentSlide
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

function automaticSlide() {
  if (imageTapped) {
    imageTapped = false
    return
  }
  updateIndex('Next')
}

function drawCarousel() {
  return `<div id="carousel"></div>`
}

function view() {
  let app = document.getElementById('app')
  app.innerHTML = `
		<div id="carouselContainer">
			${drawCarousel()}
		</div>
	`
  updateSlides()
  setInterval(automaticSlide, timer)
}

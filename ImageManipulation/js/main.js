let uploadedImage = null
let maintainRatio = false
let aspectRatio
let width, height

function setResolution() {
  let imgDom = document.getElementById('userImage')
  width = imgDom.naturalWidth
  height = imgDom.naturalHeight
  aspectRatio = width / height

  let wInput = document.getElementById('width_input')
  let hInput = document.getElementById('height_input')
  wInput.value = width
  hInput.value = height
}

function setImage(file) {
  uploadedImage = file
  view()
  // allow DOM to update before getting image resolution
  setTimeout(setResolution, 10)
}

function downloadImage() {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  let imgDom = document.getElementById('userImage')
  ctx.drawImage(imgDom, 0, 0, width, height)
  const resizedImage = canvas.toDataURL('image/png')
  window.open(resizedImage)
}

function updateScaleInput(elem) {
  let wInput = document.getElementById('width_input')
  let hInput = document.getElementById('height_input')

  if (elem.id == 'width_input') {
    width = elem.valueAsNumber
    if (maintainRatio) height = width / aspectRatio
  } else {
    height = elem.valueAsNumber
    if (maintainRatio) width = height * aspectRatio
  }

  hInput.value = height
  wInput.value = width

  view()
}

function toggleAspectRatio() {
  maintainRatio = !maintainRatio
  setResolution()
  view()
}

function drawButtons() {
  return `
		<div id="buttons">	
			<button onclick="downloadImage()">Last ned skalert</button>
		</div>
	`
}

function drawUserImage() {
  if (uploadedImage == null) return '<p>Ingen bilder lastet opp...</p>'

  return `
  	<img id="userImage" width="${width}" height="${height}" src="${URL.createObjectURL(uploadedImage)}" />
  `
}

function drawImageUpload() {
  return `
		<input type="file" accept="image/*" id="imageUpload" onchange="setImage(this.files[0])" />
	`
}

function drawImageScaleInput(id, value) {
  return `<input type="number" id="${id}_input" value="${value}" placeholder="${id}" onchange="updateScaleInput(this)" />`
}

function drawScaleCheckbox() {
  return `
		<div id="scaleCheckbox">
			<input type="checkbox" ${maintainRatio ? 'checked="true"' : ''} onclick="toggleAspectRatio()" />
			<p>behold størrelesforholdet?</p>
		</div>
	`
}

function viewUserInput() {
  return `
		<div id="userContainer">
			${drawUserImage()}
			${drawImageUpload()}
		</div>
	`
}

function viewImageManipulation() {
  return `
		<div id="imageManipulationContainer">
			${drawImageScaleInput('width', width)}
			${drawImageScaleInput('height', height)}
			${drawScaleCheckbox()}
		</div>
	`
}

function view() {
  let app = document.getElementById('app')
  app.innerHTML = `
		${uploadedImage == null ? '' : drawButtons()}
		${uploadedImage == null ? '' : viewImageManipulation()}
		${viewUserInput()}
	`
}

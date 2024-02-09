let uploadedImage = null

function setImage(file) {
  uploadedImage = file
  view()
}

function drawUserImage() {
  if (uploadedImage == null) return '<p>Ingen bilder lastet opp...</p>'

  return `
		<img id="userImage" src="${URL.createObjectURL(uploadedImage)}" />
	`
}

function drawImageUpload() {
  return `
		<input type="file" id="imageUpload" onchange="setImage(this.files[0])" />
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

function view() {
  let app = document.getElementById('app')
  app.innerHTML = `
		${viewUserInput()}
	`
}

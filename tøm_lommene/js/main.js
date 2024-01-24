const pocketContent = ["Ape", "Stein", "Flaske", "Hammer", "Motor", "Bildør", "PC", "Gitar", "Flodhest", "Bord"]
let emptiedPocketsResult = ""

function emptyPockets() {
	emptiedPocketsResult = ""
	for (let i = 0; i < pocketContent.length; i++) {
		emptiedPocketsResult += `<div>${pocketContent[i]}</div>`	
	}
	view()
}

function view() {
	document.getElementById('app').innerHTML = `
		<button onclick="emptyPockets()">${emptiedPocketsResult.length == 0 ? "Tøm lommene" : "😳"}</button>
		${emptiedPocketsResult}
	`
}

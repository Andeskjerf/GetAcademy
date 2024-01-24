function createMultiplication() {
	let result = document.createElement("div")
	let text = ""
	for (let i = 1; i <= 10; i++) {
		text += `${i * 2}`
		if (i != 10) {
			text += ", "
		}
	}
	result.innerHTML = text
	return result.innerHTML
}

function showApp() {
	const app = document.getElementById('app')
	app.innerHTML = `
			${createMultiplication()}
		`
}

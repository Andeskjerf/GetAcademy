let displayText = ""

function buttonPressed(value) {
	switch (value) {
		case "C":
		case "CE":
			displayText = "0"
			break
		case "=":
			displayText = eval(displayText)
			break
		case "+/-":
			displayText = eval(displayText) * -1
			break
		case "x^2":
			displayText = eval(displayText * displayText)
			break
		case "2√x":
			displayText = eval(Math.sqrt(displayText))
			break
		case "⬅":
			displayText = displayText.substring(0, displayText.length - 1)
			break
		default:
			displayText += value
	}
	view()
}

function drawDisplay() {
	return `
		<div id="display">
			<div id="display-text">${displayText}</div>
		</div>
	`
}

function drawButton(value) {
	return `
		<div class="button" onclick="buttonPressed('${value}')">${value}</div>
	`
}

function drawButtons() {
	return `
		<div id="buttons">
			${drawButton('%')}
			${drawButton('CE')}
			${drawButton('C')}
			${drawButton('⬅')}
			${drawButton('1/x')}
			${drawButton('x^2')}
			${drawButton('2√x')}
			${drawButton('/')}
			${drawButton('7')}
			${drawButton('8')}
			${drawButton('9')}
			${drawButton('*')}
			${drawButton('4')}
			${drawButton('5')}
			${drawButton('6')}
			${drawButton('-')}
			${drawButton('1')}
			${drawButton('2')}
			${drawButton('3')}
			${drawButton('+')}
			${drawButton('+/-')}
			${drawButton('0')}
			${drawButton('.')}
			${drawButton('=')}
		</div>
		`
}

function view() {
	document.getElementById('app').innerHTML = `
		${drawDisplay()}
		${drawButtons()}
	`
}

let score = 0
let topNumber = 0
let bottomNumber = 0

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const MAX = 10
function setNumbers() {
  topNumber = getRandomInt(1, MAX)
  bottomNumber = getRandomInt(1, MAX)
}

function submit() {
  let input = document.getElementById('answer_box').value
  if (input == '' || !'.*[<>=].*'.match(input) || input.length > 1) {
    alert('invalid input')
    return
  }

  switch (input) {
    case '<':
      if (topNumber < bottomNumber) {
        score++
      }
      break
    case '>':
      if (topNumber > bottomNumber) {
        score++
      }
      break
    case '=':
      if (topNumber == bottomNumber) {
        score++
      }
      break
    default:
      alert('not supposed to happen!')
  }

  showView()
}

function reset() {
  score = 0
  showView()
}

function showView() {
	setNumbers()
  document.getElementById('app').innerHTML = `
			<h3>Poeng: ${score}</h3>
			<div>${topNumber}</div>
			<input id="answer_box" type="text" />
			<div>${bottomNumber}</div>
			<div>
				<button onclick="submit()">Submit</button>
				<button onclick="reset()">Reset</button>
			</div>
	`
}

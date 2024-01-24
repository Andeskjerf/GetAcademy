let result = 'Tenker...'
let num1 = 1
let num2 = 2

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getEqualNumbers() {
  while (num1 != num2) {
    num1 = getRandomInt(1, 100000)
    num2 = getRandomInt(1, 100000)
		console.log(num1, num2)
  }
	result = `Like tall funnet! ${num1} og ${num2}`
}

function updateView() {
  document.getElementById('app').innerHTML = `
		<h3>${result}</h3>
	`

	if (num1 != num2) {
		getEqualNumbers()
		updateView()
	}
}

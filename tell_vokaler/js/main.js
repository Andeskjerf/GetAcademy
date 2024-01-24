let vowelCount = 0

function countVowels(elem) {
	vowelCount = 0
	for (let i = 0; i < elem.value.length; i++) {
		switch (elem.value[i]) {
			case 'a':
			case 'e':
			case 'i':
			case 'o':
			case 'u':
			case 'æ':
			case 'ø':
			case 'å':
				vowelCount++
				break
		}
	}
	updateView()
}

function updateView() {
	document.getElementById('app').innerHTML = `
		<h3>Antall vokaler: ${vowelCount}</h3>
	`
}

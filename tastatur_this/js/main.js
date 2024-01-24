const KEYS = [
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
]

function createKey(key) {
	const keyEl = document.createElement('button')
	keyEl.textContent = key
	keyEl.addEventListener('click', () => {
		document.getElementById('text_input').value += key
	})
	return keyEl
}

function init() {
	KEYS.forEach(key => {
		document.getElementById('keyboard_btns').append(createKey(key))
	})
}

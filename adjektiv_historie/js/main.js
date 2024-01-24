// what to replace the placeholders with
const blank = '___'

// @ placeholder for random adjective
// | placeholder for random noun
// £ placeholder for random verb
const story = [
	'Once, there was a @ | that £ in the | - and great things happened. The End.',
]

// which story are we using?
let storyIndex
let chosenStory

let selectedWords
let types = []

const adjectives = [
	'red',
	'green',
	'blue',
	'yellow',
	'black',
	'white',
	'brown',
	'orange',
	'purple',
	'pink',
]

const nouns = [
	'cat',
	'man',
	'woman',
	'dog',
	'bird',
	'fish',
	'mouse',
	'horse',
	'cow',
	'sheep',
	'chicken',
	'pig',
]

const verbs = [
	'ran',
	'jumped',
	'walked',
	'swam',
	'barked',
	'laughed',
	'sang',
	'yelled',
]

function getRandomRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

function init() {
	initStory()
	updateView()
}

function initStory() {
	storyIndex = getRandomRange(0, story.length - 1)
	chosenStory = story[storyIndex]
	for (let i = 0; i < chosenStory.length; i++) {
		if (chosenStory[i] === '@') {
			types.push('a')
		} else if (chosenStory[i] === '£') {
			types.push('v')
		} else if (chosenStory[i] === '|') {
			types.push('n')
		}
	}
	selectedWords = new Array(types.length)
	if (Object.seal) {
		selectedWords.fill(undefined)
		Object.seal(selectedWords)
	}
}

function btnClicked(elem, type) {
	switch (type) {
		case 'a':
			selectedWords[types.indexOf('a')] = elem.innerHTML
			break
		case 'n':
			selectedWords[types.indexOf('n')] = elem.innerHTML 
			break
		case 'v':
			selectedWords[types.indexOf('v')] = elem.innerHTML
			break
	}
	updateView()
}

function createButtons(list, type) {
	let html = ``
	for (let i = 0; i < list.length; i++) {
		html += `<button onclick="btnClicked(this, '${type}')">${list[i]}</button>`
	}
	return html
}

function updateStory() {
	let html = ``
	let i = 0
	chosenStory.split(/@|£|\|/g).forEach((word) => {
		html += word
		switch (types[i]) {
			case 'a':
				html += selectedWords[i] == undefined ? blank : selectedWords[i]
				break
			case 'n':
				html += selectedWords[i] == undefined ? blank : selectedWords[i]
				break
			case 'v':
				html += selectedWords[i] == undefined ? blank : selectedWords[i]
				break
		}
		i++
	})
	return html
}

function updateView() {
	document.getElementById('app').innerHTML = `
    <div id="story">${updateStory()}</div>
      <div id="controls">
        <div id="noun_c">
					${createButtons(nouns, "n")}
        </div>
        <div id="verb_c">
					${createButtons(verbs, "v")}
        </div>
        <div id="adj_c">
					${createButtons(adjectives, "a")}
        </div>
      </div>
	`
}

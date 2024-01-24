// what to replace the placeholders with
const blank = '___'

// @ placeholder for random adjective
// | placeholder for random noun
// £ placeholder for random verb
const story = [
	'Once, there was a @ | that £ in the | - and great things happened. The End.',
]

// which story are we using?
let chosenStory

// initialized as a fixed array once 'types' is initialized
// same length as 'types'; contains the words we want to replace placeholders with
let selectedWords

// what type of word exists at that index?
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
	chosenStory = story[getRandomRange(0, story.length - 1)]

	// we need to figure out where the placeholders are and store their index
	for (let i = 0; i < chosenStory.length; i++) {
		switch (chosenStory[i]) {
			case '@':
				types.push('a')
				break
			case '£':
				types.push('v')
				break
			case '|':
				types.push('n')
				break
		}
	}

	// finally initialize now that we know how many placeholders exists
	selectedWords = new Array(types.length)
	if (Object.seal) {
		selectedWords.fill(undefined)
		Object.seal(selectedWords)
	}
}

function btnClicked(elem, type) {
	for (let i = 0; i < selectedWords.length; i++) {
		if (types[i] == type && selectedWords[i] == undefined) {
			selectedWords[i] = elem.innerHTML
			break
		}
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
	let split = chosenStory.split(/@|£|\|/g)
	split.forEach((word) => {
		html += word
		// don't append blanks if we're at the end
		if (i != split.length - 1) {
			html += selectedWords[i] == undefined ? blank : selectedWords[i]
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

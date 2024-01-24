const items = ['Gitar', 'Flaske', 'Bord', 'Flodhest']
let itemsText = ""
let basket = []
let basketText = ''

function addToBasket(item) {
  basket.push(item)
  view()
}

function viewItems() {
  itemsText = ""
  items.forEach((item) => {
    itemsText += `
			<div>
				<div>
					${item}
				</div>
				<button onclick="addToBasket('${item}')">Legg til</button>
			</div>`
  })
}

function viewBasket() {
	basketText = ""
  for (let i = 0; i < basket.length; i++) {
    basketText += basket[i]
    if (i != basket.length - 1) {
      basketText += ', '
    }
  }
}

function view() {
	viewBasket()
	viewItems()
  document.getElementById('app').innerHTML = `
		${itemsText}
		<div>${basketText}</div>
	`
}

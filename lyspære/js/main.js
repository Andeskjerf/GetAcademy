const ON_COLOR = 'orange'
const OFF_COLOR = 'grey'

function lightbulbClick(elem) {
	if (elem.style.backgroundColor == OFF_COLOR) {
		elem.style.backgroundColor = ON_COLOR;
	} else {
		elem.style.backgroundColor = OFF_COLOR;
	}
}

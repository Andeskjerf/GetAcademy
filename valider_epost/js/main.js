let valid = false

function validateEmail(elem) {
	valid = false
  let foundA = false
  let foundPeriod = false
  // regex would be nicer for this :(
  for (let i = 0; i < elem.value.length; i++) {
    if (elem.value[i] == '.' && foundA) {
      foundPeriod = true
    } else if (elem.value[i] == '.' && !foundA) {
      valid = false
      break
    }
    if (elem.value[i] == ' ') {
      valid = false
      break
    }
    if (elem.value[i] == '@') {
      foundA = true
    }
  }

		console.log(foundA, foundPeriod)
  if (foundA && foundPeriod) {
    valid = true
  }

  view()
}

function view() {
  document.getElementById('app').innerHTML = `
		<h1>Valider E-Post: ${valid}</h1>
	`
}

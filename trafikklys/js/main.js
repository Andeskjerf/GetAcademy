let redLight;
let yellowLight;
let greenLight;

function init() {
	redLight = document.getElementById("light_red");
	yellowLight = document.getElementById("light_yellow");
	greenLight = document.getElementById("light_green");

	redLight.style.backgroundColor = "red";
	yellowLight.style.backgroundColor = "grey";
	greenLight.style.backgroundColor = "grey";

	setInterval(autoChangeColor, 1500);
}

function changeColor(color) {
	if (color == "red") {
		redLight.style.backgroundColor = "red";
		yellowLight.style.backgroundColor = "grey";
		greenLight.style.backgroundColor = "grey";
	} else if (color == "yellow") {
		redLight.style.backgroundColor = "grey";
		yellowLight.style.backgroundColor = "yellow";
		greenLight.style.backgroundColor = "grey";
	} else if (color == "green") {
		redLight.style.backgroundColor = "grey";
		yellowLight.style.backgroundColor = "grey";
		greenLight.style.backgroundColor = "green";
	}
}

function autoChangeColor() {
	if (redLight.style.backgroundColor == "red") {
		changeColor("green");
	} else if (yellowLight.style.backgroundColor == "yellow") {
		changeColor("red");
	} else if (greenLight.style.backgroundColor == "green") {
		changeColor("yellow");
	}
}

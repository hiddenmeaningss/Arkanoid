const spatula = document.getElementById("spatula");
const spatulaWidth = 200;
const spatulaTop = spatula.getBoundingClientRect().top;
const spatulaHeight = 20;
let spatulaLeft = (screenWidth - spatulaWidth) / 2;

spatula.style.width = spatulaWidth + "px";
spatula.style.left = spatulaLeft + "px";
spatula.style.height = spatulaHeight + "px";

let leftPressed = false;
let rightPressed = false;

function onKeyDown(event) {
	if (event.key === "ArrowLeft") {
		event.preventDefault();
		leftPressed = true;
	} else if (event.key === "ArrowRight") {
		event.preventDefault();
		rightPressed = true;
	} else if (event.key === " ") {
		if (isBallPaused) {
			isBallPaused = false;
		} else {
			isBallPaused = true;
		}
	}
}

function onKeyUp(event) {
	if (event.key === "ArrowLeft") {
		event.preventDefault();
		leftPressed = false;
	} else if (event.key === "ArrowRight") {
		event.preventDefault();
		rightPressed = false;
	}
}

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

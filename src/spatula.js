const spatula = document.getElementById("spatula");
const spatulaWidth = gameFieldWidth / 5;
const spatulaTop = gameFieldHeight * 0.9;
const spatulaHeight = gameFieldWidth / 36;
const spatulaSpeed = gameFieldWidth / 60;
let spatulaLeft = (gameFieldWidth - spatulaWidth) / 2;

spatula.style.width = spatulaWidth + "px";
spatula.style.left = spatulaLeft + "px";
spatula.style.height = spatulaHeight + "px";
spatula.style.top = spatulaTop + "px";

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

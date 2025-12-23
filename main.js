const screenHeight = document.body.getBoundingClientRect().height;
const screenWidth = document.body.getBoundingClientRect().width;
const gameField = document.getElementById("game-field");
let gameFieldWidth = screenWidth;
let gameFieldHeight = screenHeight;

if (gameFieldHeight > gameFieldWidth) {
	gameFieldHeight = gameFieldWidth;
} else {
	gameFieldWidth = gameFieldHeight;
}

gameFieldHeight -= 4;
gameFieldWidth -= 4;

gameField.style.width = gameFieldWidth + "px";
gameField.style.height = gameFieldHeight + "px";

gameField.style.left = (screenWidth - gameFieldWidth) / 2 + "px";

const gameOverMessage = document.getElementById("game-over-msg");
const startBtn = document.getElementById("start");

startBtn.style.fontSize = gameFieldWidth / 20 + "px";

let gameOver = false;
let recentSpatulaHit = false;

function start() {
	gameField.append(ball);
	requestAnimationFrame(mainLoop);
}

function mainLoop() {
	startBtn.setAttribute("hidden", true);

	if (!isBallPaused) {
		calculate();
	}

	draw();

	if (!gameOver) {
		requestAnimationFrame(mainLoop);
	} else {
		gameOverMessage.removeAttribute("hidden");
	}
}

function calculate() {
	x += horizontalSpeed;
	y += verticalSpeed;

	if (leftPressed) {
		spatulaLeft = Math.max(spatulaLeft - spatulaSpeed, 0);
	} else if (rightPressed) {
		spatulaLeft =
			Math.min(
				spatulaLeft,
				gameFieldWidth - spatulaWidth - spatulaSpeed
			) + spatulaSpeed;
	}

	if (!recentSpatulaHit) {
		checkIfHitSpatula();
	}
	checkIfHitBlock();
	checkIfHitBorders();
}

function draw() {
	ball.style.left = x + "px";
	ball.style.top = y + "px";

	spatula.style.left = spatulaLeft + "px";
}

function detectCollision(ball, thing) {
	if (
		checkVerticalCollision(ball, thing) &&
		checkHorizontalCollision(ball, thing)
	) {
		return true;
	} else {
		return false;
	}
}

function checkVerticalCollision(ball, thing) {
	return (
		(ball.left >= thing.left && ball.left <= thing.right) ||
		(ball.right >= thing.left && ball.right <= thing.right)
	);
}

function checkHorizontalCollision(ball, thing) {
	return (
		(ball.bottom >= thing.top && ball.bottom <= thing.bottom) ||
		(ball.top >= thing.top && ball.top <= thing.bottom)
	);
}

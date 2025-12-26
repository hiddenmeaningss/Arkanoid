const screenHeight = document.body.getBoundingClientRect().height;
const screenWidth = document.body.getBoundingClientRect().width;
const gameField = document.getElementById("game-field");
let gameFieldWidth = screenWidth;
let gameFieldHeight = screenHeight;

let lives = 2;
let roundNum = 1;

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

const gameLostMsg = document.getElementById("game-over-msg");
const gameWonMsg = document.getElementById("game-won-msg");
const startBtn = document.getElementById("start");
const nextLvlBtn = document.getElementById("next-lvl-btn");

const scoreDiv = document.getElementById("score");
let score = 0;

startBtn.style.fontSize = gameFieldWidth / 20 + "px";

let gameLost = false;
let gameWon = false;
let recentSpatulaHit = false;

function start() {
	gameField.append(ball);
	gameField.style.cursor = "none";
	initializeLevel1();
	requestAnimationFrame(mainLoop);
}

function mainLoop() {
	startBtn.setAttribute("hidden", true);

	if (!isBallPaused) {
		calculate();
	}

	draw();

	if (!gameLost && !gameWon) {
		requestAnimationFrame(mainLoop);
	} else if (gameLost) {
		gameLostMsg.removeAttribute("hidden");
		ball.remove();
	} else if (gameWon) {
		gameWonMsg.removeAttribute("hidden");
		ball.setAttribute("hidden", "true");
		if (level != 2) {
			nextLvlBtn.removeAttribute("hidden");
		}
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

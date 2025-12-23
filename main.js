const gameOverMessage = document.getElementById("game-over");
const startBtn = document.getElementById("start");
const screenWidth = document.body.getBoundingClientRect().width;
const screenHeight = document.body.getBoundingClientRect().height;
let gameOver = false;
let recentSpatulaHit = false;

function start() {
	document.body.appendChild(ball);
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
		spatulaLeft = Math.max(spatulaLeft - 10, 0);
	} else if (rightPressed) {
		spatulaLeft =
			Math.min(spatulaLeft, screenWidth - spatulaWidth - 10) + 10;
	}

	if (!recentSpatulaHit) {
		checkIfHitSpatula();
	}
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

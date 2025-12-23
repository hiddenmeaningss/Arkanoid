const ball = document.createElement("div");
ball.id = "ball";
const ballDiameter = 20;

ball.style.width = ball.style.height = ballDiameter + "px";

let x = (gameFieldWidth - ballDiameter) / 2;
let y = gameFieldHeight * 0.9 - ballDiameter;
let horizontalSpeed = 10;
let verticalSpeed = -10;
let direction = "";
let isBallPaused = true;

function checkIfHitBorders() {
	if (x >= gameFieldWidth - ballDiameter) {
		x = gameFieldWidth - ballDiameter;
		horizontalSpeed *= -1;
	} else if (x < 0) {
		x = 0;
		horizontalSpeed *= -1;
	}

	if (y >= gameFieldHeight - ballDiameter) {
		y = gameFieldHeight - ballDiameter;
		gameOver = true;
	} else if (y < 0) {
		y = 0;
		verticalSpeed *= -1;
	}
}

function checkIfHitSpatula() {
	const ballCurrPos = {
		left: x,
		right: x + ballDiameter,
		top: y,
		bottom: y + ballDiameter,
	};
	const spatulaCurrPos = {
		left: spatulaLeft,
		right: spatulaLeft + spatulaWidth,
		top: spatulaTop,
		bottom: spatulaTop + spatulaHeight,
	};
	if (detectCollision(ballCurrPos, spatulaCurrPos)) {
		recentSpatulaHit = true;
		setTimeout(() => {
			recentSpatulaHit = false;
		}, 1000);

		let ballPrevPos = structuredClone(ballCurrPos);
		ballPrevPos.left -= horizontalSpeed;
		ballPrevPos.right -= horizontalSpeed;
		ballPrevPos.top -= verticalSpeed;
		ballPrevPos.bottom -= verticalSpeed;

		console.log(ballCurrPos);
		console.log(ballPrevPos);

		if (checkVerticalCollision(ballPrevPos, spatulaCurrPos)) {
			verticalSpeed *= -1;
		} else {
			horizontalSpeed *= -1;
		}
	}
}

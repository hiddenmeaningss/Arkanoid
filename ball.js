const ball = document.createElement("div");
let ballSpeed = gameFieldWidth / 70;

ball.id = "ball";
const ballDiameter = 20;

ball.style.width = ball.style.height = ballDiameter + "px";

let x = (gameFieldWidth - ballDiameter) / 2;
let y = gameFieldHeight * 0.9 - ballDiameter;
let horizontalSpeed = ballSpeed * Math.sin((25 * Math.PI) / 180);
let verticalSpeed = -ballSpeed * Math.cos((25 * Math.PI) / 180);
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
		gameLost = true;
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

		if (checkVerticalCollision(ballPrevPos, spatulaCurrPos)) {
			const ballMid = ballCurrPos.left + ballDiameter / 2;
			const hitPosition = (ballMid - spatulaCurrPos.left) / spatulaWidth;
			const x = hitPosition * 2 - 1;

			const maxAngle = 75;
			const angle = x * maxAngle;

			horizontalSpeed = ballSpeed * Math.sin((angle * Math.PI) / 180);
			verticalSpeed = -ballSpeed * Math.cos((angle * Math.PI) / 180);
		} else {
			horizontalSpeed *= -1;
		}
	}
}

function checkIfHitBlock() {
	for (let i = blocks.length - 1; i >= 0; i--) {
		const block = blocks[i];
		const ballCurrPos = {
			left: x,
			right: x + ballDiameter,
			top: y,
			bottom: y + ballDiameter,
		};
		const blockPos = {
			left: block.left,
			right: block.left + block.width,
			top: block.top,
			bottom: block.top + block.height,
		};
		if (detectCollision(ballCurrPos, blockPos)) {
			let ballPrevPos = structuredClone(ballCurrPos);
			ballPrevPos.left -= horizontalSpeed;
			ballPrevPos.right -= horizontalSpeed;
			ballPrevPos.top -= verticalSpeed;
			ballPrevPos.bottom -= verticalSpeed;

			if (checkVerticalCollision(ballPrevPos, blockPos)) {
				verticalSpeed *= -1;
			} else {
				horizontalSpeed *= -1;
			}
			block.element.remove();
			blocks.splice(i, 1);
		}
		if (blocks.length == 0) {
			gameWon = true;
		}
	}
}

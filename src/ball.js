const ball = document.createElement("div");
let ballSpeed = gameFieldWidth / 70;

ball.id = "ball";
const ballDiameter = gameFieldWidth / 46;

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
		if (lives == 0) {
			y = gameFieldHeight - ballDiameter;
			gameLost = true;
			document.querySelector(".heart").remove();
		} else {
			// Still lives left
			lives--;
			const heartsArr = Array.from(document.querySelectorAll(".heart"));
			heartsArr[heartsArr.length - 1].remove();

			x = (gameFieldWidth - ballDiameter) / 2;
			y = gameFieldHeight * 0.9 - ballDiameter;

			isBallPaused = true;

			spatulaLeft = (gameFieldWidth - spatulaWidth) / 2;
		}
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
		});

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

			ball.style.left = ballPrevPos.left + "px";
			ball.style.top = ballPrevPos.top + "px";

			if (checkHorizontalCollision(ballPrevPos, blockPos)) {
				horizontalSpeed *= -1;
			} else {
				verticalSpeed *= -1;
			}
			block.hitPoints--;
			if (block.hitPoints == 0) {
				block.element.remove();
				blocks.splice(i, 1);
				score = score + block.score;
				maxScore = Math.max(maxScore, score);
				localStorage.setItem("maxScore", maxScore);
				maxScoreDiv.textContent = `Max Score: ${maxScore}`;
				scoreDiv.textContent = `Score: ${score}`;
				isBallPaused = false;
			} else {
				block.element.classList.add("shine");
			}

			let allGold = true;
			for (let j = 0; j < blocks.length; j++) {
				if (blocks[j].color != "gold") {
					allGold = false;
				}
			}

			if (blocks.length == 0 || allGold) {
				gameWon = true;
			}
			break;
		}
	}
}

function initializeLevel2() {
	levelDiv.textContent = "Level 2";
	level = 2;
	nextLvlBtn.setAttribute("hidden", "true");

	gameWon = false;
	gameWonMsg.setAttribute("hidden", "true");

	spatulaLeft = (gameFieldWidth - spatulaWidth) / 2;
	ball.removeAttribute("hidden");
	x = (gameFieldWidth - ballDiameter) / 2;
	y = gameFieldHeight * 0.9 - ballDiameter;
	gameField.style.background = "url(../assets/background2.png)";
	gameField.style.backgroundSize = "48px 32px";
	isBallPaused = true;

	requestAnimationFrame(mainLoop);

	for (let i = 0; i < 10; i++) {
		initializeBlockColumn(2 * blockHeight, 0, "orange", i);
	}
	for (let i = 0; i < 9; i++) {
		initializeBlockColumn(3 * blockHeight, blockWidth, "lightblue", i);
	}
	for (let i = 0; i < 8; i++) {
		initializeBlockColumn(4 * blockHeight, 2 * blockWidth, "green", i);
	}
	for (let i = 0; i < 7; i++) {
		initializeBlockColumn(5 * blockHeight, 3 * blockWidth, "blue", i);
	}
	for (let i = 0; i < 6; i++) {
		initializeBlockColumn(6 * blockHeight, 4 * blockWidth, "red", i);
	}
	for (let i = 0; i < 5; i++) {
		initializeBlockColumn(7 * blockHeight, 5 * blockWidth, "orange", i);
	}
	for (let i = 0; i < 4; i++) {
		initializeBlockColumn(8 * blockHeight, 6 * blockWidth, "lightblue", i);
	}
	for (let i = 0; i < 3; i++) {
		initializeBlockColumn(9 * blockHeight, 7 * blockWidth, "green", i);
	}
	for (let i = 0; i < 2; i++) {
		initializeBlockColumn(10 * blockHeight, 8 * blockWidth, "blue", i);
	}
	for (let i = 0; i < 1; i++) {
		initializeBlockColumn(11 * blockHeight, 9 * blockWidth, "red", i);
	}

	for (let i = 0; i < 10; i++) {
		initializeBlockRow(12 * blockHeight, "silver", i);
	}
	initializeBlockRow(12 * blockHeight, "orange", 10);
}

function initializeLevel5() {
	levelDiv.textContent = "Level 5";
	level = 5;
	nextLvlBtn.setAttribute("hidden", "true");

	gameWon = false;
	gameWonMsg.setAttribute("hidden", "true");

	spatulaLeft = (gameFieldWidth - spatulaWidth) / 2;
	ball.removeAttribute("hidden");
	x = (gameFieldWidth - ballDiameter) / 2;
	y = gameFieldHeight * 0.9 - ballDiameter;
	gameField.style.background = "url(assets/background.png)";
	gameField.style.backgroundSize = "48px 32px";
	isBallPaused = true;

	requestAnimationFrame(mainLoop);

	initializeBlockRow(2 * blockHeight, "yellow", 3);
	initializeBlockRow(2 * blockHeight, "yellow", 7);
	initializeBlockColumn(3 * blockHeight, 4 * blockWidth, "yellow", 0);
	initializeBlockColumn(4 * blockHeight, 4 * blockWidth, "yellow", 0);
	initializeBlockColumn(3 * blockHeight, 6 * blockWidth, "yellow", 0);
	initializeBlockColumn(4 * blockHeight, 6 * blockWidth, "yellow", 0);

	for (let i = 3; i < 8; i++) {
		initializeBlockRow(5 * blockHeight, "silver", i);
	}
	for (let i = 3; i < 8; i++) {
		initializeBlockRow(6 * blockHeight, "silver", i);
	}

	initializeBlockRow(7 * blockHeight, "silver", 2);
	initializeBlockRow(7 * blockHeight, "silver", 3);
	initializeBlockRow(7 * blockHeight, "red", 4);
	initializeBlockRow(7 * blockHeight, "silver", 5);
	initializeBlockRow(7 * blockHeight, "red", 6);
	initializeBlockRow(7 * blockHeight, "silver", 7);
	initializeBlockRow(7 * blockHeight, "silver", 8);
	initializeBlockRow(8 * blockHeight, "silver", 2);
	initializeBlockRow(8 * blockHeight, "silver", 3);
	initializeBlockRow(8 * blockHeight, "red", 4);
	initializeBlockRow(8 * blockHeight, "silver", 5);
	initializeBlockRow(8 * blockHeight, "red", 6);
	initializeBlockRow(8 * blockHeight, "silver", 7);
	initializeBlockRow(8 * blockHeight, "silver", 8);

	for (let i = 1; i < 10; i++) {
		initializeBlockRow(9 * blockHeight, "silver", i);
	}
	for (let i = 1; i < 10; i++) {
		initializeBlockRow(10 * blockHeight, "silver", i);
	}

	initializeBlockRow(11 * blockHeight, "silver", 1);
	initializeBlockRow(11 * blockHeight, "silver", 3);
	initializeBlockRow(11 * blockHeight, "silver", 4);
	initializeBlockRow(11 * blockHeight, "silver", 5);
	initializeBlockRow(11 * blockHeight, "silver", 6);
	initializeBlockRow(11 * blockHeight, "silver", 7);
	initializeBlockRow(11 * blockHeight, "silver", 9);

	initializeBlockRow(12 * blockHeight, "silver", 1);
	initializeBlockRow(12 * blockHeight, "silver", 3);
	initializeBlockRow(12 * blockHeight, "silver", 7);
	initializeBlockRow(12 * blockHeight, "silver", 9);
	initializeBlockRow(13 * blockHeight, "silver", 1);
	initializeBlockRow(13 * blockHeight, "silver", 3);
	initializeBlockRow(13 * blockHeight, "silver", 7);
	initializeBlockRow(13 * blockHeight, "silver", 9);

	initializeBlockRow(14 * blockHeight, "silver", 4);
	initializeBlockRow(14 * blockHeight, "silver", 6);
	initializeBlockRow(15 * blockHeight, "silver", 4);
	initializeBlockRow(15 * blockHeight, "silver", 6);
}

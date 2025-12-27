function initializeLevel3() {
	levelDiv.textContent = "Level 3";
	level = 3;
	nextLvlBtn.setAttribute("hidden", "true");

	gameWon = false;
	gameWonMsg.setAttribute("hidden", "true");

	spatulaLeft = (gameFieldWidth - spatulaWidth) / 2;
	ball.removeAttribute("hidden");
	x = (gameFieldWidth - ballDiameter) / 2;
	y = gameFieldHeight * 0.9 - ballDiameter;
	gameField.style.background = "url(assets/background3.png)";
	gameField.style.backgroundSize = "64px 64px";
	isBallPaused = true;

	requestAnimationFrame(mainLoop);

	for (i = 0; i < 11; i++) {
		initializeBlockRow(3 * blockHeight, "green", i);
	}
	for (i = 0; i < 3; i++) {
		initializeBlockRow(5 * blockHeight, "white", i);
	}
	for (i = 3; i < 11; i++) {
		initializeBlockRow(5 * blockHeight, "gold", i);
	}
	for (i = 0; i < 11; i++) {
		initializeBlockRow(7 * blockHeight, "red", i);
	}
	for (i = 0; i < 8; i++) {
		initializeBlockRow(9 * blockHeight, "gold", i);
	}
	for (i = 8; i < 11; i++) {
		initializeBlockRow(9 * blockHeight, "white", i);
	}
	for (i = 0; i < 11; i++) {
		initializeBlockRow(11 * blockHeight, "pink", i);
	}
	for (i = 0; i < 3; i++) {
		initializeBlockRow(13 * blockHeight, "blue", i);
	}
	for (i = 3; i < 11; i++) {
		initializeBlockRow(13 * blockHeight, "gold", i);
	}
	for (i = 0; i < 11; i++) {
		initializeBlockRow(15 * blockHeight, "blue", i);
	}
	for (i = 0; i < 8; i++) {
		initializeBlockRow(17 * blockHeight, "gold", i);
	}
	for (i = 8; i < 11; i++) {
		initializeBlockRow(17 * blockHeight, "blue", i);
	}
}

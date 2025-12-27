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
}

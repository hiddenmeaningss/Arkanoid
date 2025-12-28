function initializeLevel4() {
	levelDiv.textContent = "Level 4";
	level = 4;
	nextLvlBtn.setAttribute("hidden", "true");

	gameWon = false;
	gameWonMsg.setAttribute("hidden", "true");

	spatulaLeft = (gameFieldWidth - spatulaWidth) / 2;
	ball.removeAttribute("hidden");
	x = (gameFieldWidth - ballDiameter) / 2;
	y = gameFieldHeight * 0.9 - ballDiameter;
	gameField.style.background = "url(assets/background4.png)";
	gameField.style.backgroundSize = "64px 64px";
	isBallPaused = true;

	requestAnimationFrame(mainLoop);

	initializeBlockRow(4 * blockHeight, "silver", 1);
	initializeBlockRow(4 * blockHeight, "yellow", 2);
	initializeBlockRow(4 * blockHeight, "green", 3);
	initializeBlockRow(4 * blockHeight, "pink", 4);
	initializeBlockRow(4 * blockHeight, "yellow", 6);
	initializeBlockRow(4 * blockHeight, "green", 7);
	initializeBlockRow(4 * blockHeight, "blue", 8);
	initializeBlockRow(4 * blockHeight, "silver", 9);

	initializeBlockRow(5 * blockHeight, "blue", 1);
	initializeBlockRow(5 * blockHeight, "green", 2);
	initializeBlockRow(5 * blockHeight, "yellow", 3);
	initializeBlockRow(5 * blockHeight, "red", 4);
	initializeBlockRow(5 * blockHeight, "green", 6);
	initializeBlockRow(5 * blockHeight, "yellow", 7);
	initializeBlockRow(5 * blockHeight, "silver", 8);
	initializeBlockRow(5 * blockHeight, "blue", 9);

	initializeBlockRow(6 * blockHeight, "green", 1);
	initializeBlockRow(6 * blockHeight, "pink", 2);
	initializeBlockRow(6 * blockHeight, "red", 3);
	initializeBlockRow(6 * blockHeight, "yellow", 4);
	initializeBlockRow(6 * blockHeight, "blue", 6);
	initializeBlockRow(6 * blockHeight, "silver", 7);
	initializeBlockRow(6 * blockHeight, "yellow", 8);
	initializeBlockRow(6 * blockHeight, "green", 9);

	initializeBlockRow(7 * blockHeight, "yellow", 1);
	initializeBlockRow(7 * blockHeight, "red", 2);
	initializeBlockRow(7 * blockHeight, "pink", 3);
	initializeBlockRow(7 * blockHeight, "green", 4);
	initializeBlockRow(7 * blockHeight, "silver", 6);
	initializeBlockRow(7 * blockHeight, "blue", 7);
	initializeBlockRow(7 * blockHeight, "green", 8);
	initializeBlockRow(7 * blockHeight, "yellow", 9);

	initializeBlockRow(8 * blockHeight, "red", 1);
	initializeBlockRow(8 * blockHeight, "yellow", 2);
	initializeBlockRow(8 * blockHeight, "green", 3);
	initializeBlockRow(8 * blockHeight, "blue", 4);
	initializeBlockRow(8 * blockHeight, "yellow", 6);
	initializeBlockRow(8 * blockHeight, "green", 7);
	initializeBlockRow(8 * blockHeight, "pink", 8);
	initializeBlockRow(8 * blockHeight, "red", 9);

	initializeBlockRow(9 * blockHeight, "pink", 1);
	initializeBlockRow(9 * blockHeight, "green", 2);
	initializeBlockRow(9 * blockHeight, "yellow", 3);
	initializeBlockRow(9 * blockHeight, "silver", 4);
	initializeBlockRow(9 * blockHeight, "green", 6);
	initializeBlockRow(9 * blockHeight, "yellow", 7);
	initializeBlockRow(9 * blockHeight, "red", 8);
	initializeBlockRow(9 * blockHeight, "pink", 9);

	initializeBlockRow(10 * blockHeight, "green", 1);
	initializeBlockRow(10 * blockHeight, "blue", 2);
	initializeBlockRow(10 * blockHeight, "silver", 3);
	initializeBlockRow(10 * blockHeight, "yellow", 4);
	initializeBlockRow(10 * blockHeight, "pink", 6);
	initializeBlockRow(10 * blockHeight, "red", 7);
	initializeBlockRow(10 * blockHeight, "yellow", 8);
	initializeBlockRow(10 * blockHeight, "green", 9);

	initializeBlockRow(11 * blockHeight, "yellow", 1);
	initializeBlockRow(11 * blockHeight, "silver", 2);
	initializeBlockRow(11 * blockHeight, "blue", 3);
	initializeBlockRow(11 * blockHeight, "green", 4);
	initializeBlockRow(11 * blockHeight, "red", 6);
	initializeBlockRow(11 * blockHeight, "pink", 7);
	initializeBlockRow(11 * blockHeight, "green", 8);
	initializeBlockRow(11 * blockHeight, "yellow", 9);

	initializeBlockRow(12 * blockHeight, "silver", 1);
	initializeBlockRow(12 * blockHeight, "yellow", 2);
	initializeBlockRow(12 * blockHeight, "green", 3);
	initializeBlockRow(12 * blockHeight, "pink", 4);
	initializeBlockRow(12 * blockHeight, "yellow", 6);
	initializeBlockRow(12 * blockHeight, "green", 7);
	initializeBlockRow(12 * blockHeight, "blue", 8);
	initializeBlockRow(12 * blockHeight, "silver", 9);

	initializeBlockRow(13 * blockHeight, "blue", 1);
	initializeBlockRow(13 * blockHeight, "green", 2);
	initializeBlockRow(13 * blockHeight, "yellow", 3);
	initializeBlockRow(13 * blockHeight, "red", 4);
	initializeBlockRow(13 * blockHeight, "green", 6);
	initializeBlockRow(13 * blockHeight, "yellow", 7);
	initializeBlockRow(13 * blockHeight, "silver", 8);
	initializeBlockRow(13 * blockHeight, "blue", 9);

	initializeBlockRow(14 * blockHeight, "green", 1);
	initializeBlockRow(14 * blockHeight, "pink", 2);
	initializeBlockRow(14 * blockHeight, "red", 3);
	initializeBlockRow(14 * blockHeight, "yellow", 4);
	initializeBlockRow(14 * blockHeight, "blue", 6);
	initializeBlockRow(14 * blockHeight, "silver", 7);
	initializeBlockRow(14 * blockHeight, "yellow", 8);
	initializeBlockRow(14 * blockHeight, "green", 9);

	initializeBlockRow(15 * blockHeight, "yellow", 1);
	initializeBlockRow(15 * blockHeight, "red", 2);
	initializeBlockRow(15 * blockHeight, "pink", 3);
	initializeBlockRow(15 * blockHeight, "green", 4);
	initializeBlockRow(15 * blockHeight, "silver", 6);
	initializeBlockRow(15 * blockHeight, "blue", 7);
	initializeBlockRow(15 * blockHeight, "green", 8);
	initializeBlockRow(15 * blockHeight, "yellow", 9);

	initializeBlockRow(16 * blockHeight, "red", 1);
	initializeBlockRow(16 * blockHeight, "yellow", 2);
	initializeBlockRow(16 * blockHeight, "green", 3);
	initializeBlockRow(16 * blockHeight, "blue", 4);
	initializeBlockRow(16 * blockHeight, "yellow", 6);
	initializeBlockRow(16 * blockHeight, "green", 7);
	initializeBlockRow(16 * blockHeight, "pink", 8);
	initializeBlockRow(16 * blockHeight, "red", 9);

	initializeBlockRow(17 * blockHeight, "pink", 1);
	initializeBlockRow(17 * blockHeight, "green", 2);
	initializeBlockRow(17 * blockHeight, "yellow", 3);
	initializeBlockRow(17 * blockHeight, "silver", 4);
	initializeBlockRow(17 * blockHeight, "green", 6);
	initializeBlockRow(17 * blockHeight, "yellow", 7);
	initializeBlockRow(17 * blockHeight, "red", 8);
	initializeBlockRow(17 * blockHeight, "pink", 9);
}

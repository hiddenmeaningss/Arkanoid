function initializeLevel1() {
	for (let i = 0; i < 8; i++) {
		initializeBlockRow(15, "yellow", i);
	}

	for (let i = 0; i < 8; i++) {
		initializeBlockRow(30 + gameFieldHeight / 20, "orange", i);
	}

	for (let i = 0; i < 8; i++) {
		initializeBlockRow(45 + 2 * (gameFieldHeight / 20), "red", i);
	}
}

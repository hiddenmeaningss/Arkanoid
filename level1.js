function initializeLevel1() {
	for (let i = 0; i < 8; i++) {
		initializeBlockRow(15, "yellow", i);
	}

	for (let i = 0; i < 8; i++) {
		initializeBlockRow(30 + blockHeight, "orange", i);
	}

	for (let i = 0; i < 8; i++) {
		initializeBlockRow(45 + 2 * blockHeight, "red", i);
	}
}

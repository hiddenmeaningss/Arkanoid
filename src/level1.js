const levelDiv = document.getElementById("level-div");

function initializeLevel1() {
	levelDiv.textContent = "Level 1";
	for (let i = 0; i < 11; i++) {
		initializeBlockRow(4 * blockHeight, "silver", i);
	}

	for (let i = 0; i < 11; i++) {
		initializeBlockRow(5 * blockHeight, "red", i);
	}

	for (let i = 0; i < 11; i++) {
		initializeBlockRow(6 * blockHeight, "blue", i);
	}

	for (let i = 0; i < 11; i++) {
		initializeBlockRow(7 * blockHeight, "orange", i);
	}

	for (let i = 0; i < 11; i++) {
		initializeBlockRow(8 * blockHeight, "pink", i);
	}

	for (let i = 0; i < 11; i++) {
		initializeBlockRow(9 * blockHeight, "green", i);
	}
}

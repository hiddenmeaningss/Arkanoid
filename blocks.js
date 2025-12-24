const blocks = [];

for (let i = 0; i < 8; i++) {
	const blockWidth = gameFieldWidth / 10;
	const block = {
		left: (gameFieldWidth / 8) * i + (gameFieldWidth / 8 - blockWidth) / 2,
		top: 15,
		width: blockWidth,
		height: gameFieldHeight / 20,
		element: document.createElement("div"),
	};

	block.element.className = "block";
	gameField.append(block.element);

	block.element.style.left = block.left + "px";
	block.element.style.top = block.top + "px";
	block.element.style.width = block.width + "px";
	block.element.style.height = block.height + "px";

	blocks.push(block);
}

for (let i = 0; i < 8; i++) {
	const blockWidth = gameFieldWidth / 10;
	const block = {
		left: (gameFieldWidth / 8) * i + (gameFieldWidth / 8 - blockWidth) / 2,
		top: 30 + gameFieldHeight / 20,
		width: blockWidth,
		height: gameFieldHeight / 20,
		element: document.createElement("div"),
	};

	block.element.className = "block";
	gameField.append(block.element);

	block.element.style.left = block.left + "px";
	block.element.style.top = block.top + "px";
	block.element.style.width = block.width + "px";
	block.element.style.height = block.height + "px";

	blocks.push(block);
}

for (let i = 0; i < 8; i++) {
	const blockWidth = gameFieldWidth / 10;
	const block = {
		left: (gameFieldWidth / 8) * i + (gameFieldWidth / 8 - blockWidth) / 2,
		top: 45 + 2 * (gameFieldHeight / 20),
		width: blockWidth,
		height: gameFieldHeight / 20,
		element: document.createElement("div"),
	};

	block.element.className = "block";
	gameField.append(block.element);

	block.element.style.left = block.left + "px";
	block.element.style.top = block.top + "px";
	block.element.style.width = block.width + "px";
	block.element.style.height = block.height + "px";

	blocks.push(block);
}

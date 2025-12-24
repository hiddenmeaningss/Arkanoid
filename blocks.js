const blocks = [];
const colors = [
	"white",
	"yellow",
	"pink",
	"blue",
	"red",
	"green",
	"lightblue",
	"orange",
];

function initializeBlockRow(top, color, i) {
	const blockWidth = gameFieldWidth / 10;
	const block = {
		left: (gameFieldWidth / 8) * i + (gameFieldWidth / 8 - blockWidth) / 2,
		top: top,
		width: blockWidth,
		height: gameFieldHeight / 20,
		element: document.createElement("div"),
	};

	block.element.classList.add("block");
	block.element.classList.add(color);
	gameField.append(block.element);

	block.element.style.left = block.left + "px";
	block.element.style.top = block.top + "px";
	block.element.style.width = block.width + "px";
	block.element.style.height = block.height + "px";
	block.element.style.borderWidth = block.height / 5 + "px";

	blocks.push(block);
}

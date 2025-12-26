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
	"silver",
];

const blockWidth = gameFieldWidth / 11;
const blockHeight = gameFieldHeight / 22;

function initializeBlockRow(top, color, i) {
	const block = {
		left: blockWidth * i,
		top: top,
		width: blockWidth,
		height: blockHeight,
		element: document.createElement("div"),
		color: color,
		hitPoints: color == "silver" ? 2 : 1,
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

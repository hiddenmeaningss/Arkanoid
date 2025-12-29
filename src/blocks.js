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
	"gold",
];

const blockWidth = gameFieldWidth / 11;
const blockHeight = gameFieldHeight / 28;

function initializeBlockRow(top, color, i) {
	const block = {
		left: blockWidth * i,
		top: top,
		width: blockWidth,
		height: blockHeight,
		element: document.createElement("div"),
		color: color,
		hitPoints: color == "silver" ? 2 : color == "gold" ? Infinity : 1,
		score:
			color == "white"
				? 50
				: color == "orange"
				? 60
				: color == "lightblue"
				? 70
				: color == "green"
				? 80
				: color == "red"
				? 90
				: color == "blue"
				? 100
				: color == "pink"
				? 110
				: color == "yellow"
				? 120
				: 50 * level,
	};

	block.element.classList.add("block");
	block.element.classList.add(color);
	gameField.append(block.element);

	block.element.style.left = block.left + "px";
	block.element.style.top = block.top + "px";
	block.element.style.width = block.width + "px";
	block.element.style.height = block.height + "px";
	block.element.style.borderWidth =
		block.color == "silver" || block.color == "gold"
			? block.height / 4 + "px"
			: block.height / 5 + "px";

	blocks.push(block);
}
function initializeBlockColumn(top, left, color, i) {
	const block = {
		left: left,
		top: top + i * blockHeight,
		width: blockWidth,
		height: blockHeight,
		element: document.createElement("div"),
		color: color,
		hitPoints: color == "silver" ? 2 : 1,
		score:
			color == "white"
				? 50
				: color == "orange"
				? 60
				: color == "lightblue"
				? 70
				: color == "green"
				? 80
				: color == "red"
				? 90
				: color == "blue"
				? 100
				: color == "pink"
				? 110
				: color == "yellow"
				? 120
				: 50 * level,
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

function initializeNextLevel() {
	for (let i = blocks.length - 1; i >= 0; i--) {
		blocks[i].element.remove();
		blocks.splice(i, 1);
	}
	if (level == 1) {
		initializeLevel2();
	} else if (level == 2) {
		initializeLevel3();
	} else if (level == 3) {
		initializeLevel4();
	} else if (level == maxLevel) {
		location.reload();
	}
}

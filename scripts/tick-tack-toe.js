let currentPlayer = "X";
let cells = Array(9).fill("");

function placeMarker(index) {
	if (cells[index] === "") {
		cells[index] = currentPlayer;
		document.getElementById(index).innerHTML = currentPlayer;

		if (checkWin(currentPlayer)) {
			disableButtons();
			resetGame();
		} else if (checkDraw()) {
			disableButtons();
			resetGame();
			document.getElementById("message").innerHTML = "It's a draw!";
		} else {
			currentPlayer = currentPlayer === "X" ? "O" : "X";
		}
	}
}

function checkWin(player) {
	const winningCombinations = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6]
	];

	for (let combination of winningCombinations) {
		if (
			cells[combination[0]] === player &&
			cells[combination[1]] === player &&
			cells[combination[2]] === player
		) {
			return true;
		}
	}

	return false;
}

function checkDraw() {
	return cells.every(cell => cell !== "");
}

function disableButtons() {
	const buttons = document.getElementsByTagName("button");
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].removeAttribute("onclick");
	}
}

function resetGame() {
	currentPlayer = "X";
	cells = Array(9).fill("");

	const rows = document.getElementsByClassName("row");
	for (let i = 0; i < rows.length; i++) {
		const buttons = rows[i].getElementsByTagName("button");
		for (let j = 0; j < buttons.length; j++) {
			const button = buttons[j];
			button.innerHTML = "";
			button.setAttribute("onclick", "placeMarker(" + (i * 3 + j) + ")");
		}
	}

	document.getElementById("message").innerHTML = "";
}

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
	resetGame();
});

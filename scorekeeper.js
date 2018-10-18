var p1AddButton = document.querySelector("#p1-add");
var p1MinusButton = document.querySelector("#p1-minus");
var p2AddButton = document.querySelector("#p2-add");
var p2MinusButton = document.querySelector("#p2-minus");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var numInput = document.querySelector("select"); //or input[type="number"] if mult inputs
var winnerText = document.querySelector("#winner-display")
var winningScore = Number(numInput.value);
var p1Score = 0;
var p2Score = 0;
var gameOver = false;

p1AddButton.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
			winnerText.innerHTML = "Player 1 wins!"
		}
		p1Display.textContent = p1Score;
	}
})

p1MinusButton.addEventListener("click", function(){
	if (!gameOver && p1Score > 0) {
		p1Score--;
		p1Display.textContent = p1Score;
	}
})

p2AddButton.addEventListener("click", function(){
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
			winnerText.textContent = "Player 2 wins!"
		}
		p2Display.textContent = p2Score;
	}
})

p2MinusButton.addEventListener("click", function(){
	if (!gameOver && p2Score > 0) {
		p2Score--;
		p2Display.textContent = p2Score;
	}
})


resetButton.addEventListener("click", function(){
	reset();
})

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent =0;
	p2Display.textContent =0;
	winnerText.textContent = "";
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function() {
		winningScore = Number(numInput.value);
		reset();
})

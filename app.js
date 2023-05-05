/*----- constants -----*/
const PLAYERS = {
'1': 'X',
'-1': 'O',
'null': ''

};

const winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
  ];

/*----- app's state (variables) -----*/
let board,turn,winner;



/*----- cached elements  -----*/
const messageEl = document.querySelector('h2');
const buttonEl = document.querySelector('button');
const boardEl = document.getElementById('board');
const boardEls = document.querySelectorAll('#board > div');


/*----- event listeners -----*/


/*----- functions -----*/
init();


// Initialize all state variables, then call render()
function init() {
    board = [null, null, null, null, null, null, null, null, null];
	// OR initialize like this:
  // board = new Array(9).fill(null);
	turn = 1;
	winner = null; // null is indiacates that no winner yet
	render();
}
// this function transfer the state of our application to the DOM
function render() {
	renderBoard();
	renderMessage();	

}

function renderBoard() {
	
}

function renderMessage() {
	if (winner === 'T') {
		messageEl.innerText = "It's a Tie!!!";
	} else if (winner) {
		messageEl.innerText = `${PLAYERS[winner].toUpperCase()} Wins!`;
	} else {
		messageEl.innerText = `${PLAYERS[turn].toUpperCase()} turn`;
	}
}


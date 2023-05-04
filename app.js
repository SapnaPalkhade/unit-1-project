	/*----- constants -----*/
    const PLAYERS = {
		'0': 'empty',
		'1':'X-player',
	   '-1': 'O-player'
		
	  };


	/*----- state variables -----*/
	let turn;  // this will be 1 or -1
	let board; // this will be 2d array of 3 aaray and 3 values
	let winner; //this will set to null,1,-1 or 'T'



	/*----- cached elements  -----*/


	/*----- event listeners -----*/


	/*----- functions -----*/
	init();

	function init() {
		turn = 1;

		//// rotate the board array 90 degrees counter-clockwise
		board = [
			[0,0,0], // col 0
			[0,0,0], // col 1
			[0,0,0], // col 2
		// r0 r1 r2
		];
		winner = null; // null is indiacates that no winner yet
		render(); 
	}
    // this function transfer the state of our application to the DOM
	function render() {
		renderBoard();
		renderMessage();
		
	}

	function renderBoard() {
		board.forEach(function(colArr,colIdx) {
			colArr.forEach(function(rowVal, rowIdx) {
				const cellId = `c${colIdx}r${rowIdx}`;
				const cellEl = document.getElementById(cellId);
				console.log(cellEl);

			});
		});

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
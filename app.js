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
		render(); // tranfer the game logic to UI
	}

	function render() {

	}
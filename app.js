/*----- constants -----*/
const PLAYERS = {
'1': 'X',
'-1': 'O',
'null': ''

};

let xWins = 0;
let oWins = 0;

const COMBOS = [
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
const squareEls = document.querySelectorAll('#board > div');



/*----- event listeners -----*/
boardEl.addEventListener('click', handleClick);
buttonEl.addEventListener('click', init);

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

function checkWinner() {
	for(let i = 0; i < COMBOS.length; i++) {
	  if(Math.abs(board[COMBOS[i][0]] + 
				  board[COMBOS[i][1]] + 
				  board[COMBOS[i][2]]) === 3) {
		return board[COMBOS[i][0]];
	  }
	}
	if(board.includes(null)) return false;
	
	//   prompt('T')
	return 'T';
  }


// // // this function transfer the state of our application to the DOM
  function render() {
	renderBoard();
    renderControl() 	

 }

function handleClick(event) {
	const position = event.target.dataset.index;
    if(board[position] || winner) return; // exit the function's execution
   board[position] = turn;
   turn *= -1;
   winner = checkWinner();
   render();
}

function renderBoard() {
	// transfer the state of the game to the DOM
  squareEls.forEach(function(square, position) {
    square.textContent = PLAYERS[board[position]];
  });

  if(!winner) {
    messageEl.textContent = `Player ${PLAYERS[turn]}'s turn`; 

	  buttonEl.style.visibility = 'hidden';

  } else if(winner === 'T') {
  
     messageEl.textContent = 'Its a Tie!!!';

  } else {
     messageEl.textContent = `Player ${PLAYERS[winner]} Wins`;

	  buttonEl.style.visibility = 'visible';

	  if (PLAYERS[winner] === 'X') {
      xWins++
      if (xWins === 3) {
        alert(`${PLAYERS[winner]} Player wins 3 times`)
        init();
      }
    } else {
      oWins++
      if (oWins === 3) {
        alert(`${PLAYERS[winner]} Player wins 3 times`)
        init();
      }
    }
  }
  
}





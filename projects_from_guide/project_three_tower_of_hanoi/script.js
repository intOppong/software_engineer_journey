

/*
  ========================================
  BEGIN HERE
  ========================================
*/
// Create Canvas
var canvas = document.getElementById('canvas');
canvas.width = 600;
canvas.height = 500;
var ctx = canvas.getContext('2d');

// Draw Table
ctx.fillStyle = '#795548';
ctx.fillRect(50, 400, 500, 15);


// Draw Pegs
createPegs();
for (let i = 0; i < numOfPegs; i++) {
	pegs[i].drawPeg();
}

function begin() {
	createDiscs(getInitialPeg());
	setSortPeg();
	setBaseDisc(getInitialPeg());


	if (checkPegState() != 3) {
		console.log('Error'); debugger; // TODO: error
	}

	while(getLengthOfInitialPeg()) {
		moveDisc(baseDisc);
		if (baseDisc.num > 1) {
			createMoveArray();
			while (smallerDiscs.length != 0 ) {
				setDestinationPegs();
				for (let i = 0; i < smallerDiscs.length; i++) {
					movement(smallerDiscs[i]);
				}
				smallerDiscs.splice(smallerDiscs.length - 1, 1);
			}
		}
		setSortPeg();
		setBaseDisc(getInitialPeg());
	}
	console.log("RESULTS");console.log(pegs);
}

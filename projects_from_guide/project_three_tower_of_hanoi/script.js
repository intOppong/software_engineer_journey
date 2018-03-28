
// Create Canvas
var canvas = document.getElementById('canvas');
canvas.width = 600;
canvas.height = 500;
var ctx = canvas.getContext('2d');

// Draw Table
ctx.fillStyle = '#795548';
ctx.fillRect(50, 400, 500, 20);

// Draw Pegs
createPegs();
drawPegs();

function towerOfTanoiSolver() {
	console.log('New Round');
	if (getLengthOfInitialPeg()) {
		console.log('here');
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
		if (getLengthOfInitialPeg()) {
			setSortPeg();
			setBaseDisc(getInitialPeg());
		}
		if (getLengthOfInitialPeg() == 0) {
			console.log(orderOfMovement);
		}
	}
}


function animation(callback){
	var startAnimation = false;
	var moved = true; discXPos = 1; dpXPos = 10;

	var discAnimation = setInterval(function(){

		// Animation
		if (startAnimation) {
			if(discXPos <= dpXPos){
				console.log('Animate: move discs x & y values on canvas');
				discXPos++;
				moved = false;
				orderOfMovement.length = 0;
			} else{
				startAnimation = false;
				moved = true;
				discXPos = 1;
			}
		}

		// Clear Interval. ie End
		if (!getLengthOfInitialPeg() && !startAnimation) {
			console.log(pegs);
			console.log('DONE');
			clearInterval(discAnimation);
		}

		// Logic
		if (moved) {
			callback();
			moved = false;
			startAnimation = true;
		}

	}, 100 );
}

function begin() {
	createDiscs(getInitialPeg());
	drawDiscs();

	setSortPeg();
	setBaseDisc(getInitialPeg());
	if (checkPegState() != 3) {
		console.log('Error'); debugger; // TODO: error
	}

	animation(towerOfTanoiSolver);
}

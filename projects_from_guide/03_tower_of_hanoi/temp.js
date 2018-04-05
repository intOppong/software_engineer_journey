
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

var i = 0;

function towerOfTanoiSolver() {
	console.log('New Round');i++;
	if (getLengthOfInitialPeg()) {
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
	}
}

function animation(callback) {
	var moveToX;
	var moveToY;
	var distance = 0;
	var tempDisc = Object.create(Disc);
	tempDisc.init();

	var discAnimation = setInterval(function() {

		// Animation
		if (orderOfMovement.length) {

			let movingDisc = orderOfMovement[0];
			let j = nextOccurrenceOfDisc(movingDisc);

			if (j) {
				moveToX = orderOfMovement[j].xPos;
				moveToY = orderOfMovement[j].yPos;
			} else {
				let peg = getDestinationPeg(movingDisc);
				for (let movedDisc of peg.discs) {
					if (movingDisc.num == movedDisc.num ) {
						moveToX = movedDisc.xPos;
						moveToY = movedDisc.yPos;
					}
				}
			}
			/*if (i == 2) {
				console.log(orderOfMovement);console.log(pegs);debugger;
			}*/

			// if disc x pos != dp x pos && disc y pos != dp y pos
			if (movingDisc.xPos != moveToX || movingDisc.yPos != moveToY) {

				let biggestDiscWidth = widthDiff * (numOfDiscs - 1) + baseWidth;

				if (movingDisc.yPos != (pegs[0].yPos - 20) && movingDisc.xPos != moveToX) {	// move Y till it's 20px above cp
					console.log('move Y to top of cp');

					let peg = getCurrentPeg(movingDisc);
					let biggestDiscXPos = calc(peg.xPos, numOfDiscs, discXPos);

					ctx.clearRect(biggestDiscXPos, peg.yPos - 20, biggestDiscWidth, peg.height + 20);
					peg.drawPeg();
					let numOfDiscsCP = movingDisc.discsCP.total;
					let gap = 20;

					for (let i = 0; numOfDiscsCP > 0; i++) {
						tempDisc.num = movingDisc.discsCP.nums[i];
						tempDisc.xPos = (peg.xPos - widthDiff) - (widthDiff/2) * (tempDisc.num-1);
						tempDisc.yPos = movingDisc.yPos + gap + distance;
						tempDisc.width = widthDiff * (tempDisc.num - 1) + baseWidth;
						tempDisc.height = movingDisc.height;
						tempDisc.drawDisc(discsColors[tempDisc.num - 1]);
						gap += 20;
						numOfDiscsCP--;
					}
					distance++;

					ctx.clearRect(movingDisc.xPos, movingDisc.yPos, movingDisc.width, movingDisc.height);
					movingDisc.yPos--;
					movingDisc.drawDisc(discsColors[movingDisc.num - 1]);

				} else if (movingDisc.xPos != moveToX) {	// move x pos till it's same as dp x pos
					console.log('move X to top of dp');
					if (movingDisc.xPos < moveToX) {

						ctx.clearRect(movingDisc.xPos, movingDisc.yPos, movingDisc.width, movingDisc.height);
						movingDisc.xPos++;
						movingDisc.drawDisc(discsColors[movingDisc.num - 1]);

					} else {

						ctx.clearRect(movingDisc.xPos, movingDisc.yPos, movingDisc.width, movingDisc.height);
						movingDisc.xPos--;
						movingDisc.drawDisc(discsColors[movingDisc.num - 1]);

					}
				} else {
						// move y pos till it's at right position in dp y pos
						console.log('move Y down to its dp position');

						let peg = getDestinationPeg(movingDisc);
						let biggestDiscXPos = calc(peg.xPos, numOfDiscs, discXPos);

						ctx.clearRect(biggestDiscXPos, peg.yPos - 20, biggestDiscWidth, peg.height + 20);

						peg.drawPeg();

						let numOfDiscsDP = movingDisc.discsDP.total;
						let gap = 0;


						for (let i = movingDisc.discsDP.nums.length - 1; numOfDiscsDP > 0; i--) {
							tempDisc.num = movingDisc.discsDP.nums[i];
							tempDisc.xPos = (peg.xPos - widthDiff) - (widthDiff/2) * (tempDisc.num - 1);
							tempDisc.yPos = 380 - gap;
							tempDisc.width = widthDiff * (tempDisc.num - 1) + baseWidth;
							tempDisc.height = movingDisc.height;
							tempDisc.drawDisc(discsColors[tempDisc.num - 1]);
							gap += 20;
							numOfDiscsDP--;
						}

						ctx.clearRect(movingDisc.xPos, movingDisc.yPos, movingDisc.width, movingDisc.height);
						movingDisc.yPos++;
						movingDisc.drawDisc(discsColors[movingDisc.num - 1]);

				}
			} else {
				// continue animation: animate next disc in orderOfMovement
				orderOfMovement.splice(0,1);
				distance = 0;
			}
		} else if (!getLengthOfInitialPeg()) {	// Clear Interval. ie End
			console.log(pegs);
			console.log('DONE');
			clearInterval(discAnimation);
		} else {
			callback();
		}

	}, 1);
}

function begin() {
	createDiscs(getInitialPeg());
	for (let peg of pegs) {
		drawDiscs(peg);
	}

	//console.log(numOfDiscs);debugger;

	setSortPeg();
	setBaseDisc(getInitialPeg());
	if (checkPegState() != 3) {
		console.log('Error'); debugger; // TODO: error
	}

	animation(towerOfTanoiSolver);
}

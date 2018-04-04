
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

			/*if (i == 4 && orderOfMovement.length == 5) {
				console.log(peg);console.log(movingDisc);console.log(orderOfMovement);debugger;
			}*/

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



			// if disc x pos != dp x pos && disc y pos != dp y pos
			if (movingDisc.xPos != moveToX || movingDisc.yPos != moveToY) {

				if (movingDisc.yPos != (pegs[0].yPos - 20) && movingDisc.xPos != moveToX) {	// move Y till it's 20px above cp
					console.log('move Y to top of cp');

					let peg = getCurrentPeg(movingDisc);

					ctx.clearRect(movingDisc.xPos, peg.yPos - 20, movingDisc.width, peg.height + 20);
					peg.drawPeg();

					let numOfDiscsCP = movingDisc.numOfDiscsCP;
					let gap = 20;

					for (let i = 0; numOfDiscsCP > 0; i++) {
						tempDisc.num = movingDisc.discsCP.num[i];
						tempDisc.xPos = movingDisc.xPos;
						tempDisc.yPos = movingDisc.yPos + gap + distance;
						tempDisc.width = movingDisc.width;
						tempDisc.height = movingDisc.height;
						tempDisc.drawDisc();
						gap += 20;
						numOfDiscsCP--;
					}
					distance++;

					ctx.clearRect(movingDisc.xPos, movingDisc.yPos, movingDisc.width, movingDisc.height);
					movingDisc.yPos--;
					movingDisc.drawDisc();

				} else if (movingDisc.xPos != moveToX) {	// move x pos till it's same as dp x pos
					console.log('move X to top of dp');
					if (movingDisc.xPos < moveToX) {

						ctx.clearRect(movingDisc.xPos, movingDisc.yPos, movingDisc.width, movingDisc.height);
						movingDisc.xPos++;
						movingDisc.drawDisc();

					} else {

						ctx.clearRect(movingDisc.xPos, movingDisc.yPos, movingDisc.width, movingDisc.height);
						movingDisc.xPos--;
						movingDisc.drawDisc();

					}
				} else {
					// move y pos till it's at right position in dp y pos
					console.log('move Y down to its dp position');

					let peg = getDestinationPeg(movingDisc);

					ctx.clearRect(movingDisc.xPos, peg.yPos - 20, movingDisc.width, peg.height + 20);
					peg.drawPeg();


						let numOfDiscsDP = movingDisc.discsDP.total;
						let gap = 0;

						for (let i = 0; numOfDiscsDP > 0; i++) {
							tempDisc.num = movingDisc.discsDP.num[i];
							tempDisc.xPos = movingDisc.xPos;
							tempDisc.yPos = 380 - gap;
							tempDisc.width = movingDisc.width;
							tempDisc.height = movingDisc.height;
							tempDisc.drawDisc();
							gap += 20;
							numOfDiscsDP--;
						}

						/*
						let numOfDiscsDP = movingDisc.numOfDiscsDP;
						for (let i = 1; numOfDiscsDP > 0; i++) {
							for (let peg of pegs) {
								for (let disc of peg.discs) {
									if (disc.num == movingDisc.num + i) {
										disc.drawDisc();
									}
								}
							}
							numOfDiscsDP--;
						}*/
						ctx.clearRect(movingDisc.xPos, movingDisc.yPos, movingDisc.width, movingDisc.height);
						movingDisc.yPos++;
						movingDisc.drawDisc();


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


	setSortPeg();
	setBaseDisc(getInitialPeg());
	if (checkPegState() != 3) {
		console.log('Error'); debugger; // TODO: error
	}

	animation(towerOfTanoiSolver);
}

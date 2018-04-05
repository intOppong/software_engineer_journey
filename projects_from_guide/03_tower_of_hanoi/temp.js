
window.onload = function () {
	createCanvas();
}

function begin() {
	createDiscs(getInitialPeg());
	setSortPeg();
	setBaseDisc(getInitialPeg());
	if (checkPegState() != 3) {
		console.log('Error'); debugger; // TODO: error
	}
	animation(towerOfTanoiSolver);
}

function towerOfTanoiSolver() {
	console.log('New Round');
	if (getLengthOfInitialPeg()) {
		moveDisc(baseDisc);
		if (baseDisc.num > 1) {
			createSmallerDiscs();
			while (smallerDiscs.length != 0 ) {
				setDestinationPeg();
				for (let i = 0; i < smallerDiscs.length; i++) {
					moveDisc(smallerDiscs[i]);
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

	discAnimation = setInterval(function() {

		if (orderOfMovement.length) {

			let movingDisc = orderOfMovement[0];

			let i = nextOccurrenceOfDisc(movingDisc);
			if (i) {
				moveToX = orderOfMovement[i].xPos;
				moveToY = orderOfMovement[i].yPos;
			} else {
				let peg = getDestinationPeg(movingDisc);
				for (let movedDisc of peg.discs) {
					if (movingDisc.num == movedDisc.num ) {
						moveToX = movedDisc.xPos;
						moveToY = movedDisc.yPos;
					}
				}
			}

			if (movingDisc.xPos != moveToX || movingDisc.yPos != moveToY) {

				let biggestDiscWidth = widthDiff * (numOfDiscs - 1) + baseWidth;

				if (movingDisc.yPos != (pegs[0].yPos - 20) && movingDisc.xPos != moveToX) {
					// move Disc to the top of Current Peg
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

				} else if (movingDisc.xPos != moveToX) {
						// move Disc to the top of Destination Peg
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
						// Lower Disc to the right position on it's Destination Peg
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
				orderOfMovement.splice(0,1);
				distance = 0;
			}
		} else if (!getLengthOfInitialPeg()) {
			console.log(pegs);
			console.log('DONE');
			clearInterval(discAnimation);
		} else {
			callback();
		}

	}, 1);
}



/*
  ========================================
  FUNCTIONS
  ========================================
*/
function createDiscs(peg) {
	if (peg === null) {
		return console.log('Error'); // TODO: error
	}
	numOfDiscs = document.getElementById("numOfDiscs").selectedIndex;
	let xPos = 80;
	let yPos = 240;
	let width = 50;
	let height = 6;
	let gap = 0;

	for (let i = 0; i < numOfDiscs; i++) {
		peg.discs[i] = Object.create(Disc);
		peg.discs[i].init(i+1, xPos, yPos, width, height);
		gap += 20;
		yPos = 240 + gap;
	}
	return 1;
}

function drawDiscs() {
	for (let peg of pegs) {
		if (peg.discs.length != 0) {
			for (let i = 0; i < peg.discs.length; i++) {
				peg.discs[i].drawDisc();
			}
		}
	}
}

function setBaseDisc(peg) {
	if (peg === null) {
		return console.log('Error'); // TODO: error
	}
	baseDisc = peg.discs[0];
	baseDisc.currentPeg = peg.pos;
	baseDisc.destinationPeg = setBaseDiscDestinationPeg();
	return 1;
}

function getInitialPeg() {
	for (let peg of pegs) {
		if (peg.initialPeg === true) {
			return peg;
		}
	}
	return null;
}

function getLengthOfInitialPeg() {
	for (let peg of pegs) {
		if (peg.initialPeg) {
			return peg.discs.length;
		}
	}
	console.log('Error'); debugger;// TODO: error
}

function setSortPeg() {
	for (let peg of pegs) {
		if (peg.sortPeg === true) {
			peg.sortPeg = false;
		}
	}

	if (getLengthOfInitialPeg() != 0) {
		let LargestDiscNumberType = numOfDiscs % 2;
		if (!LargestDiscNumberType) {
			if (!(getInitialPeg().discs[0].num % 2)) {
				for (peg of pegs) {
					if (peg.finalPeg & !peg.initialPeg) {
						peg.sortPeg = true;
						return 1;
					}
				}
			} else {
				for (peg of pegs) {
					if (!peg.finalPeg & !peg.initialPeg) {
						peg.sortPeg = true;
						return 1;
					}
				}
			}
			console.log('Error'); debugger;// TODO: error
		}
		else {
			if (getInitialPeg().discs[0].num % 2) {
				for (peg of pegs) {
					if (peg.finalPeg & !peg.initialPeg) {
						peg.sortPeg = true;
						return 1;
					}
				}
			} else {
				for (peg of pegs) {
					if (!peg.finalPeg & !peg.initialPeg) {
						peg.sortPeg = true;
						return 1;
					}
				}
			}
			console.log('Error'); debugger;// TODO: error
		}
	} else {
		for (peg of pegs) {
			if (peg.finalPeg) {
				peg.sortPeg = true;
				return 1;
			}
		}
	}

	console.log('Error'); debugger;// TODO: error
}

function setBaseDiscDestinationPeg() {
	for(let peg of pegs) {
		if (peg.sortPeg === true) {
			return peg.pos;
		}
	}
	console.log('Error'); debugger;// TODO: error
}

function moveDisc(disc) {
	addDiscToNewPeg(disc);
	deleteDiscFromOldPeg(disc);
	animate(getCurrentPeg(disc), disc);
	updateCurrentPeg(disc);
	deleteDestinationPeg(disc);
}

function animate(peg, disc) {
	requestAnimationFrame(animate); // Recursion: calls the animate function over & over again

	// Clear entire canvas
	ctx.clearRect(disc.xPos, disc.yPos, disc.width, disc.height);

	// Draw Peg

	peg.drawPeg();
	// Draw Disc
	disc.move();

	disc.drawDisc();
	console.log('here');debugger;
}

function createMoveArray() {
	for (let peg of pegs) {
		if (!peg.sortPeg && !peg.initialPeg) {
			for(let i = 0; i < peg.discs.length; i++) {
				smallerDiscs[i] = peg.discs[i];
			}
		}
	}
}


function setDestinationPegs() {

	setLargestDiscDestinationPeg();
	setRemainderDiscsDestinationPeg();
}

function movement(disc) {
	let flag = 1;
	while (flag) {
		let lower = LowestDiscInCurrentPeg(disc);
		if (lower === disc) {
			lower = LowestDiscInDestinationPeg(disc);
			if (lower === disc) {
				moveDisc(lower);
				flag = 0;
			} else {
				updateLowerDiscDestinationPeg(lower, disc);
				movement(lower);
			}
		} else {
			updateLowerDiscDestinationPeg(lower, disc);
			movement(lower);
		}
	}
}

function LowestDiscInCurrentPeg(disc) {
	let lower;
	let peg = getCurrentPeg(disc);
	for (let i in peg.discs) {
		if (peg.discs[i].num === disc.num) {
			lower = peg.discs[i-1];
			if (lower != undefined) {
				return lower;
			} else {
				return disc;
			}
		}
	}
}

function LowestDiscInDestinationPeg(disc) {
	let peg = getDestinationPeg(disc);
	let lengthOfPeg = peg.discs.length;
	for (let i = lengthOfPeg - 1; i >= 0; ) {
		if (peg.discs[i].num > disc.num) {
			i--;
		} else {
			return getLowerDisc(peg.discs[i].num)
		}
	}
	return disc;
}

function updateLowerDiscDestinationPeg(lowerDisc, higherMovingDisc) {
	getPegPositions();
	eliminateDiscCP(lowerDisc);
	eliminateHigherDiscCurrentPeg(higherMovingDisc);
	eliminateHigherDiscDestinationPeg(higherMovingDisc);
	assignDestinationPeg(lowerDisc);
}

			/*
			  ========================================
			  USER INTERACTION
			  ========================================
			*/

function setInitialPeg(pos) {
	if (initialPegExists()) {
		console.log("ERROR - initialPeg already set");debugger;
	}

	for (let peg of pegs) {
		if (peg.pos === pos) {
			peg.initialPeg = true;
			showPossibleFinalPegOptions(peg.pos);
		}
	}

	console.log(pegs);
}

function setFinalPeg(pos) {
	if (initialPegExists()) {
		if (!finalPegExists()) {
			for (let peg of pegs) {
				peg.finalPeg = false;
			}
			for (let peg of pegs) {
				if (!peg.initialPeg && peg.pos === pos) {
					peg.finalPeg = true;
					console.log(pegs);
					return 1;
				}
			}
			console.log('Error - Initial Peg cannot be the Final Peg');debugger; // TODO: error
		} else {
			console.log('Error - final Peg already set');debugger; // TODO: error
		}
	} else {
		console.log('Error - set Initial Peg first');debugger; // TODO: error
	}
}

/*
  ========================================
  HELPER FUNCTIONS
  ========================================
*/


function addDiscToNewPeg(disc) {
	for (let peg of pegs) {
		if (peg.pos === disc.destinationPeg) {
			peg.discs.splice(0, 0, disc);
			return 1;
		}
	}
	console.log('Error'); debugger;// TODO: error
}

function deleteDiscFromOldPeg(disc) {
	for (let peg of pegs) {
		if (peg.pos === disc.currentPeg) {
			peg.discs.splice(0, 1);
			return 1;
		}
	}
	console.log('Error'); debugger;// TODO: error
}

function updateCurrentPeg(disc) {
	for (let peg of pegs) {
		if (peg.pos === disc.destinationPeg) {
			disc.currentPeg = disc.destinationPeg;
			return 1;
		}
	}
	console.log('Error'); debugger;// TODO: error
}

function deleteDestinationPeg(disc) {
	disc.destinationPeg = null;
	return 1;
}

function setLargestDiscDestinationPeg() {
	let peg = getSortPeg();
	smallerDiscs[smallerDiscs.length - 1].destinationPeg = peg.pos;
}

function setRemainderDiscsDestinationPeg() {
	for (let i = smallerDiscs.length - 2; i >= 0; i--) {
		getPegPositions();
		// not disc's CP
		eliminateDiscCP(smallerDiscs[i]);
		// not higher disc's DP or CP
		eliminateHigherDiscCurrentPeg(smallerDiscs[i+1]);
		eliminateHigherDiscDestinationPeg(smallerDiscs[i+1]);
		// assign remainder pegPosition as dp of disc
		assignDestinationPeg(smallerDiscs[i]);
	}
}

function getCurrentPeg(disc) {
	for (let peg of pegs) {
		if (peg.pos === disc.currentPeg) {
			return peg;
		}
	}
	console.log('Error'); debugger;// TODO: error
}

function getDestinationPeg(disc) {
	for (let peg of pegs) {
		if (peg.pos === disc.destinationPeg) {
			return peg;
		}
	}
	console.log('Error'); debugger;// TODO: error
}

function getSortPeg() {
	for (let peg of pegs) {
		if (peg.sortPeg === true) {
			return peg;
		}
	}
	console.log('Error'); debugger;// TODO: error
}

function getLowerDisc(lower) {
	for (let lowerDisc of smallerDiscs) {
		if (lowerDisc.num == lower) {
			return lowerDisc;
		}
	}
	console.log('Error'); debugger;// TODO: error
}

function eliminateDiscCP(disc) {
	let currentPeg = pegPositions.indexOf(disc.currentPeg);
	if (currentPeg !== -1 ) {
		reducePegPositions(currentPeg);
	}
}

function eliminateHigherDiscCurrentPeg(disc) {
	let currentPeg = pegPositions.indexOf(disc.currentPeg);
	if (currentPeg !== -1) {
		reducePegPositions(currentPeg);
	}
}

function eliminateHigherDiscDestinationPeg(disc) {
	let destinationPeg = pegPositions.indexOf(disc.destinationPeg);
	if (destinationPeg !== -1) {
		reducePegPositions(destinationPeg);
	}
}

function assignDestinationPeg(disc) {
	if (pegPositions.length == 1) {
		disc.destinationPeg = pegPositions[0];
	} else {
		console.log('Error'); debugger;// TODO: error
	}
}

function reducePegPositions(pos) {
	pegPositions.splice(pos, 1);
}

function getPegPositions() {
	let i = 0;
	for (let peg of pegs) {
		pegPositions[i] = peg.pos;
		i++;
	}
}


function initialPegExists() {
	for (let peg of pegs) {
		if (peg.initialPeg) {
			return 1;
		}
	}
	return 0;
}

function finalPegExists() {
	for (let peg of pegs) {
		if (peg.finalPeg) {
			return 1;
		}
	}
	return 0;
}


function checkPegState() {
	let allSet = 0;
	for (let peg of pegs) {
		if (peg.initialPeg & !peg.finalPeg) {
			allSet++;
			console.log("initialPeg is set at Peg" + peg.pos);
			if (peg.discs.length === getLengthOfInitialPeg()) {
				allSet++;
				console.log("Discs are at initialPeg" + peg.pos);
			}
		}
		if (peg.finalPeg & !peg.initialPeg) {
			allSet++;
			console.log("finalPeg is set at Peg" + peg.pos);
		}
	}
	return allSet;
}

			/*
			  ========================================
			  HTML VISUAL UPDATE
			  ========================================
			*/

function showPossibleFinalPegOptions(initialPegPos) {
	if(initialPegPos == 1) {
		document.getElementById("finalPeg").innerHTML = "<p>Final Peg</p>"+
			"<button onclick=\"setFinalPeg(2);\" value=\"2\">Peg Two</button>"+
			"<button onclick=\"setFinalPeg(3);\" value=\"3\">Peg Three</button>";
	}
	if(initialPegPos == 2) {
		document.getElementById("finalPeg").innerHTML = "<p>Final Peg</p>"+
			"<button onclick=\"setFinalPeg(1);\" value=\"1\">Peg One</button>"+
			"<button onclick=\"setFinalPeg(3);\" value=\"3\">Peg Three</button>";
	}
	if(initialPegPos == 3) {
		document.getElementById("finalPeg").innerHTML = "<p>Final Peg</p>"+
			"<button onclick=\"setFinalPeg(1);\" value=\"1\">Peg One</button>"+
			"<button onclick=\"setFinalPeg(2);\" value=\"2\">Peg Two</button>";
	}
}



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
	let xPos = peg.xPos - 20;
	let yPos = 380;
	let width = 50;
	let height = 6;
	let discGap = 0;

	let i = numOfDiscs;
	while (i) {
		peg.discs.unshift(Object.create(Disc));
		peg.discs[0].init(i, xPos, yPos, width, height);
		discGap += 20;
		yPos = 380 - discGap;
		i--;
	}
	return 1;
}


function drawDiscs(peg) {
		if (peg.discs.length != 0) {
			for (let i = 0; i < peg.discs.length; i++) {
				peg.discs[i].drawDisc();
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
	orderOfMovement.push(Object.create(Disc));
	orderOfMovement[orderOfMovement.length - 1].init(disc.num, disc.xPos, disc.yPos, disc.width, disc.height);
	orderOfMovement[orderOfMovement.length - 1].currentPeg = disc.currentPeg;
	orderOfMovement[orderOfMovement.length - 1].destinationPeg = disc.destinationPeg;
	orderOfMovement[orderOfMovement.length - 1].numOfDiscsCP = getCurrentPeg(disc).discs.length - 1;
	orderOfMovement[orderOfMovement.length - 1].discsCP = {
		total: getCurrentPeg(disc).discs.length,
		num: [],
	};
	orderOfMovement[orderOfMovement.length - 1].discsDP = {
		total: getDestinationPeg(disc).discs.length,
		num: [],
	};

	for (let one of getCurrentPeg(disc).discs) {
		orderOfMovement[orderOfMovement.length - 1].discsCP.num.push(one.num);
	}
	for (let one of getDestinationPeg(disc).discs) {
		orderOfMovement[orderOfMovement.length - 1].discsDP.num.push(one.num);
	}



	addDiscToNewPeg(disc);
	deleteDiscFromOldPeg(disc);
	update(disc);
	deleteDestinationPeg(disc);

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


function update(disc) {
	for (let peg of pegs) {
		if (peg.pos === disc.destinationPeg) {
			disc.currentPeg = disc.destinationPeg;

			disc.xPos = peg.discsXPos;

			setDiscYPos(peg, disc);
			return 1;
		}
	}
	console.log('Error'); debugger;// TODO: error
}

function setDiscYPos(peg, disc) {
	let lengthOfPeg = peg.discs.length;
	let discGap = 20;
	let yPos = 0;
	if (lengthOfPeg == 1) {
		disc.yPos = 380;
	} else {
		disc.yPos = 400 - (lengthOfPeg * discGap);
	}
}


/*
function update(disc) {

	for (let peg of pegs) {
		if (peg.pos === disc.destinationPeg) {
			// update currentPeg
			disc.currentPeg = disc.destinationPeg;

			// update xPos
			disc.xPos = peg.discsXPos;

			// update yPos TODO; update yPos

	}

}
console.log('Error'); debugger;// TODO: error
}
*/


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

function getDestinationPeg(disc) {
	for (let peg of pegs) {
		if (peg.pos == disc.destinationPeg) {
			return peg;
		}
	}
	console.log('Error'); debugger;// TODO: error
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

function nextOccurrenceOfDisc(disc) {
	for (let i = 1; i < orderOfMovement.length; i++) {
		if (orderOfMovement[i].num == disc.num) {
			return i;
		}
	}
	return false;
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


/*
  ========================================
  VARIABLES
  ========================================
*/

var pegs = [
	{
		discs: [1, 2, 3, 4, 5, 6, 7, 8],
		pos: 1,
		sortPeg: false,
		initialPeg: true,
	},
	{
		discs: [],
		pos: 2,
		sortPeg: false,
		initialPeg: false,
	},
	{
		discs: [],
		pos: 3,
		sortPeg: false,
		initialPeg: false,
	},
];


var Disc = {
	init: function() {
		this.num = null;
		this.currentPeg = undefined;
		this.destinationPeg = undefined;
	}
}

var baseDisc = Object.create(Disc);
baseDisc.initialize = function() {
	this.init();
}
baseDisc.initialize();
/*
As Oppossed To:

var baseDisc = {
	num: null,
	currentPeg: undefined,
	destinationPeg: undefined,
};
*/

var sortPeg;
var smallerDiscs = [];
var pegPositions = [];
var numberOfDiscs;

/*
  ========================================
  FUNCTIONS
  ========================================
*/

function setBaseDisc(peg) {
	if (peg === null) {
		return console.log('Error'); // TODO: error
	}
	baseDisc.num = peg.discs[0];
	baseDisc.currentPeg = peg.pos;
	baseDisc.destinationPeg = undefined;
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
		if (peg.hasOwnProperty('initialPeg')) {
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
	for (let peg of pegs) {
		if (peg.pos != baseDisc.currentPeg) {
			if (baseDisc.num % 2 == peg.pos % 2) {
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
			baseDisc.destinationPeg = peg.pos;
			return 1;
		}
	}
	console.log('Error'); debugger;// TODO: error
}

function moveDisc(disc) {
	addDiscToNewPeg(disc);
	deleteDiscFromOldPeg(disc);
	updateCurrentPeg(disc);
	deleteDestinationPeg(disc);
}

function createMoveArray() {
	for (let peg of pegs) {
		if (!peg.sortPeg) {
			if (baseDisc.num > peg.discs[0]) {
				for(let i = 0; i < peg.discs.length; i++) {
					smallerDiscs[i] = Object.create(Disc);
					smallerDiscs[i].initialize = function() {
						this.init();
					}
					smallerDiscs[i].initialize();
					smallerDiscs[i].num = peg.discs[i];
					smallerDiscs[i].currentPeg = peg.pos;
					/*
					As Oppossed To:
						smallerDiscs[i] = {
							num: peg.discs[i],
							currentPeg: peg.pos,
							destinationPeg: undefined,
						}
					*/
				}
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
		if (peg.discs[i] === disc.num) {
			lower = peg.discs[i-1];
			if (lower != undefined) {
				return getLowerDisc(lower);
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
		if (peg.discs[i] > disc.num) {
			i--;
		} else {
			return getLowerDisc(peg.discs[i])
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
  HELPER FUNCTIONS
  ========================================
*/


function addDiscToNewPeg(disc) {
	for (let peg of pegs) {
		if (peg.pos === disc.destinationPeg) {
			peg.discs.splice(0, 0, disc.num);
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
	var i = 0;
	for (let peg of pegs) {
		pegPositions[i] = peg.pos;
		i++;
	}
}


/*
  ========================================
  BEGIN HERE
  ========================================
*/


setBaseDisc(getInitialPeg());
numberOfDiscs = getLengthOfInitialPeg();

while(numberOfDiscs) {
	setSortPeg();
	setBaseDiscDestinationPeg();
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
	} else {
		setBaseDisc(getInitialPeg());
	}

	numberOfDiscs--;
	setBaseDisc(getInitialPeg());
}
console.log("RESULTS");console.log(pegs);

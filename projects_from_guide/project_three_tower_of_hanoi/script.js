
// Variables
var peg = {
	one: {
		discArray: [1, 2, 3, 4, 5, 6, 7, 8],
		pos: 1,
		sortPeg: false,
	},
	two: {
		discArray: [],
		pos: 2,
		sortPeg: false,
	},
	three: {
		discArray: [],
		pos: 3,
		sortPeg: false,
	},
};

var baseDisc;
var move = [];
var sortPeg;
var temp = [];

baseDisc = {
	num: peg.one.discArray[0],
	peg: peg.one.pos,
}

if (baseDisc.num % 2) {
	peg.three.sortPeg = true;
} else {
	peg.two.sortPeg = true;
}

// Move baseDisc to SortPeg
for (let key in peg) {
  if (peg[key].sortPeg == true) {
		peg[key].discArray[0] = baseDisc.num;
		baseDisc.peg = peg[key].pos;
	}
}

// delete baseDisc from old Peg.
for (let key in peg) {
	let indexOfDisc = peg[key].discArray.indexOf(baseDisc.num);
	if (peg[key].sortPeg == false && indexOfDisc !== -1) {
		peg[key].discArray.splice(indexOfDisc, 1);
	}
}


// create initial move array
if (baseDisc.num > 1) {
	createMoveArray();
}

assignDestinationPegs();

// move discs to Destination Pegs
for (let i = 0; i < move.length; i++) {
	// find the CP of the disc
	for (let key in peg) {
		if (peg[key].pos === move[i].currentPeg) {
			// is the disc the lowest in that peg
			if (peg[key].disc[0] === move[i].disc) {
				// find the DP of the disc
				if (peg.[key].pos === move[i].destinationPeg) {
					// is the disc, the lowest in the DP
					if (peg[key].disc[0] === move[i].disc) {
						peg[key].disc.splice(0, 0, move[i].disc);
						move[i].currentPeg = peg[key].pos;
						move[i].destinationPeg = null;
						//if disc assigned is the highest in move array, delete it & reassign DPs
					}
				}
			}
		}
	}
}






function createMoveArray() {
	for (let key in peg) {
		if (peg[key].sortPeg !== true) {
			if (baseDisc.num > peg[key].discArray[0]) {
				// assign peg members to move array
				for(let i = 0; i < peg[key].discArray.length; i++) {
					move[i] = {
						disc: peg[key].discArray[i],
						currentPeg: peg[key].pos,
					}
				}
			}
		}
	}
}

// Assign Destination Pegs: DP
function assignDestinationPegs() {
		// Assign DP to the last element (largest disc)
	if (move.length != 0) {
		for (let key in peg) {
			if (peg[key].sortPeg === true) {
				move[move.length - 1].destinationPeg = peg[key].pos;
			}
		}
	}

		// Assign DP to the other elements backwards
	for (let i = move.length - 2; i >= 0; i--) {
		createPegPosition();
		// not disc's CP
		let cp = temp.indexOf(move[i].currentPeg);
		if (cp !== -1 ) {
			temp.splice(cp, 1);
		}
		// not higher disc's DP or CP
		cp = temp.indexOf(move[i+1].currentPeg);
		let dp = temp.indexOf(move[i+1].destinationPeg);
		if (cp !== -1) {
			temp.splice(cp, 1);
		} else if (dp !== -1) {
			temp.splice(dp, 1);
		}
		// assign dp to disc
		if (temp.length == 1) {
			move[i].destinationPeg = temp[0];
		}
	}
}

function createPegPosition() {
	var i = 0;
	for (let key in peg) {
		temp[i] = peg[key].pos;
		i++;
	}
}


console.log(move);


/*
for (let i = move.length - 2; i <= 0; i++) {
	for (let j = 0; j < destinationPeg.length; j++) {
		let peg = destinationPeg.indexOf(move[i].currentPeg);
		if ( peg !== -1) {
			destinationPeg.splice(peg, 1);
		}
	}
}
*/



/*
for (let i = 0; i < peg.one.disc.length; i++) {
	move[i] = {
		disc: peg.one.disc[i];
		currentPeg: peg.one.pos;
	}
*/

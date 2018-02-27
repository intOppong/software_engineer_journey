
// Variables
var peg = {
	one: {
		discArray: [6, 7, 8],
		pos: 1,
		sortPeg: false,
	},
	two: {
		discArray: [1, 2, 3, 4],
		pos: 2,
		sortPeg: false,
	},
	three: {
		discArray: [5],
		pos: 3,
		sortPeg: true,
	},
};

var baseDisc;
var move = [];
var sortPeg;
var temp = [];

baseDisc = {
	num: 5,
	peg: 3,
}


// create initial move array
if (baseDisc.num > 1) {
	createMoveArray();
}

assignDestinationPegs();

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

// move discs to Destination Pegs
for (let i = 0; i < move.length; i++) {

	// find the CP of the disc
	for (let key in peg) {
		if (peg[key].pos === move[i].currentPeg) {
			// is the disc the lowest in it's CP.
			if (peg[key].discArray[0] === move[i].disc) {
				// find the DP of the disc
				for (let newkey in peg) {
					if (peg[newkey].pos === move[i].destinationPeg) {
						// is the disc, the lowest in the DP
						if (peg[newkey].discArray[0] > move[i].disc) {
							// move disc to new Peg (DP)
							peg[newkey].discArray.splice(0, 0, move[i].disc);
							// delete disc from old peg (CP)
							peg[key].discArray.splice(0, 1);
							move[i].currentPeg = peg[newkey].pos;
							move[i].destinationPeg = null;
							console.log(peg[key]);
							console.log(peg[newkey]);
							console.log(move);
							break;
							//if disc assigned is the highest in move array, delete it & reassign DPs
						} else {
								// find it in the move Array
								for(i in move) {
									if (move[i].disc === peg[newkey].discArray[0]) {
										// assign new DP to it
										console.log("hey");
									}
								}
							}
					}
				}
			}
		}
		/*// if disc is reassigned, run
		if (move[i].destinationPeg === null) {
			break;
		}*/
	}

}

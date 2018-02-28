

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
/*var move = [
	{disc: 1, currentPeg: 1, destinationPeg: null},
	{disc: 2, currentPeg: 3, destinationPeg: null},
	{disc: 1, currentPeg: 1, destinationPeg: null},
	{disc: 1, currentPeg: 1, destinationPeg: null},
];*/
var sortPeg;
var temp = [];

baseDisc = {
	num: 5,
	peg: 3,
}

/* BEGIN HERE */
// create initial move array
if (baseDisc.num > 1) {
	createMoveArray();
}

assignDestinationPegs();





/*****************************/

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


function LowestDiscInCurrentPeg(discObj) {	// returns true / false
	// find the CP of the disc
	for (let pos in peg) {
		if (peg[pos].pos === discObj.currentPeg) {
			// is the disc the lowest in it's CP.
			if (peg[pos].discArray[0] === discObj.disc) {
				return true;
			} else {
				return false
			}
		}
	}
}

function LowestDiscInDestinationPeg(discObj, ctr) {	// return lower disc or false
	// find the DP of the disc
	for (let pos in peg) {
		if (peg[pos].pos === discObj.destinationPeg) {
			// is there a lower disc in the DP
			let lengthOfPeg = peg[pos].discArray.length;
			for (let i = lengthOfPeg - 1; i >= 0; ) {
				if (peg[pos].discArray[i] > discObj.disc) {
					i--;
				} else { // return the lower disc obj
					for(let j = 0; j < move.length; j++) {
						if (move[j].disc === peg[pos].discArray[i]) {
							return move[j];	// return the lower disc obj
						}
					}
				}
			}
			return true;
		}
	}
}

function moveDisc(discObj) {
	for (let pos in peg) {
		addDiscToNewPeg(pos, discObj);
	}
	for (let pos in peg) {
		deleteDiscFromOldPeg(pos, discObj);
	}
	for (let pos in peg) {
		updateCurrentPeg(pos, discObj);
	}
	deleteDestinationPeg(discObj);
}

function addDiscToNewPeg(pos, discObj) {
	if (peg[pos].pos === discObj.destinationPeg) {
		// add disc to new peg (DP)
		peg[pos].discArray.splice(0, 0, discObj.disc);
	}
}

function deleteDiscFromOldPeg(pos, discObj) {

		if (peg[pos].pos === discObj.currentPeg) {
			peg[pos].discArray.splice(0, 1);
	} else {
		return false;
	}
}

function updateCurrentPeg(pos, discObj) {
	if (peg[pos].pos === discObj.destinationPeg)
	discObj.currentPeg = discObj.destinationPeg;
}

function deleteDestinationPeg(discObj) {
	discObj.destinationPeg = null;
}


function updateDestinationPeg(lowerDisc, higherDisc ) {
	createPegPosition();

	let cp = temp.indexOf(lowerDisc.currentPeg);
	if (cp !== -1) {
		temp.splice(cp, 1);
	}
	cp = temp.indexOf(higherDisc.currentPeg);
	if (cp !== -1) {
		temp.splice(cp, 1);
	}
	let dp = temp.indexOf(higherDisc.destinationPeg);
	if (dp !== -1) {
		temp.splice(dp, 1);
	}
	// assign dp to disc
	if (temp.length == 1) {
		lowerDisc.destinationPeg = temp[0];
	}

}

/***** Moving the Discs from Move Array to their Destination Pegs. *****/

// [Loop] starting from the lowest disc in the move array.****/
	 // Move discs till highest disc has been moved
// remove highest disc from move array, reassign DP
// repeat till Move array is empty



/*MOVEDISC IT function*/
// Is disc the lowest in CP, (ie Is there a lower disc in my CP)
	// if yes, Is disc the lowest in DP (ie Is there a lower disc in my DP)
		// if yes, move() disc there
			// update the CP
			// Delete the DP
		// if no, assign a DP to the lower disc (in the disc's DP)
			// move() it then move() me
	// if no, assign a DP to the lower disc (in the disc's CP)  [[!!!HERE!!!]]
		// move() it then move() me.

for (let i = 0; i < move.length; i++) {

	if (LowestDiscInCurrentPeg(move[i]) === true) {

		var lowerDisc = LowestDiscInDestinationPeg(move[i], i);

		if (lowerDisc === true) {
			console.log('one');
			moveDisc(move[i]);

		} else {
			updateDestinationPeg(lowerDisc, move[i]);
			// TODO: WE'LL NEED TO RECALL FROM LowestDiscInCurrentPeg
			moveDisc(lowerDisc);
			moveDisc(move[i]);
			console.log(move);
			console.log(peg);debugger;
		}
	}

}


/*** ME TRYING TO DO IT ALL IN ONE FUNCTION PHEW ***
for (let i = 0; i < move.length; i++) {
	// find the CP of the disc
	for (let pos in peg) {
		if (peg[pos].pos === move[i].currentPeg) {
			// is the disc the lowest in it's CP.
			if (peg[pos].discArray[0] === move[i].disc) {
				// find the DP of the disc
				for (let newpos in peg) {
					if (peg[newpos].pos === move[i].destinationPeg) {
						// is the disc, the lowest in the DP
						if (peg[newpos].discArray[0] > move[i].disc) {
							// move disc to new Peg (DP)
							peg[newpos].discArray.splice(0, 0, move[i].disc);
							// delete disc from old peg (CP)
							peg[pos].discArray.splice(0, 1);
							move[i].currentPeg = peg[newpos].pos;
							move[i].destinationPeg = null;
							break;
							// assign DP to lowest disc & move it there
						} else {
								// find it in the move Array
								for(let j in move) {
									if (move[j].disc === peg[newpos].discArray[0]) {
										// assign new DP to it
										updateDestinationPeg(move[j], move[i]);

										// add disc to new Peg (DP)
								    for (destpos in peg) {
											// make sure it's the lowest in the new DP
											if (move[j].disc > peg[destpos].discArray[0]) {
												console.log("error") // error
											}
								      if (move[j].destinationPeg === peg[destpos].pos) {
								        peg[destpos].discArray.splice(0, 0, move[j].disc);
								      }
								    }
								    // delete it from old peg (CP)
								    peg[newpos].discArray.splice(0, 1);
										move[j].currentPeg = peg[destpos].pos;
										move[j].destinationPeg = null;

										console.log(move);
										console.log(peg.one);
										console.log(peg.two);
										console.log(peg.three);
										debugger;

									}
								}
							}
					}
				}
			}
		}
		// if disc is reassigned, run
		if (move[i].destinationPeg === null) {
			break;
		}
	}

}
*/

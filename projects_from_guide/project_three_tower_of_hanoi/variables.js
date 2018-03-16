
/*
  ========================================
  VARIABLES
  ========================================
*/

	// Objects
var Peg = {
	init: function(pos) {
		this.pos = pos;
		this.sortPeg = false;
		this.initialPeg = false;
		this.finalPeg = false;
		this.discs = [];
	}
}

var numberOfPegs = 3;
var pegs = [];
for (let i = 0; i < numberOfPegs; i++) {
	pegs[i] = Object.create(Peg);
	pegs[i].initialize = function () {
		this.init();
	}
}

for (let i = 0; i < numberOfPegs; i++) {
	pegs[i].initialize();
	pegs[i].pos = i+1;
}

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
var LargestDiscNumberType;

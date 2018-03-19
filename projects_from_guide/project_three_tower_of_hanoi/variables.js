
/*
  ========================================
  VARIABLES
  ========================================
*/

var Peg;
var pegs = [];
var numOfPegs = 3;
var sortPeg;
var Discs;
var smallerDiscs = [];
var pegPositions = [];
var numOfDiscs;
var baseDisc;



	// Peg Object
Peg = {
	init: function(pos, xPos, yPos, width, height) {
		this.pos = pos;
		this.sortPeg = false;
		this.initialPeg = false;
		this.finalPeg = false;
		this.discs = [];
		this.xPos = xPos;
		this.yPos = yPos;
		this.width = width;
		this.height = height;
	},
	drawPeg: function() {
	  ctx.fillStyle = '#424242';
		ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
	}
}

function createPegs() {
	let xPos = 100;
	let yPos = 150;
	let width = 10;
	let height = 250;

	for (let i = 0; i < numOfPegs; i++) {
		let pos = i+1;
		pegs[i] = Object.create(Peg);
		pegs[i].init(pos, xPos, yPos, width, height);
		xPos += 195;
	}
}

// Disc Object
Disc = {
	init: function(num, xPos, yPos, width, height) {
		this.num = num;
		this.currentPeg = null;
		this.destinationPeg = null;
		this.xPos = xPos;
		this.yPos = yPos;
		this.width = width;
		this.height = height;
	},
	drawPeg: function() {
		ctx.fillStyle = '#424242';
		ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
	}
}

function sth() {
	let xPos = 100;
	let yPos = 150;
	let width = 10;
	let height = 250;
	let num = 0;

	for (let i = 0; i < numOfDiscs; i++) {
		discs[i] = Object.create(Disc);
		num += num;
		discs[i].init(num, xPos, yPos, width, height);
	}
	console.log(discs);debugger;
}




/*
As Oppossed To:

var baseDisc = {
	num: null,
	currentPeg: undefined,
	destinationPeg: undefined,
};
*/


/*
  ========================================
  VARIABLES
  ========================================
*/

let Peg;
let pegs = [];
let numOfPegs = 3;
let sortPeg;
let Discs;
let smallerDiscs = [];
let pegPositions = [];
let numOfDiscs;
let baseDisc;
let orderOfMovement = [];
let startAnimation = false;
let moved = true;
let widthDiff = 10;
let baseWidth = 25;
let discHeight = 6;
let discsColors = [
	'#FF5252',
	'#E040FB',
	'#4483FF',
	'#69F0AE',
	'#FFAB40',
	'#FF6E40',
	'#607D8B',
	'#00E5FF',
	'#1DE9B6',
	'#C0CA33',
];


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
	  ctx.strokeStyle = '#424242';
		ctx.strokeRect(this.xPos, this.yPos, this.width, this.height);
	}
}

function createPegs() {
	let xPos = 100;
	let yPos = 150;
	let width = 5;
	let height = 250;
	let discDistanceToPeg = 20;
	let pegGap = 185;
	for (let i = 0; i < numOfPegs; i++) {
		let pos = i+1;
		pegs[i] = Object.create(Peg);
		pegs[i].init(pos, xPos, yPos, width, height);
		xPos += pegGap;
	}
}
function drawPegs() {
	for (let i = 0; i < numOfPegs; i++) {
		pegs[i].drawPeg();
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
	drawDisc: function(color) {

		ctx.fillStyle = color;
		ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
	},
	move: function() {
		this.yPos -= 1;
	}
}



/*
As Oppossed To:

var baseDisc = {
	num: null,
	currentPeg: undefined,
	destinationPeg: undefined,
};
*/

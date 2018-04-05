
/*
  ========================================
  VARIABLES
  ========================================
*/

let canvas;
let ctx;
let Peg;
let pegs = [];
const numOfPegs = 3;
let sortPeg;
let pegPositions = [];
let Discs;
let smallerDiscs = [];
let numOfDiscs;
let baseDisc;
let orderOfMovement = [];
let discAnimation;
const widthDiff = 10;
const baseWidth = 25;
const discHeight = 6;
const discGap = 20;
const pegGap = 185;
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

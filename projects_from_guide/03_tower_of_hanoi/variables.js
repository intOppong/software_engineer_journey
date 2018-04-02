
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
var orderOfMovement = [];
var startAnimation = false;
var moved = true;



	// Peg Object
Peg = {
	init: function(pos, xPos, yPos, width, height, discsXPos, discsYPos) {
		this.pos = pos;
		this.sortPeg = false;
		this.initialPeg = false;
		this.finalPeg = false;
		this.discs = [];
		this.xPos = xPos;
		this.yPos = yPos;
		this.width = width;
		this.height = height;
		this.discsXPos = discsXPos;
		this.discsYPos = discsYPos;
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
	let discsXPos;
	let discDistanceToPeg = 20;
	let discsYPos = [240, 260, 280, 300, 320, 340, 360, 380];
	let pegGap = 195;
	for (let i = 0; i < numOfPegs; i++) {
		let pos = i+1;
		pegs[i] = Object.create(Peg);
		discsXPos = xPos - discDistanceToPeg;
		pegs[i].init(pos, xPos, yPos, width, height, discsXPos, discsYPos);
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
	drawDisc: function() {
		ctx.fillStyle = '#0288D1';
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

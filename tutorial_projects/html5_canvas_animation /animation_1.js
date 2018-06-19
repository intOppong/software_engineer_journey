/*
  ========================================
  HTML5 CANVAS

  - By default, the browser creates canvas elements with a width of 300 pixels and a height of 150 pixels
  - Setting Canvas Width & Height
    - CSS: to set the size of the Canvas Element.
    - Canvas width & height properties: sets the same size for both the Canvas Element & Drawing Surface
      - if Canvas Element size is smaller than the Drawing Surface
        - the browser automatically scales the it to fit the Size of the Drawing surface.
  - Drawing Shapes
    - set the color before drawing the shapes
  ========================================
*/

// DECLARE VARIABLES
var canvas = document.getElementById('myCanvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth; // width of Window
canvas.height = window.innerHeight;

var maxRadius = 100;
var stdRadius = 50;
var numOfCircles = 800;
var colorArray = [
  '#2c3e50',
  '#e74c3c',
  '#ecf0f1',
  '#3498d8',
  '#2980b9',
];
var circleArray = [];
var mouse = {
  x: undefined,
  y: undefined,
}

  /***** Delegation Oriented Design (OLOO) Version *****/
var Circle = {
	init: function(x, y, dx, dy, radius) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.minRadius = radius;
	  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
	},
	draw: function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, 0);
    c.fillStyle = this.color;
    c.fill();

    this.move();
  },
	move: function() {
    // Bounce of the right edges of canvas
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      // reverse direction
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    // INTERACTIVITY
      // if circle (position on Screen) is in 50 distance of mouse (position on Screen) left & right, grow to radius of
        // else shrink to radius of 2 ie minRadius
    if(mouse.x - this.x < stdRadius && mouse.x - this.x > -stdRadius && mouse.y - this.y < stdRadius && mouse.y-this.y > -stdRadius) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if(this.radius > this.minRadius) {
      this.radius -= 1;
    }
  }
}

// CREATE FUNCTIONS

function begin() {
  // Create Circles
  createCircles();
  animate();
}

function createCircles() {
  circleArray = [];
  for (var i = 0; i < numOfCircles; i++) {
    var radius = Math.random() * 5 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 4;  // velocity
    var dy = (Math.random() - 0.5) * 4;

    // using CLASS ORIENTED DESIGN
    /*circleArray.push(new Circle(x, y, dx, dy, radius));*/ // create /instantiate new objects of the cirlce class

    // USING DELEGATION ORIENTED DESIGN
    circleArray.push(Object.create(Circle));  // prototype-link the object
  	circleArray[i].init(x, y, dx, dy, radius); // initiate the circle*/
  }
}

function animate() {
  requestAnimationFrame(animate); // Recursion: calls the animate function over & over again

  // Clear entire canvas
  c.clearRect(0, 0, innerWidth, innerHeight);
  // Draw Circles
  for (i = 0; i < numOfCircles; i++) {
    circleArray[i].draw();
  }
}

// EVENT LISTENERS
window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
});
addEventListener('resize', function(event) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createCircles();
});

// BEGIN HERE
begin();



/***** Class Oriented Design (OLOO) Version *****/
/*
  // CLASS: Circle
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, 0);
    c.fillStyle = this.color;
    c.fill();

    this.move();
  }

  this.move = function() {
    // Bounce of the right edges of canvas
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      // reverse direction
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    // INTERACTIVITY
      // if circle (position on Screen) is in 50 distance of mouse (position on Screen) left & right, grow to radius of
        // else shrink to radius of 2
    if(mouse.x - this.x < stdRadius && mouse.x - this.x > -stdRadius && mouse.y - this.y < stdRadius && mouse.y-this.y > -stdRadius) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if(this.radius > this.minRadius) {
      this.radius -= 1;
    }
  }
}

*/

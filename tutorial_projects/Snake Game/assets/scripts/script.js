$(document).ready(function() {

  // Variables
    // Canvas Variables
  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  var w = canvas.width;
  var h = canvas.height;
  var cw = 15;
  var d = 'right';
  var food;
  var score = 0;
  var snake_color = "green";
  var speed = 80;
    // Snake Array
  var snake_array;


  // Begin Here
  init ();

  /*
    ========================================
    FUNCTIONS
    ========================================
  */


  // Initializer
  function init() {
    create_snake();
    create_food();

    d = 'right';
    score = 0;


    if(typeof game_loop != 'undefined') clearInterval(game_loop);

    game_loop = setInterval(draw, speed);
  }

  // Create Snake
  function create_snake() {
    var length = 5;
    snake_array = [];

    for(var i = length; i > 0; i--) { // a horizontal snake starting from top left
      snake_array.push({x:1, y:0});
    }
  }

  // Create Food
  function create_food() {
    food = {    // create food in any random cell
      x:Math.round(Math.random()*(w-cw)/cw),
      y:Math.round(Math.random()*(h-cw)/cw)
    }
  }

  // Draw/Paint Snake
  function draw() {
    // Draw the Canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,w,h);
    ctx.strokeStyle = "white";
    ctx.strokeRect(0,0,w,h);

    var nx = snake_array[0].x;
    var ny = snake_array[0].y;

    // Direction Movement
    if(d == 'right') nx++;
    else if(d == 'left') nx--;
    else if(d == 'up') ny--;
    else if(d == 'down') ny++;

    // Check for Collision
      /* if(Snake hit the Left wall OR hit the Right wall OR hit the Top OR hit the Bottom wall OR hit itself ) */
    if(nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || check_collision(nx, ny, snake_array)) {
      // Final Score
      $('#final_score').html(score);

      //Show overlay
      $('#overlay').fadeIn(800);

      return;
    }

    // Logic to Eat the Food
    if (nx == food.x && ny == food.y) {
      // create the tail
      var tail = {
        x: nx,
        y:ny
      };
      // update the score
      score++;
      // create new Food
      create_food();
    } else {
      // create the tail
      var tail = snake_array.pop();
      tail.x = nx;
      tail.y = ny;
    }

    snake_array.unshift(tail);

      //create rest of body inbetween head & tail
    for (var i = 0; i < snake_array.length; i++) {
      var c = snake_array[i];
      increase_snake_size(c.x, c.y);
    }

    increase_snake_size(food.x, food.y);

    update_high_score(score);

    $('#game_score').html('Your Score: '+score);

  }


  // Increase Snake Size
  function increase_snake_size(x, y) {
    ctx.fillStyle = snake_color;
    ctx.fillRect(x*cw, y*cw, cw, cw);
    ctx.strokeStyle = "white";
    ctx.strokeRect(x*cw, y*cw, cw, cw);
  }

  // Check Collision
  function check_collision(x, y, array) {
    for(var i = 0; i < array.length; i++) {
      if(array[i.x == x && array[i].y == y]) return true;
    }
    return false;
  }

  // High Score
  function update_high_score(score) {
    if(localStorage.getItem('high_score') === null) {
      localStorage.setItem('high_score', score);
    } else {
      if(score > localStorage.getItem('high_score')) {
        localStorage.setItem('high_score', score);
      }
    }
    // Display High Score
    $('#high_score').html('High Score: '+localStorage.high_score)
  }

  // Keyboard Input
  $(document).keydown(function(e){
    var key = e.which;

    if(key == '37' && d != 'right') d = 'left';
    else if(key == '38' && d != 'down') d = 'up';
    else if(key == '39' && d != 'left') d = 'right';
    else if(key == '40' && d != 'up') d = 'down';
  });

});

// Reset High Score
function resetHighScore() {
  localStorage.high_score = 0;

  // Display High Score
  high_score_div = document.getElementById('high_score');
  high_score_div.innerHTML = 'High Score: 0';
}

let yEnemies = [60, 140, 220, 140, 60, 210];
// Enemies our player must avoid
let Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x=x;
    this.y=y;
    this.speed=speed;
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    let i;
        if (this.x < 505) {
       this.x += dt * 15 * this.speed * Math.random();
   } else {
       i = Math.random() * yEnemies.length | 0 + 0;
       this.y = yEnemies[i];
      this.x = -100;
  }
    checkCollisions(this);
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};





// Now write your own player class
var Player = function(x, y, speed) {
    // Variables applied to each of our instances go here,
this.x = x;
this.y = y;
this.speed = speed;
this.sprite ='images/char-cat-girl.png';
};
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function() {
    // function not needed right now
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   displayScoreLevel(score, gameLevel);

};

Player.prototype.handleInput = function(keyPress) {
    if (keyPress == 'left') {
        player.x -= player.speed;
    }
    if (keyPress == 'up') {
        player.y -= player.speed - 20;
    }
    if (keyPress == 'right') {
        player.x += player.speed;
    }
    if (keyPress == 'down') {
        player.y += player.speed - 20;
    }
    console.log('keyPress is: ' + keyPress);
};
var checkCollisions = function(anEnemy) {
    // check for collision between enemy and player
   
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
let player = new Player(250, 370, 50);
var score = 0;
var gameLevel = 1;
var scoreLevelDiv = document.createElement('div');
var enemy = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256);

allEnemies.push(enemy);
// Function to display player's score
var displayScoreLevel = function(aScore, aLevel) {
    var canvas = document.getElementsByTagName('canvas');
    var firstCanvasTag = canvas[0];

    // add player score and level to div element created
    scoreLevelDiv.innerHTML = 'Score: ' + aScore
        + ' / ' + 'Level: ' + aLevel;
    document.body.insertBefore(scoreLevelDiv, firstCanvasTag[0]);
};
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
      console.log(allowedKeys[e.keyCode]);
});

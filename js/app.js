/ Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // make enemies loop to left side of canvas after reaching canvas.width
    if (this.x >= 505) {
        this.x = 0;
        let checkY = player.y === this.y + 7;
        let checkX = player.x < this.x + 65 && player.x + 65 > this.x;

        // Check if the enemies colide with the player.
        if (checkY && checkX) {
            player.die();
        }

    }
    checkCollision(this);


    // Check for collision with enemies 

};

let lives = 4;
showLive();

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

let imageChar = 'images/char-cat-girl.png';
/*
document.getElementById("boy").addEventListener("click", myFunction);
document.getElementById("girl1").addEventListener("click", myFunction);
document.getElementById("girl2").addEventListener("click", myFunction);
document.getElementById("girl3").addEventListener("click", myFunction);

function myFunction() {
   imageChar="'images/"+this.src.split("/").pop()+"'";
  
  
}
*/

// Now write your own player class
var Player = function(x, y, speed) {
    // Variables applied to each of our instances go here,

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = imageChar;

};
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function() {


    if (this.x > 505 | this.x < 0) {
        this.x = 220;
        this.y = 350;

    }
    if (this.y < -70 | this.y > 400) {


        this.x = 220;
        this.y = 350;
        score += score;


        if (score = 3) {
            gameLevel += 1;
        }

        console.log('current score: ' + score + ', current level: ' + gameLevel);
        hearts();
    }

}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    displayScoreLevel(score, gameLevel, lives);
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

};

Player.prototype.reset = function() {
    this.x = 220;
    this.y = 350;

}
const player = new Player(220, 350, 50);
const enemy = new Enemy(-100, 227.5, 50);
const enemy1 = new Enemy(-100, 145, 60);
const enemy2 = new Enemy(-100, 61, 50);
const enemy3 = new Enemy(-200, 30, 80);
const enemy4 = new Enemy(-200, 30, 80)

const allEnemies = [enemy, enemy1, enemy2, enemy3, enemy4];

function hearts() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "images/Heart.png");
    x.setAttribute("width", "50");
    x.setAttribute("height", "50");
    x.setAttribute("alt", "heart");
    document.body.appendChild(x);
    x.classList.add("corazon");
    let vidas = document.getElementsByClassName("corazon");

}

var checkCollision = function(anEnemy) {
    for (let i = 0; i < allEnemies.length; i++) {
        if ((allEnemies[i].x < player.x + 40) &&
            (player.x < allEnemies[i].x + 60) &&
            (allEnemies[i].y < player.y + 60) &&
            (player.y < allEnemies[i].y + 40)) {

            //removeHearts();let myHeart=hearts.lastElementChild(IMG);
            //removeHearts();
            //myHeart.classList.remove('hidden');
            --gameLevel;
            --lives;
            if (lives === 0) {

                let suporters = document.getElementById('boy');
                //console.log(suporters)
                suporters.classList.add("shake");
                gameRestart();
            }
        }
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called playervar enemy = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256);
function gameRestart() {
    player.reset();
    lives = 4;
    score = 0;
    gameLevel = 0;
    let vidas = document.getElementsByClassName("corazon");
    if (vidas.length > 0) {
        let z = (vidas.length) - 1
        let vida = vidas[z]
        vida.classList.add("hidden");
    } else {
        vidas.legth = 0;
    }
}
var score = 0;
var gameLevel = 0;
var scoreLevelDiv = document.createElement('div');
var gameLevelDiv = document.createElement('div');


allEnemies.push(enemy);
// Function to display player's score
var displayScoreLevel = function(score, gameLevel, lives) {
    var canvas = document.getElementsByTagName('canvas');
    var firstCanvasTag = canvas[0];

    // add player score and level to div element created

    scoreLevelDiv.innerHTML = "score : " + score;
    gameLevelDiv.innerHTML = "game level :" + gameLevel;

    document.body.insertBefore(scoreLevelDiv, firstCanvasTag[0]);
    document.body.insertBefore(gameLevelDiv, firstCanvasTag[0]);
};

function showLive(num) {
    var live = document.querySelector('.hearts');
    var heartHtml = '<img src="images/Heart.png">';
    lives.innerHTML = "";

    for (let i = 0; i < num; i++) {
        lives.innerHTML += heartHtml;
    }
}
showLive();
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


});
let restart = document.getElementById('restart');
restart.addEventListener("click", function() {

    gameRestart()

});

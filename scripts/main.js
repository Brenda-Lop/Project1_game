let canvas = document.getElementById('table');
let ctx = canvas.getContext('2d');


const cWidth = canvas.width; // 1000px
const cHeight = canvas.height; // 600px

function drawRect() {
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, cWidth, cHeight);
}

drawRect();
/* 
let score = document.getElementById('score')
message.innerHTML = 'Score'
 */


// Images

/* const backImg = new Image();

backImg.addEventListener('load', function () {
   
    ctx.drawImage(backImg, 0, 0, 900, 500);
}); 
backImg.src = '../docs/assets/images/table__3-removebg-preview.png';
 */

// constructor (width, height, color, x, y, ctx)

let player1 = new Component(10, 100, 'black', 100, 260, ctx); 
let player2 = new Component(10, 100, 'black', 900, 260, ctx);
let ball = new Component (30, 30, 'yellow', 500, 300, ctx);
let goalLeft = new Component (40, 230, 'black', 0 , 190, ctx);
let goalRight = new Component (40, 230, 'black', 960, 190, ctx);

player1.draw();
player2.draw();
goalLeft.draw();
goalRight.draw();
ball.draw();


//ball.newPos(draw());

 /* function updateBall() {
  
  ball.draw(); 
  
  if (ball.y + ball.speedY > cHeight || ball.y + ball.speedY < 0) {
    ball.speedX *= -1;
  }
  if (ball.x + ball.speedX > cWidth || ball.x + ball.speedX< 0) {
    ball.speedX *= -1;
  }
}

updateBall();  */


//new Game(ctx, cWidth, cHeight, player1, player2, ball)
let game = new Game(ctx, cWidth, cHeight, player1, player2, ball, goalLeft, goalRight);

// starting the game
const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', () =>  {   
    if(!game) {
    game.start(); 
} else if(game && !game.isRunning) {
    game.reset();
}
});

ball.speedX = 5;
ball.speedY = 5;

 // WHAT IS WRONG WITH .CLEAR(), .NEWPOS() AND UPDATEGAMEAREA() METHODS?

    function update() {
    
    ball.newPos();

     if (ball.y + ball.speedY > cHeight || ball.y + ball.speedY < 0) {
        ball.speedY *= -2;
      }
      if (ball.x + ball.speedX > cWidth || ball.x + ball.speedX < 0) {
        ball.speedX *= -2;
      }
      ball.newPos();
    }

    update();
    
   

   // creating players moves
  
   player1.speedY = 2
   player2.speedY = 2

   document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'ArrowUp':
         player2.newPosPlayers();
         break;
        case 'ArrowDown':
         player2.newPosPlayers();
         break;
        case 'KeyW':
         player1.newPosPlayers();
         break;
        case 'KeyS':
         player1.newPosPlayers();
         break;
    }
    });
 

document.addEventListener('keyup', (e) => {
 player1.speedY = 0;
 player2.speedY = 0;
})





 

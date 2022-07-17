let canvas = document.getElementById('table');
let ctx = canvas.getContext('2d');


const cWidth = canvas.width; // 1000px
const cHeight = canvas.height; // 600px

function drawRect() {
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, cWidth, cHeight);
}

drawRect();


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
// let ball = new Component (30, 30, 'yellow', 500, 300, ctx);

player1.draw();
player2.draw();
ball.drawBall();


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


//new Game(ctx, cWidth, cHeight, player1, player2)
let game = new Game(ctx, cWidth, cHeight, player1, player2, ball);

// starting the game
const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', () => {
    if(!game) {
    game.start(); 
} else if(game && !game.isRunning) {
    game.reset();
}
});

   function update() {
    game.ctx.clear();
    drawRect();
    player1.draw();
    player2.draw();
    ball.drawBall();
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.y + ball.vy > cHeight || ball.y + ball.vy < 0) {
        ball.vx *= -1;
      }
      if (ball.x + ball.vx > cWidth || ball.x + ball.vx< 0) {
        ball.vx *= -1;
      }
      
    }
    
  setInterval(update, 20);

   // creating players moves
  
   document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'ArrowUp':
         player2.y.newPos();
         break;
        case 'ArrowDown':
         player2.y.newPos();
         break;
        case 'KeyW':
         player1.y.newPos();
         break;
        case 'KeyS':
         player1.y.newPos();
         break;
    }
    });
 

document.addEventListener('keyup', (e) => {
 player1.speedY = 0;
 player2.speedY = 0;
})



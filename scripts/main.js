let canvas = document.getElementById('table');
let ctx = canvas.getContext('2d');


const cWidth = canvas.width; // 1000px
const cHeight = canvas.height; // 600px

function drawRect() {
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, cWidth, cHeight);
}


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

/* const ballImg = new Image();

ballImg.addEventListener('load', function () {
   
    ctx.drawImage(ballImg, 30, 30, 500, 300);
}); 

ballImg.src = '../docs/assets/images/cara_bozo-removebg-preview.png'; */

// constructor (width, height, color, x, y, ctx)  

//default 3 
let difficulty = 3;


//easy button => difficulty = 3;
//mediumbtn = difficulty = 6;
//hardBtn = difficulty = 9;



//new Game(ctx, cWidth, cHeight, player1, player2, ball)
let game; 
let player1;
let player2;
let ball;
let goalLeft;
let goalRight;


   document.addEventListener('keydown', (e) => {
    switch(e.code) {
      case 'KeyW':
        player1.moveUp();
        break;
      case 'KeyS':
        player1.moveDown();
        break;
      case "ArrowUp":
         player2.moveUp();
         break;
      case "ArrowDown":
         player2.moveDown();
         break;
    }
    });
  

document.addEventListener('keyup', (e) => {
 player1.speedY = 0;
 player2.speedY = 0;
});
 

// starting the game
const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', () =>  {   
    if(!game) {

     player1 = new Component(10, 60, 'black', 100, 280, ctx, 0, 0); 
     player2 = new Component(10, 60, 'black', 900, 280, ctx, 0, 0);
     ball = new Component(35, 35, 'yellow', 500, 300, ctx, difficulty, difficulty, '../docs/assets/images/cara_bozo-removebg-preview.png');
     goalLeft = new Component(10, 350, 'black', 0, 115, ctx, 0, 0);
     goalRight = new Component(10, 350, 'black', 990, 115, ctx, 0, 0);
    game = new Game(ctx, cWidth, cHeight, player1, player2, ball, goalLeft, goalRight);
    game.start(); 
} else if(game && !game.isRunning) {
    game.reset();
}
});


 

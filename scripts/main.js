let canvas = document.getElementById('table');
let ctx = canvas.getContext('2d');


const cWidth = canvas.width; // 1000px
const cHeight = canvas.height; // 600px

function drawRect() {
ctx.fillStyle = 'bisque';
ctx.fillRect(0, 0, cWidth, cHeight);
}

function drawCenter() {
  ctx.line
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'black'
  ctx.arc(500, 300, 90, 0, Math.PI * 2);
  ctx.stroke();
  ctx.closePath();
}

//new Game(ctx, cWidth, cHeight, player1, player2, ball, goalLeft, goalRight)
let game; 
let player1;
let player2;
let ball;
let goalLeft;
let goalRight;

//adding players key controls
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

  let difficulty = 4
  let mySound;
  let myMusic;

  const easyBtn = document.getElementById('easy-btn');
  easyBtn.addEventListener('click', () =>  {   
      if(!game) {
       mySound = new sound("../docs/assets/sounds/dilma destrua o bolsonaro.mp3");
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

  const medBtn = document.getElementById('med-btn');
  medBtn.addEventListener('click', () =>  {
  
  if(!game) {
  difficulty = 5;
       mySound = new sound("../docs/assets/sounds/dilma destrua o bolsonaro.mp3");
       player1 = new Component(10, 60, 'black', 100, 280, ctx, 0, 0); 
       player2 = new Component(10, 60, 'black', 900, 280, ctx, 0, 0);
       ball = new Component(35, 35, 'yellow', 500, 300, ctx, difficulty, difficulty, '../docs/assets/images/cara_bozo-removebg-preview.png');
       goalLeft = new Component(10, 350, 'black', 0, 115, ctx, 0, 0);
       goalRight = new Component(10, 350, 'black', 990, 115, ctx, 0, 0);
       game = new Game(ctx, cWidth, cHeight, player1, player2, ball, goalLeft, goalRight);
       game.start(); 
  
      } else if(game && !game.isRunninggame) {
      game.reset();      
    } 
    });

  const hardBtn = document.getElementById('hard-btn');
  hardBtn.addEventListener('click', () =>  {
    if (!game) {
  difficulty = 6;
       mySound = new sound("../docs/assets/sounds/dilma destrua o bolsonaro.mp3");
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
    

   const resetBtn = document.getElementById('reset-btn');
   resetBtn.addEventListener('click', () => {
      game.resetGame();
    }); 

    const stopBtn = document.getElementById('stop-btn');
    stopBtn.addEventListener('click', () => {
        game.stop();
      })




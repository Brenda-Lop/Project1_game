let canvas = document.getElementById('table');
let ctx = canvas.getContext('2d');


const cWidth = canvas.width; // 1000px
const cHeight = canvas.height; // 600px

function drawRect() {
ctx.fillStyle = '#E8F1F4';
ctx.fillRect(0, 0, cWidth, cHeight);
}

const starImg = new Image();

starImg.addEventListener('load', function () {
 // ctx.drawImage(starImg, 500, 300, 50, 50);
});
starImg.src = '../docs/assets/images/star.png';

 function drawCenter() {  
  ctx.drawImage(starImg, 350, 150, 300, 300);
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

// new attributes

   let difficulty = 4
   let mySound;
   let myMusic;

   //General settings
   mySound = new sound("../docs/assets/sounds/Lula Lá brilha uma estrela (mp3cut.net).mp3");
   player1 = new Component(10, 60, 'black', 100, 280, ctx, 0, 0); 
   player2 = new Component(10, 60, 'black', 900, 280, ctx, 0, 0);
   goalLeft = new Component(10, 350, 'black', 0, 115, ctx, 0, 0);
   goalRight = new Component(10, 350, 'black', 990, 115, ctx, 0, 0);

  const easyBtn = document.getElementById('easy-btn');
  easyBtn.addEventListener('click', () =>  {   
    difficulty = 4;
      if(!game) {
       ball = new Component(35, 35, 'yellow', 500, 300, ctx, difficulty, difficulty, '../docs/assets/images/cara_bozo.png');
      game = new Game(ctx, cWidth, cHeight, player1, player2, ball, goalLeft, goalRight);
     
      game.start(); 
  
      } else if(game) {
      game.resetGame(difficulty);
      }  
    });

  const medBtn = document.getElementById('med-btn');
  medBtn.addEventListener('click', () =>  {
  
    difficulty = 5;
  if(!game) {
       ball = new Component(35, 35, 'yellow', 500, 300, ctx, difficulty, difficulty, '../docs/assets/images/cara_bozo.png');
       game = new Game(ctx, cWidth, cHeight, player1, player2, ball, goalLeft, goalRight);
       game.start(); 
  
      } else if(game) {
      game.resetGame(difficulty);      
    } 
    });

  const hardBtn = document.getElementById('hard-btn');
  hardBtn.addEventListener('click', () =>  {
    difficulty = 6;
    if (!game) {
       ball = new Component(35, 35, 'yellow', 500, 300, ctx, difficulty, difficulty, '../docs/assets/images/cara_bozo.png');
       game = new Game(ctx, cWidth, cHeight, player1, player2, ball, goalLeft, goalRight);
       game.start(); 
  
  } else if(game) {
      game.resetGame(difficulty);
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




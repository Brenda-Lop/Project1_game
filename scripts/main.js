let canvas = document.getElementById('table');
let ctx = canvas.getContext('2d');


const cWidth = canvas.width; // 1000px
const cHeight = canvas.height; // 600px

function drawRect() {
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, cWidth, cHeight);
}

drawRect();


// constructor (width, height, color, x, y, ctx)
let player1 = new Component(10, 100, 'black', 10, 300, ctx); 
let player2 = new Component(10, 100, 'black', 85, 300, ctx);
let ball = new Component (20, 20, 'yellow', 500, 350, ctx);

player1.draw();
player2.draw();
ball.draw();

//new Game(ctx, cWidth, cHeight, player1, player2)
let game = new Game(ctx, cWidth, cHeight, player1, player2);


// Images

const backImg = new Image();

// !!!! INTERVENTION !!!

backImg.addEventListener('load', function () {
   
    ctx.drawImage(backImg, 0, 0, cWidth, cHeight);
}); 
backImg.src = '../docs/assets/images/table__3-removebg-preview.png';



// starting the game
const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', () => {
    if(!game) {
    game.start(); 
} else if(game && !game.isRunning) {
    game.reset();
}
});


   // creating players moves

   document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'ArrowUp':
         this.player2.speedY.moveDown();
         break;
        case 'ArrowDown':
         this.player2.speedY.moveDown();
         break;
        case 'KeyW':
         this.player1.speedY.moveUp();
         break;
        case 'KeyS':
         this.player1.speedY.moveUp();
         break;
    }
    });
  


document.addEventListener('keyup', (e) => {
 this.player1.speedY = 0;
 this.player2.speedY = 0;
})



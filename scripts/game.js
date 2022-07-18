class Game {
    constructor(ctx, width, height, player1, player2, ball, goalLeft, goalRight) {
        this.frames = 0;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player1 = player1;
        this.player2 = player2;
        this.ball = ball;
        this.goalLeft = goalLeft;
        this.goalRight = goalRight;
        this.interval = null;
        this.isRunning = false;
    }

    start() {
        this.interval = setInterval(this.updateGameArea, 20);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    stop() {
        clearInterval(this.interval); // clearing the interval will stop the game
        this.isRunning = false;
    }

    reset = () => {
        this.player1.x = 100;
        this.player2.x = 900;
        this.player1.y = 280;
        this.player2.y = 280;
        this.ball.x = 500;
        this.ball.y = 300;
        this.frames = 0;
        this.start();
    }

    checkWinner()  {
    
    }

    score() {
      /*   if (crashed) {
            this.stop()
            this.ctx.font = '40px sans-serif';
            this.ctx.fillStyle = 'orange solid';
            this.ctx.fillText('GAME OVER', 400, 250);
       } */      
    }


    drawGame() {
        this.player1.draw();
        this.player2.draw();
        this.ball.draw();
        this.goalLeft.draw()
        this.goalRight.draw();
    }

    updateGameArea = () => {
        this.clear();   
        drawRect();
        this.score();
        this.checkWinner();   
        this.drawGame();

        this.player1.newPos();
        this.player1.moveUp();
        this.player1.moveDown();
        this.player2.newPos();
        this.player2.moveUp();
        this.player2.moveDown();
        this.ball.ballPos()
    }

}
    /* 
  let speed1 = 0;
  let speed2 = 0;
  let speed3 = 0;

  function movingBall () {
   speed3 += 2;
   ball.draw(speed3 % 900, speed3 % 600, 100, 100); */


   /* updateBall() {
    ctx.clear();
    ball.draw(); 
    ball.x += ball.speedX;
    ball.y += ball.speedY;
    if (ball.y + ball.speedY > game.height || ball.y + ball.speedY < 0) {
      ball.speedY *= -1;
    }
    if (ball.x + ball.speedX > game.width || ball.x + ball.speedX < 0) {
      ball.speedX *= -1;
    }
  } */


     



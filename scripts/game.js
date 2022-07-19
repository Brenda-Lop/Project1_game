class Game {
    constructor(ctx, width, height, player1, player2, ball, goalLeft, goalRight, scorePlayer1, scorePlayer2) {
        this.frames = 0;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player1 = player1;
        this.player2 = player2;
        this.ball = ball;
        this.goalLeft = goalLeft;
        this.goalRight = goalRight;
        this.scorePlayer1 = scorePlayer1;
        this.scorePlayer2 = scorePlayer2;
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
 
    score() {

        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;

        if (this.detectPlayerOneGoal) {
            this.scorePlayer1++
        }
        if (this.detectPlayerTwoGoal) {
            this.scorePlayer2++
        }
            this.ctx.font = '40px sans-serif';
            this.ctx.fillStyle = 'white';
            this.ctx.fillText(`${this.scorePlayer1} | ${this.scorePlayer2}`, 450, 30);
      }


    checkWinner() {
     if(this.scorePlayer1 === 5) {
        this.stop();
        this.ctx.font = '40px sans-serif';
        this.ctx.fillStyle = 'black solid';
        this.ctx.fillText('Player 1 is the winner!', 500, 300);
       }
     if(this.scorePlayer2 === 5) {
        this.stop();
        this.ctx.font = '40px sans-serif';
        this.ctx.fillStyle = 'black solid';
        this.ctx.fillText('Player 2 is the winner!', 500, 300);
       }
    }


    drawGame() {
        drawRect();
        this.player1.draw();
        this.player2.draw();
        this.ball.draw();
        this.goalLeft.draw()
        this.goalRight.draw();
    }

    updateGameArea = () => {
        this.clear();
        this.drawGame();   
        this.score();
        this.checkWinner();   
        this.player1.newPos();
        this.player1.moveUp();
        this.player1.moveDown();
        this.player2.newPos();
        this.player2.moveUp();
        this.player2.moveDown();
        this.ball.ballPos();
      //  this.detectPlayerOneGoal();
     // this.detectPlayerTwoGoal();
    }

}


     



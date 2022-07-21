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
        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;
        this.interval = null;
        this.isRunning = false;
    }

    start() {
        this.interval = setInterval(this.updateGameArea, 20);
        mySound.stop();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    stop() {
        clearInterval(this.interval);
        this.isRunning = false;
    }

    reset = () => {
        this.ball.x = 500;
        this.ball.y = 250;
        this.frames = 0;    
    } 

    resetGame = (difficulty) => {
        this.stop();
        this.player1.y = 220;
        this.player2.y = 220;
        this.ball.x = 500;
        this.ball.y = 250;
        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;
        this.frames = 0;
        this.ball.speedX = difficulty
        this.ball.speedY = difficulty
        this.start();
     }

    detectPlayerOneGoal() {
       return (this.ball.right() >= this.goalRight.left()  &&
       this.ball.bottom() >= this.goalRight.top() &&
       this.ball.top() <= this.goalRight.bottom())
    }

    detectPlayerTwoGoal() {
       return (this.ball.left() <= this.goalLeft.right()  &&
       this.ball.bottom() >= this.goalLeft.top() &&
       this.ball.top() <= this.goalLeft.bottom())
    }

    score() {

        if (this.detectPlayerOneGoal()) {
            this.scorePlayer1++
            this.reset()
        }
        if (this.detectPlayerTwoGoal()) {
            this.scorePlayer2++
            this.reset()
        }
            this.ctx.font = '50px monospace';
            this.ctx.fillStyle = 'black';
            this.ctx.fillText(`${this.scorePlayer1} | ${this.scorePlayer2}`, 420, 50);
    }
      
    checkWinner() {

     if(this.scorePlayer1 === 5) {
        this.stop();
        this.ctx.font = '30px monospace';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText( 'PLAYER 1 HAS DEFEATED BOZO!', 250, 250);
        mySound.play();
       }

     if(this.scorePlayer2 === 5) {
        this.stop();
        this.ctx.font = '30px monospace';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText('PLAYER 2 HAS DEFEATED BOZO!', 250, 250);
        mySound.play();
       }
    }

    drawGame() {
        drawRect();
        drawCenter();
        this.player1.draw();
        this.player2.draw();
        this.ball.drawBall();
        this.goalLeft.draw();
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
    }
}


     



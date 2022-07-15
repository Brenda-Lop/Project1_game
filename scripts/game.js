class Game {
    constructor(ctx, width, height, player1, player2) {
        this.frames = 0;
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player1 = player1;
        this.player2 = player2;
        this.interval = null;
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
        
    }

    checkGameOver = () => {
     
    }

    score() {
       
    }

    updateGameArea = () => {
        this.clear();
        this.score();
        this.checkGameOver();   
        this.player.newPos();
        this.player.draw();
    }
}


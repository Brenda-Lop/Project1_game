class Component {
    constructor (width, height, color, x, y, ctx) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
      this.ctx = ctx;
      this.speedX = 0; //acceleration
      this.speedY = 0; // acceleration
      this.isRunning = false;
    }

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    newPosPlayers() {
        if (this.speedY <= cHeight) {
        this.y += this.speedY
        }
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height,);
    }
     
}
   

/* const ball = {
    x: 500,
    y: 300,
    vx: 3,
    vy: 3,
    radius: 25,
    color: 'yellow',
    drawBall: function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };
 */


    

/* function updateBall() {
  // game.clear();
  ball.draw(); 
  ball.x += ball.speedX;
  ball.y += ball.speedY;
  if (ball.y + ball.speedY > game.height || ball.y + ball.speedY < 0) {
    ball.speedX *= -1;
  }
  if (ball.x + ball.speedX > game.width || ball.x + ball.speedX< 0) {
    ball.speedX *= -1;
  }
}

updateBall(); */

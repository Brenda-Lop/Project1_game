class Component {
    constructor (width, height, color, x, y, ctx, speedX, speedY) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
      this.ctx = ctx;
      this.speedX = speedX; //acceleration
      this.speedY = speedY; // acceleration
      this.isRunning = false;
    }

    ballPos() {
        this.x += this.speedX;
        this.y += this.speedY; 
          if ((this.y + this.height) + this.speedY > 600 || this.y + this.speedY < 0) {
        this.speedY *= -1;
      }
      if ((this.x + this.width) + this.speedX > 1000 || this.x + this.speedX < 0) {
        this.speedX *= -1;
      }

    }

    newPos() {
      this.y += this.speedY;
    }

    moveUp() {
      this.speedY -= 4;
    }

    moveDown() {

      this.speedY += 4;
    }


    newPosPlayers() {
        if (this.speedY <= cHeight) {
        this.y -= this.speedY;
        } else if(this.speedY > 0) {
         this.y += this.speedY;
        }
      }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
      }  
  }

/* class Ball extends Component {
  constructor(width, height, color, x, y, ctx, speedX, speedY) {
    super( width, height, color, x, y, ctx);
    this.speedX = speedX;
    this.speedY = speedY; 
  }
} */
   

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

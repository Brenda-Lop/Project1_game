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

      if ((this.y + this.height) + this.speedY > cHeight || this.y + this.speedY < 0) {
      this.speedY *= -1;
    } else if ((this.x + this.width) + this.speedX > cWidth || this.x + this.speedX < 0) {
      this.speedX *= -1;
    } else if(this.detectPlayerOneCollision()) {
      this.speedX *= -1;
    } else if (this.detectPlayerTwoCollision()) {
      this.speedX *= -1;
    } else if (this.detectPlayerOneGoal()) {
      this.speedX += 4;
      this.speedY += 4;
      this.reset();
    } else if (this.detectPlayerTwoGoal()) {
      this.speedX += 4;
      this.speedY += 4;
      this.reset();
    }

  }

  detectPlayerOneGoal() {
    return this.x < goalRight.x && 
    this.x > (goalRight.x + goalRight.width) &&
    this.y < goalRight.y && 
    this.y > (goalRight.y + goalRight.height)
 }

  detectPlayerTwoGoal() {

  return this.x > goalLeft.x && 
   this.x < (goalLeft.x + goalLeft.width) &&
   this.y >  goalLeft.y &&
   this.y < (goalLeft.y + goalLeft.height) 
 }

 detectPlayerOneCollision() {
      return (this.y + this.speedY) > player1.y - player1.height &&
          this.x + this.width > player1.x &&
          this.x < player1.x + player1.width &&
          this.y + this.speedY < player1.y + player1.height
         } 
    

  detectPlayerTwoCollision() {
      return this.y + this.speedY > player2.y - player2.height &&
          this.x + this.width > player2.x &&
          this.x < player2.x + player2.width &&
          this.y + this.speedY < player2.y + player2.height
      }

    newPos() {

      this.y += this.speedY;

      if (this.y > cHeight - this.height) {
        this.y  = cHeight - this.height;
      } else if (this.y < 0) {
        this.y = 0;
      }
    }

    moveUp() {
      this.speedY -= 4;
    }

    moveDown() {
      this.speedY += 4;
    }

    left() {
      return this.x;
    }

    right() {
      return this.x + this.width;
    }

    top() {
      return this.y;
    }

    bottom() {
      return this.y + this.height;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
      }  
  }



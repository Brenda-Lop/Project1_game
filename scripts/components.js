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

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
   

    


console.log('hello')
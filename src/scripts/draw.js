class Snake {
  constructor() {
    this.x = 0;
    this.y = 150;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
  }
  draw = () => {
    ctx.fillStyle = "#fff";
    ctx.fillRect(this.x, this.y, scale, scale);
    for (let i = 0; i < this.tail.length - 1; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
  };

  update = () => {
    if (this?.tail?.length > 0) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }

    this.tail[this.total] = { x: this.x, y: this.y };
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > canvas.width) {
      this.x = 0;
    }
    if (this.y > canvas.height) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = canvas.width;
    }

    if (this.y < 0) {
      this.y = canvas.height;
    }
  };

  changeDir = (dir) => {
    switch (dir) {
      case "Up":
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case "Down":
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case "Left":
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case "Right":
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
      default:
        alert("Sorry you did not use the arrow key!");
    }
  };

  eatFruit = (fruit) => {
    if (this.x === fruit.x && this.y === fruit.y) {
      this.total++;
      return true;
    }
    return false;
  };
}

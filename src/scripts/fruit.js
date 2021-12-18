class Fruit {
  constructor() {
    this.x;
    this.y;
  }

  pickLocation = () => {
    this.x = (Math.floor(Math.random() * row - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
  };

  drw = () => {
    ctx.fillStyle = "#8e2710";
    ctx.fillRect(this.x, this.y, scale, scale);
  };
}

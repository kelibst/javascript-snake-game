const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const row = canvas.height / scale;
const columns = canvas.width / scale;

let snake;

(function setup() {
  snake = new Snake();
  fruit = new Fruit();
  fruit.pickLocation();

  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.draw();
    snake.update();
    fruit.drw();
  }, 250);
})();

window.addEventListener("keydown", (e) => {
  const dir = e.key.replace("Arrow", "");
  snake.changeDir(dir);
});

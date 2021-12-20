const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const row = canvas.height / scale;
const columns = canvas.width / scale;
const btnContainer = document.getElementById("btnCont");
const score = document.querySelector(".total");

let playing = false;
let snake;

const setup = () => {
  snake = new Snake();
  fruit = new Fruit();
  fruit.pickLocation();

  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.drw();
    snake.draw();
    snake.update();

    if (snake.eatFruit(fruit)) {
      fruit.pickLocation();
      score.innerHTML = snake?.total * 10;
    }
  }, 250);
};

btnContainer.addEventListener("click", (e) => {
  if (playing === false && e.target.classList.contains("btn-play")) {
    playing = true;
    setup();
    btnContainer.classList.remove("button-container");
    btnContainer.classList.add("btCont");
    e?.target?.nextElementSibling.classList.remove("d-none");
    e?.target?.classList.add("d-none");
  } else if (playing === true && e.target.classList.contains("btn-pause")) {
    alert("You paused the game");
  } else if (e.target.classList.contains("btn-stop")) {
    location.reload();
  }
});

window.addEventListener("keydown", (e) => {
  const dir = e.key.replace("Arrow", "");
  snake.changeDir(dir);
});

let score = 0;
let timeLeft = 30;
let moleTimer;
let gameTimer;

const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const moleContainer = document.getElementById("mole-container");

function spawnMole() {
  moleContainer.innerHTML = ""; // Clear previous moles
  const mole = document.createElement("img");
  mole.src = "5041419548820c6fb4e331c2961f4292.png";
  mole.classList.add("mole");
  mole.style.position = "absolute";
  mole.style.top = Math.floor(Math.random() * 300 + 100) + "px";
  mole.style.left = Math.floor(Math.random() * 500 + 100) + "px";

  mole.onclick = () => {
    score++;
    scoreDisplay.textContent = score;
    mole.remove();
  };

  moleContainer.appendChild(mole);

  // Mole disappears after 5 seconds if not clicked
  setTimeout(() => {
    if (mole && mole.parentNode) {
      mole.remove();
    }
  }, 5000);
}

function startGame() {
  gameTimer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft + "s";
    if (timeLeft === 0) {
      clearInterval(gameTimer);
      clearInterval(moleTimer);
      localStorage.setItem("finalScore", score);
      window.location.href = "result.html";
    }
  }, 1000);

  moleTimer = setInterval(spawnMole, 2000); // moles appear every 2 seconds
}

window.onload = startGame;

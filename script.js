let index = 0;
let score = 0;

const image = document.getElementById("person-image");
const headline = document.getElementById("headline");
const scoreDisplay = document.getElementById("score");

function loadCard() {
  const current = newsData[index];
  image.src = current.image;
  headline.innerText = current.headline;
}

function swipe(direction) {
  const current = newsData[index];

  if (
    (direction === "right" && current.correct) ||
    (direction === "left" && !current.correct)
  ) {
    score++;
  }

  index++;

  if (index < newsData.length) {
    loadCard();
  } else {
    headline.innerText = "Game Over! Final Score: " + score;
    image.style.display = "none";
    document.querySelector(".buttons").style.display = "none";
  }

  scoreDisplay.innerText = `Score: ${score}`;
}

loadCard();

let index = 0;
let score = 0;

const image = document.getElementById("person-image");
const headline = document.getElementById("headline");
const scoreDisplay = document.getElementById("score");
const card = document.getElementById("card");

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

// Mobile swipe support
let startX = 0;
card.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

card.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diffX = endX - startX;

  if (diffX > 50) {
    swipe("right");
  } else if (diffX < -50) {
    swipe("left");
  }
});

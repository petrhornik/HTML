const scores = document.querySelectorAll("span");
const buttonPlus = document.querySelectorAll("a");
const maxPointsChooser = document.querySelector("#maxPoints");
const resetBTN = document.querySelector("#reset");

let playScoreLimit = 5;
let scoreCount = [0, 0];

maxPointsChooser.value = parseInt(playScoreLimit);

maxPointsChooser.addEventListener("change", (evt) => {
  playScoreLimit = parseInt(evt.target.value);
  console.log(playScoreLimit);
  resetBTN.click(); //skore se smaže po zmene selectoru poctu bodu pomocí triggernuti click udalosti na reset tlacitko
  alert(`Maximální počet bodů: ${playScoreLimit}`);
});

buttonPlus.forEach((button, idx) => {
  button.addEventListener("click", () => {
    if (scoreCount[idx] < playScoreLimit) {
      scoreCount[idx]++;
      scores[idx].innerText = scoreCount[idx];
    }
    if (scoreCount[idx] >= playScoreLimit) {
      if (idx === 0) {
        scores[idx].classList.add("winner");
        scores[idx].append(" Výhra!!");
        scores[++idx].classList.add("loser");
        scores[idx].append(" Prohra!!");
        --idx;
      } else {
        scores[idx].classList.add("winner");
        scores[idx].append(" Výhra!!");
        scores[--idx].classList.add("loser");
        scores[idx].append(" Prohra!!");
        ++idx;
      }
      console.log(scores[idx].classList);
      buttonPlus.forEach((a) => {
        a.disabled = true;
      });
    }
    buttonPlus[2].disabled = false;
  });
});

resetBTN.addEventListener("click", () => {
  scores[0].innerText = scoreCount[0] = 0;
  scores[1].innerText = scoreCount[1] = 0;
  buttonPlus.forEach((button) => {
    button.disabled = false;
  });
  scores[0].className = "";
  scores[1].className = "";
});

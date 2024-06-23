const score0E1 = document.getElementById("score-0"); //Hold Score of Player 1
const score1E2 = document.getElementById("score-1"); //Hold Score of Player 2
const diceimage = document.querySelector(".dice");
const currentscorevalue1 = document.getElementById("current-0");
const currentscorevalue2 = document.getElementById("current-1");

// btns
const Newbtn = document.querySelector(".btn-new");
const Rollbtn = document.querySelector(".btn-roll");
const Holdbtn = document.querySelector(".btn-hold");
let currentscore = 0;
let activeplayer = 0; //Which Player is active I don't know

Rollbtn.addEventListener("click", () => {
  diceimage.classList.add("showimg");
  let randomindex = Math.floor(Math.random() * 6 + 1);
  diceimage.src = `images/dice-${randomindex}.png`;

  if (randomindex !== 1) {
    //Display The Score
    currentscore += randomindex;
    document.getElementById(`current-${activeplayer}`).innerText = currentscore;
  } else {
    //Switch the Player
    document.getElementById(`current-${activeplayer}`).innerText = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    currentscore = 0;
  }
});
Holdbtn.addEventListener("click", () => {
  let totalScore = document.getElementById(`score-${activeplayer}`);
  totalScore.innerText = Number(totalScore.innerText) + currentscore;
  document.getElementById(`current-${activeplayer}`).innerText = 0;
  currentscore = 0;

  if (Number(totalScore.innerText) >= 20) {
    alert(`Player ${activeplayer + 1} wins the match!`);
    Rollbtn.disabled = true;
    Holdbtn.disabled = true;
  } else {
    // Switch player
    activeplayer = activeplayer === 0 ? 1 : 0;
  }
});


Newbtn.addEventListener("click", () => {
  Rollbtn.disabled = false;
  Holdbtn.disabled = false;
  currentscorevalue1.innerText = 0;
  currentscorevalue2.innerText = 0;
  score0E1.innerText = 0;
  score1E2.innerText = 0;
  diceimage.classList.remove("showimg");
});

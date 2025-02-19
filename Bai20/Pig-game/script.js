// Selecting elements
const player0E1 = document.querySelector(".player--0");
const player1E1 = document.querySelector(".player--1");
const score0E1 = document.querySelector("#score--0");
const score1E1 = document.getElementById("score--1");
const current0E1 = document.getElementById("current--0");
const current1E1 = document.getElementById("current--1");

const diceE1 = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// Starting conditions ( trang muc dau tieu de khi vao web)
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0E1.textContent = 0;
  score1E1.textContent = 0;
  current0E1.textContent = 0;
  current1E1.textContent = 0;

  diceE1.classList.add("hidden");
  player0E1.classList.remove("player--winner");
  player1E1.classList.remove("player--winner");
  player0E1.classList.add("player--active");
  player1E1.classList.remove("player--active");

  // hien thi các thuộc tính
};
init();

// chuyen luot choi giua 2 nguoi trong mot tro choi.
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // toán tử ba ngôi được sử dụng để chuyển đổi giữa 2 người chơi
  // 0 và 1 là chỉ số của người chơi, đều này đổi lượt giữa 2 người chơi
  player0E1.classList.toggle("player--active");
  player1E1.classList.toggle("player--active");
  // các dòng này sử dụng phương thức toggle của classList để thêm hoặc xóa lớp css player--active
  // từ người chơi 0 và người chơi 1
};

// Tung xúc xắc
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Random xuc xac
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2.Hien thi xuc xac
    diceE1.classList.remove("hidden");
    diceE1.src = `dice-${dice}.png`;

    // 3. Kiem tra xem xuc xac co phai la 1 khong
    if (dice !== 1) {
      // tinh diem
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // hien thi diem
    } else {
      switchPlayer(); // chuyen luot choi
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore; // mang luu tru
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; // hien thi diem

    if (scores[activePlayer] >= 100) {
      // Fishing the game
      playing = false;
      diceE1.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner"); // them class winner de hien thi nguoi chien thang
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //chuyen sang nguoi choi tiep theo
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
// khoi tao lai chuong trinh

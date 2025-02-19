const calAverage = (a, b, c) => (a + b + c) / 3;
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log("Dolphins win");
  } else if (avgDolphins * 2 <= avgKoalas) {
    console.log("Koalas win");
  } else {
    console.log("It's a tie");
  }
};

let avgDolphins = calAverage(44, 23, 71);
let avgKoalas = calAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

avgDolphins = calAverage(85, 54, 41);
avgKoalas = calAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);

// Bai 1
// Du lieu 1
const pointDolphins1 = (96 + 108 + 89) / 3;
const pointKoalas1 = (88 + 91 + 110) / 3;
if (pointDolphins1 > pointKoalas1) {
  console.log("Dolphins win");
} else if (pointDolphins1 < pointKoalas1) {
  console.log("Koalas win");
} else {
  console.log("Draw");
}

const pointDolphins2 = (97 + 112 + 101) / 3;
const pointKoalas2 = (109 + 95 + 123) / 3;
if (
  pointDolphins2 > pointKoalas2 &&
  pointDolphins2 > 100 &&
  pointKoalas2 > 100
) {
  console.log("Dolphins win");
} else if (
  pointDolphins2 < pointKoalas2 &&
  pointDolphins2 > 100 &&
  pointKoalas2 > 100
) {
  console.log("Koalas win");
} else {
  console.log("Draw");
}

const pointDolphins3 = (97 + 112 + 101) / 3;
const pointKoalas3 = (109 + 95 + 106) / 3;
if (
  pointDolphins2 > pointKoalas2 &&
  pointDolphins2 > 100 &&
  pointKoalas2 > 100
) {
  console.log("Dolphins win");
}
if (
  pointDolphins2 < pointKoalas2 &&
  pointDolphins2 > 100 &&
  pointKoalas2 > 100
) {
  console.log("Koalas win");
}
if (
  pointDolphins2 === pointKoalas2 &&
  pointDolphins2 > 100 &&
  pointKoalas2 > 100
) {
  console.log("Draw");
}

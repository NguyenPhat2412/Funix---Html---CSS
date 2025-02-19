const isIsland = true;
const country = "Vietnam";
const language = "Vietnamese";
let population = 100;

population++;
console.log(population); // Dân số sau khi tăng thêm 1

const populationEachHalf = population / 2;
console.log(populationEachHalf); // In dân số mỗi miền

const finlandPopulation = 6;
console.log(population > finlandPopulation); // true hoặc false

const averagePopulation = 33;
console.log(population < averagePopulation); // true hoặc false

const description =
  country +
  " and its " +
  population +
  " million people speak " +
  language +
  ".";
console.log(description); // In ra chuỗi description

if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  const belowAverage = 33 - population;
  console.log(
    `${country}'s population is ${belowAverage} million below average.`
  );
}

// Thử nghiệm với các giá trị khác nhau
population = 13; // Dân số tạm thời
if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  const belowAverage = 33 - population;
  console.log(
    `${country}'s population is ${belowAverage} million below average.`
  );
}

population = 130; // Dân số tạm thời
if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  const belowAverage = 33 - population;
  console.log(
    `${country}'s population is ${belowAverage} million below average.`
  );
}

// Đặt lại dân số về ban đầu
population = 100;

const populations = [1441000000, 331000000, 100000000, 334000000];
const countries = ["China", "Russia", "Vietnam", "United States"];
const percentages = [];

for (let i = 0; i < populations.length; i++) {
  percentages.push(percentageOfWorld1(populations[i]).toFixed(1));
}
console.log(populations);
console.log(percentages);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < number.length; i++) {
  if (i % 2 === 0) {
    console.log(`${i}`);
  }
}

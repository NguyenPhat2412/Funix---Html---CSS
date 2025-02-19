function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}
const populations = [1441000000, 331000000, 100000000, 334000000];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]).toFixed(1));
}

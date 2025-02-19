function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}
const populations = [1441000000, 331000000, 100000000, 334000000];
const percentages3 = [];
while (populations.length > 0) {
  percentages3.push(percentageOfWorld1(populations.shift()).toFixed(1));
}

function percentageOfWorld1(population) {
  return (population / 7900000000) * 100;
}
const populationChina = 1441000000;
const populationRussia = 331000000;
const populationVietnam = 100000000;

console.log(
  `Trung Quốc: có ${populationChina / 1e9} tỷ người, chiếm ${percentageOfWorld1(
    populationChina
  ).toFixed(1)}% dân số thế giới`
);
console.log(
  `Nga: có ${populationRussia / 1e9} tỷ người, chiếm ${percentageOfWorld1(
    populationRussia
  ).toFixed(1)}% dân số thế giới`
);
console.log(
  `Việt Nam: có ${populationVietnam / 1e9} tỷ người, chiếm ${percentageOfWorld1(
    populationVietnam
  ).toFixed(1)}% dân số thế giới`
);

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
}

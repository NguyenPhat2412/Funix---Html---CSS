const percentageOfWorld3 = (population1) => {
  return (population1 / 7900000000) * 100;
};

console.log(
  `Trung Quốc: có ${populationChina / 1e9} tỷ người, chiếm ${percentageOfWorld3(
    populationChina
  ).toFixed(1)}% dân số thế giới`
);
console.log(
  `Nga: có ${populationRussia / 1e9} tỷ người, chiếm ${percentageOfWorld3(
    populationRussia
  ).toFixed(1)}% dân số thế giới`
);
console.log(
  `Việt Nam: có ${populationVietnam / 1e9} tỷ người, chiếm ${percentageOfWorld3(
    populationVietnam
  ).toFixed(1)}% dân số thế giới`
);

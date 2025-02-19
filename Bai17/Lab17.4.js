const describeCountry1 = (country, population) => {
  return console.log(
    `${country} has ${population} million people, which is about ${percentageOfWorld1(
      population
    ).toFixed(1)}% of the world.`
  );
};

describeCountry1("China", 1441000000);
describeCountry1("Russia", 331000000);
describeCountry1("Vietnam", 100000000);

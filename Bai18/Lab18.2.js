const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "Vietnamese",
  population: 6e6,
  neighbours: 3,
};
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours} neighbouring countries and a capital called ${myCountry.capital}.`
);
myCountry.population += 2e6;
console.log(myCountry.population);
myCountry["population"] -= 2e6;
console.log(myCountry.population);

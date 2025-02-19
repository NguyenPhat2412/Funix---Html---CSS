// su dung tu khoa this
const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "Vietnamese",
  population: 6e6,
  neighbours: 3,
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours} neighbouring countries and a capital called ${this.capital}.`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours === 0 ? true : false;
    return this.isIsland;
  },
};
console.log(myCountry.describe());

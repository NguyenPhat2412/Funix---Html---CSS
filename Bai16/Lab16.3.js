let language = prompt("what language do you want to: ");
let population = prompt("what population do you want to: ");
let isIsland = prompt("is your country an island?");

population = Number(population);

if (
  language.toLowerCase() === "english" &&
  population < 50 &&
  isIsland.toLowerCase() === "yes"
) {
  console.log(`Sarah should live in ${country} :)`);
} else {
  console.log(`Sarah should not live in ${country} :)`);
}

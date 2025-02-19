let neighbours = ["Trung Quoc", "Lao", "Campuchia"];
neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

let index = neighbours.indexOf("Lao");
if (index !== -1) {
  neighbours[index] = "Laos";
}

console.log("Cac nuoc lang gieng cua Viet Nam: ", neighbours);

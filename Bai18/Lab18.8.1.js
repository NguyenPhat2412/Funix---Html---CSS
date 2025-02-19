const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(
  `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${
    john.fullName
  }'s (${john.bmi.toFixed(1)})!`
);
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${
      john.fullName
    }'s (${john.bmi.toFixed(1)})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${
      mark.fullName
    }'s (${mark.bmi.toFixed(1)})!`
  );
} else {
  console.log(
    `Both ${mark.fullName} and ${
      john.fullName
    } have the same BMI (${mark.bmi.toFixed(1)})!`
  );
}

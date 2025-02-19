const markMass1 = 78;
const markHeight = 1.69;
const johnMass1 = 92;
const johnHeight = 1.95;

// calculate BMI
const marBMI = markMass1 / markHeight ** 2;
const johnBMI = johnMass1 / johnHeight ** 2;

// compare BMI
const isMarHigherBMI = marBMI > johnBMI;
console.log(isMarHigherBMI); // true hoặc false

const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass = 85;
const johnHeight2 = 1.76;

// calculate new BMI
const marBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass / johnHeight2 ** 2;

const markHeightBMI = marBMI2 > johnBMI2;
console.log(markHeightBMI); // true hoặc false

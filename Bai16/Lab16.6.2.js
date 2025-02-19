let tip1 = 15;
let tip2 = 20;

let bill1 = 275;
let bill2 = 40;
let bill3 = 430;
let bill;
let totalBill = 0;
bill >= 50 && bill <= 300
  ? (totalBill = bill + (bill * tip1) / 100)
  : (totalBill = bill + (bill * tip2) / 100);
console.log(
  `The bill was ${bill}, the tip was ${tip1}%, and the total value ${totalBill}`
);

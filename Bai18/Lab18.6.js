// vong lap nguoc
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    // Nếu như các mảng con có ít nhất hai phần tử, in ra lần lượt phần tử từ thứ 2 trở đi
    if (
      listOfNeighbours[i].length >= 2 &&
      listOfNeighbours[i][j] !== listOfNeighbours[i][0]
    ) {
      console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
      // In ra các phần tử từ thứ 2 trở đi
    }
  }
}

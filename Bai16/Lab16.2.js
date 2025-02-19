let numNeighbours = prompt(
  "How many neighbor countries does your country have?"
);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders!");
}
// Đoạn code trên không hoạt động như mong đợi vì prompt() trả về một chuỗi, không phải một số. Cần chuyển đổi chuỗi này thành một số trước khi so sánh. Sửa lại đoạn code như sau:
numNeighbours = Number(numNeighbours);

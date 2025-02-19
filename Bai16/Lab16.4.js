// cau lenh switch

let language = prompt("what language do you want to: ");

switch (language) {
  case "Chinese || Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("4th place");
    break;
  case "Arabic":
    console.log("5th place");
    break;
  default:
    console.log("Great language too :D");
    break;
}

// export var city = "pune";

// let id = 101;

// const pin = 88888;
// function f1() {
//   console.log(id);
// }
// function f2() {
//   console.log(id);
// }

function fnScope() {
  var id = 101;
  console.log(isPlaced);
  if (true) {
    var isPlaced = true;
    console.log(id);
  }
  console.log(isPlaced);
  console.log(id);
}
function f1() {
  let city = "mumbai";
  if (true) {
    let name = "Raj";
    var uname = "sneha";
  } else {
    let x = 100;
  }
  console.log(name);
}

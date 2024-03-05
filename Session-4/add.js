function add(x, y) {
  var a = x;
  var b = y;
  var sum = a + b;
  //   console.log("hello", sum);
  return sum;
}
var result = add(5, 5);

add(6, 6);

add(10, 10);

function f(fn) {
  fn();
  fn();
}

f(function () {
  console.log("hi");
}); //callback

f(add);
function f1() {
  function f2() {}
  f2();
  f2();
} //

f2(); // Invalid

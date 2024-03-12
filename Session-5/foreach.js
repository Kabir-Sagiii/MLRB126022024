var info = [101, 102, 103, 104];

info.forEach(function (element, index) {
  console.log(element, index);
});

var newArray = info.map(function (element, index) {
  //101
  return element + 20; //102 + 20 = 122
});

console.log(newArray);

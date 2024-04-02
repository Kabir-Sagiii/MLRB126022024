var data = [30, 40, 65, 21, 34, 89, 56];

var filteredData = data.filter(function (element, index) {
  return element > 20 && element < 50; //true
});

console.log(filteredData);

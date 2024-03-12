function myFun(x, y, ...args) {
  console.log(x, y);
  console.log(args);
  console.log("----------------------");
}

myFun(10, 20, 30, 40, 50);
myFun(10, 20, 30);
myFun(10, 20, 30, 40, 50, 60, 70);

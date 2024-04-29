var promiseObject = new Promise(function (resolve, reject) {
  //   resolve([
  //     { name: "Pooja", city: "Indore" },
  //     { name: "Sam", city: "Mumbai" },
  //   ]);
  reject({
    status: false,
    error: "Failed to Store data in Database",
  });
});

promiseObject
  .then(function (successData) {
    console.log("Then Executed");
    console.log(successData);
  })
  .catch(function (errorData) {
    console.log("Catch Executed");
    console.log(errorData);
  });

//What is callbacks

function createPromise() {
  return new Promise(function (resolve, reject) {
    resolve("----");
  });

  //   var promiseObject = new Promise(function (resolve, reject) {
  //     resolve("----");
  //   });

  //   return promiseObject;
}

var promise = createPromise();
promise.then().catch();

createPromise().then().catch();

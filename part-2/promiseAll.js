const fs = require("fs");

var promiseAll = function (promises) {
  const pr = new Promise((ress, rej) => {
    var resolvedValues = [];
    let counter = 0;
    promises.forEach(function (promise, i) {
      if (!promise.then) throw Error("Not promise");
      promise
        .then(function (res) { // ! ASYNC
          resolvedValues[i] = res;
          counter++;
          if (counter === promises.length) {
            ress(resolvedValues);
          }
        })
        .catch(function (err) {
          rej(err);
        });
    });
  });
  return pr;
};

promiseAll([Promise.resolve(1), Promise.resolve(2)]).then((c) =>
  console.log(c)
);

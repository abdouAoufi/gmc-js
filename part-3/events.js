//? EVENTS IN JAVASCRIPT
const btnn = document.getElementById("btn");
const result = document.getElementById("result");

window.addEventListener("DOMContentLoaded", function () {
  console.log("Loaded!");
});
let count = 0;

function callBack() {
  count = count + 1;
  if (count > 5) {
    count = 0;
  }
  result.innerText = count;
}

btnn.addEventListener("click", callBack);

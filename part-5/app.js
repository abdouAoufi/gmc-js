const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const deleteBth = document.getElementById("del");
const equalBth = document.getElementById("equal");
const resetBth = document.getElementById("reset");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const result = document.getElementById("result");

const numbersBtn = [zero, one, two, three, four, five, six, seven, eight, nine];
const operationBtn = [plusBtn, minusBtn, divideBtn, multiplyBtn];

let number = "";
let operation = ""; // + - * /
let tempFirstNumber = "";

numbersBtn.forEach((element, i) => {
  element.addEventListener("click", () => write(i));
});

operationBtn.forEach((element) => {
  element.addEventListener("click", () => {
    operation = element.innerText;
    tempFirstNumber = number;
    result.innerText = "0";
    number = "";
  });
});

function write(index) {
  number = number + index;
  result.innerText = number;
}

const doOperation = () => {
  let currentResult = 0;
  switch (operation) {
    case "+":
      currentResult = parseInt(tempFirstNumber) + parseInt(number);
      break;
    case "x":
      currentResult = parseInt(tempFirstNumber) * parseInt(number);
      break;
    case "-":
      currentResult = parseInt(tempFirstNumber) - parseInt(number);
      break;
    case "/":
      currentResult = parseInt(tempFirstNumber) / parseInt(number);
      break;
  }
  result.innerText = currentResult;
  number = currentResult + "";
};

equalBth.addEventListener("click", doOperation);
resetBth.addEventListener("click", () => {
  tempFirstNumber = "";
  number = "";
  result.innerText = "0";
});

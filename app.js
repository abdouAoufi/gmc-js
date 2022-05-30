var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");

function plus(a, b) {
    var c = a + b;
    console.log(globalVar);
    return c;
}

function subtract(a, b) {
    var c = a - b;
    console.log(globalVar);
    console.log(c);
}

function divide(a, b) {
    var c = a / b;
    return c;
}

function sumAndDivide(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        var result = plus(a, b);
        var ultimateResult = divide(result, b);
        console.log("Ultimate result => ", ultimateResult);
    } else {
        console.log("Please enter a number!");
    }
}

// sumAndDivide(3, 5);

function score(a, b, c) {
    if (isNumber(a, b, c) === true) {
        if (isValidNote(a, b, c) === true) {
            var score = (a + b + c) / 3;
            if (isSuccess(score) === true) {
                console.log("Congratulation --->", score);
            } else {
                finalResult(score);
            }
        } else {
            console.log("value must be between 0 and 20");
        }
    } else {
        console.log("please enter number");
    }
}

function isNumber(a, b, c) {
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        return true;
    } else {
        return false;
    }
}

function isValidNote(a, b, c) {
    if (a <= 20 && a >= 0 && b <= 20 && b >= 0 && c <= 20 && c >= 0) {
        return true;
    } else {
        return false;
    }
}

function isSuccess(score) {
    if (score >= 10) {
        return true;
    } else {
        return false;
    }
}

function finalResult(c) {
    var diff = 10 - c;
    if (diff <= 2) {
        console.log("Success with our help");
    } else {
        console.log("Please try next year :(");
    }
}

// console.log("start of the loop");
// for (var i = 1; i <= 10; i = i + 1) {
//     var rest = i % 2;
//     if (rest == 0) {
//         console.log("pair", i);
//     } else {
//         console.log("impair", i);
//     }
//     if (i === 10) {
//         console.log("end of the loop => " + i);
//     }
// }

score(s1.value.toFixed(), s2.value.toFixed(), s3.value.toFixed());
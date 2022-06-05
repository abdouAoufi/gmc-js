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

function score(a, b, c, d) {
    if (isNumber(a, b, c) === true) {
        if (isValidNote(a, b, c) === true) {
            var score = (a + b + c) / 3; // 8
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
    if (diff <= 1) {
        console.log("Success with our help", c);
    } else {
        console.log("Please try next year :(");
    }
}

// score(12, 13, 0.5);

function calculateScore(list) {
    var length = list.length;
    var sumScore = 0;
    for (var i = 0; i < length; i++) {
        var currentNote = list[i];
        sumScore = sumScore + currentNote;
    }
    var finalScore = sumScore / length;
    console.log(finalScore);
}

var classA = [12, 14, 15, 20, 9];
var classB = [9, 5.95, 11, 14, 10];
var classC = [12, 10, 3];

// calculateScore(classA);
// calculateScore(classB);
// calculateScore(classC);

function buildClass(maxLength) {
    var emptyList = [];
    for (var i = 0; i < maxLength; i++) {
        emptyList[i] = generateRandomNote();
    }
    console.log(emptyList);
    calculateScore(emptyList);
}

// buildClass(99);

function generateRandomNote() {
    var randomValue = Math.random() * 20;
    var roundedValue = Math.round(randomValue);
    return roundedValue;
}

// generateRandomNote();

function makeAdressIp() {
    var random = Math.random() * 255;
    var fixed = Math.round(random);
    return fixed;
}

var a = makeAdressIp();
var b = makeAdressIp();
var c = makeAdressIp();
var d = makeAdressIp();
var finalResult = a + "." + b + "." + c + "." + d;

function power(A, P) {
    if (typeof A == "number" && typeof P == "number") {
        if (A === 0) {
            return console.log("INFINITY");
        }
        var result = 1;
        console.log(result);
        for (var i = 1; i <= P; i++) {
            result = result * A;
        }
    } else {
        console.log("-> please number");
    }
}

// power(10, 0); // 1000

function discoverWhile() {
    var i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
}

function calculateFactorial(num) {
    var result = 1;
    var x = num;
    while (x >= 1) {
        result = result * x;
        x = x - 1;
    }
    console.log(result);
}

calculateFactorial(5);

// discoverWhile();

function findGreatestNumber(list) {
    var search = 17;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === search) {
            console.log(i); // 11
        }
    }
}

var list = [11, 12, 14, 15, 15, 17, 18];

findGreatestNumber(list);

function makeRespect(name, year) {
    var currYear = new Date().getFullYear();
    var age = currYear - year;
    if (typeof name === "string" && typeof year === "number") {
        if (age >= 18) {
            console.log("Hello Mr ", name);
        } else {
            console.log("Sorry this not for you ", name);
        }
    }
}

// makeRespect("Halim", 2002);

function findNationality(name, code) {
    switch (code) {
        case "DZ":
            return console.log("Algerian");
        case "TN":
            return console.log("Tunis");
        case "UK":
            return console.log("United kingdom");
        case "MR":
            return console.log("Marocco");
        default:
            console.log("Unknown");
    }
}

findNationality("Islem", "US");

function buildStr(lines) {
    var message = "";
    for (var i = 0; i < lines; i++) {
        for (var j = 0; j < i; j++) {
            message = message + Math.round(Math.random() * 1);
        }
        message = message + "\n";
    }
    console.log(message);
}

buildStr(10);
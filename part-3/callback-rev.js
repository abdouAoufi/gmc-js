function call(
    cb = function() {
        console.log("Im default");
    }
) {
    cb("hello!");
}

function sayHi(text) {
    console.log(text);
}

// call(sayHi);

// ! ES6 2015
const sayHiNew = function() {
    console.log("Hi new");
};

function sayHi() {
    console.log("Hi");
}
sayHi();
// console.log(sayHi);

function outside() {
    const inside = function(text = "default") {
        console.log(text);
    };
    return inside;
}
const islam = outside();
console.log(islam);
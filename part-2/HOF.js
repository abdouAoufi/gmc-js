const list = ["A", "B", "C", "D"];
// LODASH <3

function traditionalLoop(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

function callBack(item) {
    if (item === "E") {
        console.log("D is here");
    } else {
        console.log("E is not Here, this is", item);
    }
}

function modernLoop(list) {
    list.forEach(callBack);
}

traditionalLoop(list); // OLD WAY => the BASIC
modernLoop(list); // ! NEW WAY => the BASIC

// ! for is the base
function cloneForEach(list, callBack) {
    for (let i = 0; i < list.length; i++) {
        callBack(list[i]);
    }
}

let s = 0;

function callBackSum(item) {
    s = s + item;
}

function callBackForMap(item) {
    return item * 3;
}

// cloneForEach([1, 2, 3], callBack);

const single = [1, 2, 3];
const double = single.map(callBackForMap);
// single.forEach(callBackSum);
console.log(s);

const Alphabet = ["A", "B", "C", "D", "C"];

function checkAndAdd(list, char) {
    const found = list.find(function(item) {
        return item === char;
    });
    if (found === undefined) {
        list.push(char);
    } else {
        console.log("We have it already", found);
    }
    console.log(list);
}

checkAndAdd(Alphabet, 22);
var a = [1, 2, 3, 5, 2]
const r = a.filter(function(item) {
    return item === 2;
});
console.log(r);
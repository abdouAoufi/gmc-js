const list = ["A", "B", "C", "D"];

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

// traditionalLoop(list); // OLD WAY => the BASIC
modernLoop(list); // ! NEW WAY => the BASIC
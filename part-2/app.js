const list = []; // ! GLOBAL VARIABLE
const list2 = ["First"]; // ! GLOBAL VARIABLE

console.log("hi");

function showContentList(list) {
    if (list.length === 0) {
        return console.log("Sorry this is an empty LIST");
    }
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

showContentList(list);

function addToList(list, item) {
    list.push(item);
}

function clonePush(list, item) {
    const nextIndex = list.length;
    list[nextIndex] = item;
}

clonePush(list2, "A");
clonePush(list2, "B");
clonePush(list2, "C");
clonePush(list2, "D");

list2.unshift("O");

// showContentList(list2);

function cloneUnshift(originalList, item) {
    const newList = [item];
    for (let i = 1; i < originalList.length; i++) {
        newList[i] = originalList[i - 1];
    }
    return newList;
}

const newList = cloneUnshift(list2, 1);

showContentList(newList);

const list3 = [1, 2, 3, 5];
console.log("original", list3);
list3.pop(); // pop !== push
console.log("After pop (remove last)");
console.log(list3);
list3.shift();
console.log("After shift (remove first)");
console.log(list3); // shift !== unshift

function clonePop(list) {
    const lastIdex = list.length - 1; // 2
    list[lastIdex] = undefined;
    // list.length = lastIdex;
    return list;
}

const testList = [1, 2, 3];
const afterPop = clonePop(testList);
console.log(afterPop);
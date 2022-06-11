const student = {
    name: "Massi",
    age: 20,
    score: 2,
};

const student2 = {
    name: "Mourad",
    age: 22,
    score: 13,
};

console.log(student2.score);

function studentFactory(name = "No name", age = "No age", score = "No Score") {
    const student = {
        name: name,
        age: age,
        score: score,
    };
    return student;
}

const s1 = studentFactory("Aymen", 22, 12);
const s2 = studentFactory("Mouhamed", 22, 15);
const s3 = studentFactory("Sara", 22, 8);
const s4 = studentFactory("Tarek", 22, 11);
const s5 = studentFactory("Kamel", 22, 9);

const st = [s1, s2, s3, s4, s5];

function findBestScore(list) {
    let max = list[0].score;
    let who = list[0].name;
    list.forEach(function(item) {
        if (item.score > max) {
            max = item.score;
            who = item.name;
        }
    });
    console.log(who);
}
// findBestScore(st);

function findLosers(list) {
    const newList = list.filter(function(item) {
        if (item.score < 10) {
            return item;
        }
    });
    console.log(newList);
}

findLosers(st);

const sayHi = {
    name: "Hello",
    age: 18,
};
delete sayHi.age; // ! HOW to delete prop from OBJECT
sayHi.name = "Hola";
console.log(sayHi.name);
console.log(sayHi);

const obj = {
    a: "A",
    b: "B",
    c: "C",
};

// console.log(obj["b"]);
// console.log(obj.b);

for (x in obj) {
    console.log(obj[x]);
}
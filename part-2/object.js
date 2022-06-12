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
    console.log("🚀 ~ file: object.js ~ line 51 ~ newList ~ newList", newList)
    console.log("🚀 ~ file: object.js ~ line 51 ~ newList ~ newList", newList)
    console.log("🚀 ~ file: object.js ~ line 51 ~ newList ~ newList", newList)
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

const PERSON = {
    primaryInfo: {
        name: "Tarek",
        age: 23,
    },
    secondaryInfo: {
        wilaya: { city: "Dar el Bidha", name: "Alger" },
        street: "Aissat Aidir",
    },
    sayHi: function() {
        console.log("Hi it's me");
    },
    sayMyName: function() {
        console.log(this.primaryInfo.name);
    },
};
const PERSON2 = {
    primaryInfo: {
        name: "Mourad",
        age: 23,
    },
    secondaryInfo: {
        wilaya: { city: "Dar el Bidha", name: "Alger" },
        street: "Aissat Aidir",
    },
    sayHi: function(s) {
        console.log("Hi it's me", s);
    },
    sayMyName: function() {
        console.log(this.primaryInfo.name);
    },
};

// console.log(PERSON.secondaryInfo.wilaya.city);

PERSON2.sayHi("::::");
PERSON.sayMyName(); // => Tarek
PERSON2.sayMyName(); // => Mourad

const primary = {
    name: "Samir",
    age: 45,
};

const secondary = {
    wilaya: "boumerdes",
};

const fullPerson = {
    // 2001
    name: primary.name,
    age: primary.age,
    wilaya: secondary.wilaya,
};

const fullPerson2020 = {
    ...primary,
    ...secondary,
};

console.log(fullPerson2020);

const info =
    "This person has name " +
    fullPerson2020.name +
    " has  " +
    fullPerson2020.age +
    " years old"; // 2009
const info2022 = `This person has name ${fullPerson2020.name} has ${fullPerson2020.age} years old`; // 2020

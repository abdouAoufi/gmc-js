const [a, b, c] = ["Aymen", "Massi", "Islam"];

console.log(a);

const val = 5;
// let valDependent = 1;

// const decideValDependValue = () => {
//   if (val === 5) {
//     valDependent = val * 2;
//   } else {
//     valDependent = 0;
//   }
// };

// decideValDependValue();

// console.log(valDependent);



// ES6 one line 😎

const valDependent = val === 5 ? val * 2 : 1;

console.log(valDependent);

// // BEFORE ES6
// const aymen = students[0];
// const massi = students[1];
// const islam = students[2];

// console.log(aymen, massi, islam);

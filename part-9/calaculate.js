// library

const calculateAge = (yearOfBirth) => {
    const age = 2022 - yearOfBirth;
    return age;
};

const isStudent = (age) => {
    if (age >= 18 && age <= 25) {
        console.log("is Student");
    } else {
        console.log("not a student");
    }
};

module.exports = { calculateAge: calculateAge, isStudent: isStudent };
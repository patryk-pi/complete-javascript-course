/*
let js = "amazing";
if (js = "amazing") alert("JavaScript is FUN!");

console.log(40 + 8 + 23 - 10);

let firstName = "Patryk";
console.log(firstName);*/

/*true;
console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);*/

/*
const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
*/


/*
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving license 🚗")
} else {
    const ageLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${ageLeft} years :)`)
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);*/

/*if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than Jonh's ${johnBMI}`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}*/

/*

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 14) {
    console.log("Cool!")
} else if (favourite === 7) {
    console.log("7 is also cool!")
} else {
    console.log("Number is not 18 or 7")
}*/

/*const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision); //and
console.log(hasDriverLicense || hasGoodVision); //or
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;*/

/*if (shouldDrive) {
    console.log("Sarah is able to drive")
} else {
    console.log("Someone else should drive")
}*/

/*

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && !isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive")
} else {
    console.log("Someone else should drive")
}
*/

/*
const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;

if (dolphinsAverage > koalasAverage) {
    console.log("Doplphins win!")
} else if (koalasAverage > dolphinsAverage) {
    console.log("Koalas win!")
} else {
    console.log("It's a draw!")
}

const dolphinsAverageB1 = (97 + 112 + 101) / 3;
const koalasAverageB1 = (109 + 95 + 123) / 3;

if (dolphinsAverageB1 > koalasAverageB1 && dolphinsAverageB1 >= 100) {
    console.log("Doplphins win!")
} else if (koalasAverageB1 > dolphinsAverageB1 && koalasAverageB1 >= 100) {
    console.log("Koalas win!")
} else {
    console.log("It's a draw!")
}

const dolphinsAverageB2 = (97 + 106 + 101) / 3;
const koalasAverageB2 = (109 + 89 + 106) / 3;

if (dolphinsAverageB2 > koalasAverageB2 && dolphinsAverageB2 >= 100) {
    console.log("Doplphins win!")
} else if (koalasAverageB2 > dolphinsAverageB2 && koalasAverageB2 >= 100) {
    console.log("Koalas win!")
} else if (dolphinsAverageB2 === koalasAverageB2 && dolphinsAverageB2 >= 100 && koalasAverageB2 >= 100) {
    console.log("It's a draw!")
} else {
    console.log("No one wins")
}*/

let bill = 100;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, total was ${bill + tip}`)
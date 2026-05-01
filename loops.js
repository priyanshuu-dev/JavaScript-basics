// ===============================
// JavaScript Loops Practice
// ===============================

// 1. FOR LOOP
// Used when number of iterations is known

console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// 2. WHILE LOOP
// Used when condition-based looping

console.log("\nWhile Loop:");
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}


// 3. DO...WHILE LOOP
// Executes at least once before checking condition

console.log("\nDo While Loop:");
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);


// 4. FOR...OF LOOP
// Used to iterate over iterable objects (arrays, strings)

console.log("\nFor...of Loop (Array):");
let arr = [10, 20, 30];
for (let value of arr) {
    console.log(value);
}

console.log("\nFor...of Loop (String):");
let str = "JS";
for (let char of str) {
    console.log(char);
}


// 5. FOR...IN LOOP
// Used to iterate over object keys

console.log("\nFor...in Loop (Object):");
let obj = {
    name: "Priyanshu",
    age: 20
};

for (let key in obj) {
    console.log(key + ": " + obj[key]);
}


// ===============================
// End of Loops Practice
// ===============================
const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3];
const expenses = [50, 100, 150];

// 6.1 Tính tổng các giá trị trong scores.
let reduce1 = scores.reduce((total, num) => total + num, 0);
console.log(reduce1);

// 6.2 Tính tích các giá trị trong numbers.
let reduce2 = numbers.reduce((tich,num) => tich*num, 1);
console.log(reduce2);

// 6.3 Tính tổng các giá trị trong expenses.
let reduce3 = expenses.reduce((total, num) => total + num, 0);
console.log(reduce3);
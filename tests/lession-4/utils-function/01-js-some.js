const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3];
const expenses = [50, 100, 150];

// 5.1 Kiểm tra scores có giá trị nào > 80 không.
let some1 = scores.some((val) => val > 80);
console.log(some1);

// 5.2 Kiểm tra ages có giá trị nào < 18 không.
let some2 = ages.some((val)=> val < 18 );
console.log(some2);

// 5.3 Kiểm tra words có từ nào dài > 5 không.
let some3 = words.some((val) => val.length > 5);
console.log(some3);
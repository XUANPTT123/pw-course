const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];
//2.1 Lọc các giá trị trong scores > 80.
let filter1 = scores.filter((val) => val > 80);
console.log(filter1);

//2.2 Lọc các giá trị trong ages ≥ 18.
let flter2 = ages.filter((val) => val >= 18);
console.log(flter2);

//2.3 Lọc các từ trong words có độ dài > 5
let filter3 = words.filter((val) => val.length > 5);
console.log(filter3);
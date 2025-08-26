//1.1 Kiểm tra tất cả giá trị trong scores có > 70 không

const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

 let every1 = scores.every((val) => val > 70);
 console.log(`Tất cả giá trị trong score có > 70 không: ${every1}`);

 //2.  Kiểm tra tất cả giá trị trong ages có > 15 không

 let every2 = ages.every((val) => val > 15);
 console.log(`Tất cả các giá trị trong age có > 15 không: ${every2}`);

 //3. Kiểm tra tất cả các từ trong words có độ dài > 3 không

 let every3 = words.every((val) => val.length > 3);
console.log(`Tất cả các giá trị trong word có độ dài > 3 không: ${every3}`);
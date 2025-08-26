// const { type } = require("os");

const student = { "name": "Alex", "age": 10, "salary": 20 };

// 3.1 In tên và giá trị mỗi thuộc tính của student
for (let key in student) {
  console.log(key, student[key]);
}
console.log('------------------')

// 3.2 Tính tổng các giá trị số trong student
total = 0;
for(let key in student) {
  if (typeof student[key] === "number") {
      total += student[key];
  }
}
console.log(total);
console.log('------------------')

// 3.3 Tạo mảng chứa tên các thuộc tính của student
let keys = [];
for(let key in student) {
    keys.push(key);
}
console.log(keys);

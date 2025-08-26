const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 2.1 In lần lượt từng ký tự của str
for (let index of str) {
    console.log(index);
    }
console.log('------------------')

// 2.2 Tạo mảng đảo ngược từ str
let a = '';
for (let b of str) {
    a = b+a;
}
console.log(a);
console.log('------------------')

// 2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
a = 0;
for (let b of arr) {
    if (b===3) {
        console.log(a);
    }
    a++;
}
console.log('------------------')
// 2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr


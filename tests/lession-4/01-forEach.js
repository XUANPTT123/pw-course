const numbers = [1, 2, 3];

// 1.1 In lần lượt từng phần tử của numbers.
numbers.forEach((num) => {
    console.log(num);
})
console.log('---------------------------');
// 1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers
total = 0;
min = numbers[0];
max = numbers[0];
numbers.forEach((num) => {
    total += num;
    if (num < min) {
        min = num;
    }
    if (num > max) {
        max = num;
    }
})
console.log(total);
console.log(min);
console.log(max);
console.log('---------------------------');

// 1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi
let a = [];
numbers.forEach((num) =>
    a.push(num * 2)
)
console.log(a);
const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3];
const expenses = [50, 100, 150];

// 4.1.Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90.

let map1 = scores.map((val) => {
    if (val < 90) {
        return val+10/100;
    } else {
        return val-5/100;
    }
})
console.log(map1);

// 4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi.
let map2 = numbers.map((val) => String(val));
console.log(map2);

// 4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị
let map3 = numbers.map((val)=> val*2);
console.log(map3);
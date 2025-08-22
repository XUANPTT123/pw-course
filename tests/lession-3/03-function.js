//1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
function multyply(a,b) {
     return a * b
}
let nhan1 = multyply(4,5);
let nhan2 = multyply(9,5);
console.log(nhan1);
console.log(nhan2);

//2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả
//với 2 bộ số khác nhau.

function findmin(a,b,c) {
    return Math.min(a,b,c)
}
console.log(`in ra giá trị nhỏ nhất ${findmin(2,8,1)}`);
console.log(`in ra giá trị nhỏ nhất ${findmin(2,8,77)}`);

//3. Bài này em đang chạy sai, thôi chờ anh chữa bài ạ 
const students = [
    {
        name : 'Xuân',
        score: 8,
    },
    {
        name : 'Hạ',
        score: 10,
    },
    {
        name : 'thu',
        score: 9,
    },
    {
        name : 'đông',
        score: 7,
    }
]
function getTopStudents (students,threshold) { 
    if (students.score >= threshold) {
        console.log(`${students.name}`)
    }
    return
}
let threshold = 9
console.log(`danh sách các học sinh có điểm >= threshold: ${getTopStudents(students,threshold)}`)

//4.

function caculateInterst (principal, rate, year) {
    return principal + (principal+ principal* rate*year)/100
}
let principal = 500;
let rate = 5;
let year = 10;
console.log(`Số tiền gốc + lãi sau ${year} năm = ${caculateInterst (principal, rate, year)}`)
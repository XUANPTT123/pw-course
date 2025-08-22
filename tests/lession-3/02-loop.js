//1. Tinh tong 
let tong = 0
for (i = 1; i <= 100; i++) {
    tong += i
}
console.log('tinh tong tu 1 den 100 = ', tong)

//2. In bảng cửu chương từ 2 đến 9.

for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}

//3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
let mang = []
for (i = 1; i <= 99; i += 2) {
    mang.push(`${i}`)
}
console.log(`Các số lẻ từ 1 đến 99: ${mang}`)

//4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ: user1@example.com, user2@example.com, ..., user10@example.com).

for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`)
}

//5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
//in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
//{“month”: 2, “total”: 100}

const doanhthu = {
    month: 2,
    total_2: 100
}
console.log(`tong doanh thu 12 tháng = ${12*100}`)




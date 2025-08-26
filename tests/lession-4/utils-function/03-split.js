const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

// 1. Chia name thành mảng các từ (dùng khoảng trắng).
let split1 = name.split(" ");
console.log(split1);

// 2. Chia emails thành mảng các email (dùng dấu phẩy).
let split2 = emails.split(",");
console.log(split2);

// 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang).
let split3 = date.split("-");
console.log(split3);

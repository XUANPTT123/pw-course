const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

// 1. Thay khoảng trắng bằng "." trong phoneNumber.
console.log(phoneNumber.replaceAll(' ','.'));

// 2. Thay "lỗi" bằng "bug" trong report.
console.log(report.replace('lỗi','bug'));

// 3. Thay "," bằng "." trong numbersStr.
console.log(numbersStr.replaceAll(',','.'));

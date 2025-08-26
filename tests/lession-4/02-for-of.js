const str = "Playwright";
//1. 
for (let name1 of str) {
    console.log(name1);
}
console.log('------------------')

//2. 
let str_nguoc = ''
for (let name2 of str) {
    str_nguoc = name2 + str_nguoc;
    // console.log(str_nguoc);
}
console.log(str_nguoc);
console.log('------------------')

//3. 
const arr = [1, 2, 3, 4, 3, 55, 23];
index = 0;
for (let arr1 of arr) {
    if (arr1 === 3) {
        console.log(index);
    }
    index++;
}
console.log('------------------')

//4.


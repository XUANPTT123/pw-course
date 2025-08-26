//1.In lần lượt từng phần tử của numbers.
const numbers = [1, 2 , 3];
numbers.forEach((Val) => {
    console.log(`${Val}`)
})
console.log('------------------')
//2. 
sum = 0
numbers.forEach((val)=> {
    sum += val;
})
console.log(`Tổng giá trị: ${sum}`);

//Cách 1: 
sort = numbers.sort();
console.log(`Gía trị nhỏ nhất: ${sort[0]}`);
console.log(`Gía trị lớn nhất: ${sort[sort.length-1]}`);

//Cách 2: 
min = numbers[0];
max = numbers[0];
numbers.forEach((val) => {
    if (val < min) {
        min = val
    } 
    if (val > max) {
        max = val
    }
})
console.log(`${min}`);
console.log(`${max}`);
console.log('------------------')

//3. 

const dup = [];
numbers.forEach((val) => {
    dup.push(val * 2);
})
console.log(dup);
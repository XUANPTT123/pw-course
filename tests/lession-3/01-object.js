//1. Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. Sau đó in ra năm sản xuất của xe.
const car = {
    make: "Toyota",
    model: 'Corolla',
    year: 2021,
}
console.log(car.year);

//2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.
const persion = {
    name : 'Xuan',
    address : {
        street: 'Hoàng Quốc Việt',
        city: 'Hà Nội',
        country : 'Việt Nam',
    }
}
console.log(persion.address.street);

//3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông....
const student = {
    name : 'Xuân',
    grades : {
        math : 10,
        english: 9
    }
}
console.log(student["grades"]["math"]);

//4. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới.
const setting = {
    volume : 500,
    brightness: 2000
}

setting.volume = 700

console.log(setting)

//5. Tạo một object bike và sau đó thêm thuộc tính color vào object đó
const bike = {
    color : "đen"
}

//6. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này
const employee = {
    name : 'Xuân',
    age : 15
}

delete employee.age;
console.log(employee)

//7. 
const school = {
    classA : {
        student1 : 'An',
        student2 : 'Bình',
        student3 : 'Châu',
    },
    classB : {
        student1 : 'Đào',
        student2 : 'Hương',
        student3 : 'Giang',
    }
}
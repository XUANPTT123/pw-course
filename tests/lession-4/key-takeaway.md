# Biến
1. Var: có thể truy cập được vào biến trước khi được khai báo. Phạm vi global
2. Let: Không thể truy cập trước khi khai báo. Phạm vi scope {}
=> **Nên dùng let để đảm bảo hiển thị thông báo lỗi nếu code sai**

# Advance condition
1. if...else: Dùng khi có 2 trường hợp đúng hoặc sai
    if (điều kiện) {
        logic code;
    } else {
        logic code;
    }

2. if...else if: Dùng khi có nhiều điều kiện cần kiểm tra
    if (điều kiện) {
        logiccode;
    } else if (điều kiện) {
        logic code;
    } else {
        logic code;
    }

3. switch...case: Dùng khi có nhiều giá trị cụ thể của 1 biến
    let day = 2; 
    switch (day) {
        case 2: 
            console.log("Thứ hai");
            break;
        case 3: 
            console.log("Thứ ba");
            break;
        default: 
            console.log("Không hợp lệ");
    }

4. ==, != và ===, !==
    - *** == và !=**: So sánh bằng và khác lỏng lẻo (không so sánh kiểu dữ liệu)
    - *** === và !==**: So sánh bằng và khác nghiêm ngặt (có so sánh kiểu dữ liệu)

# advance loops
1. For...in:  trả về thuộc tính của 1 object
    **VD1**: let student = {
        name : 'XUÂN',
        age : 18,
        city: 'HN',
        street: 'Lê Lợi'
    }
    for(let property in student) {
        console.log(property);*trả về name, age, city, street*
        console.log(student[property]); *trả về Xuân, 18, HN, Lê Lợi*
    }
    **VD2**: let number = [4,5,6,7];
    for (let index in number){
        console.log(index);*trả  về 0, 1, 2, 3*
        console.log(number[index]);*trả về 4, 5, 6, 7*
        } 

2. ForEach: dùng để lọc qua các mảng (sử dụng cho mảng)
    let number = [4,5,6,7];
    number.forEach((Val, index) => {
    console.log(`${index}:${Val}`)
    })
        + val: giá trị của phần tử hiện tại
        + index: Vị trí của phần tử đó trong mảng
        + => : Hàm và tham số ở bên trai sẽ thực hiện đoạn lệnh bên phải
        + In ra KQ: 0:4, 1:5, 2:6, 3:7

3. For...of

# array helper functions

# string helper functions

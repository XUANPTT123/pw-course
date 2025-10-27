class Student {
    //thuộc tính chung
    name;
    city;

    //hàm khởi tạo -
    constructor(name, city, tuoi1){
        this.name = name;
        this.city = city;
        this.tuoi1 = tuoi1;
    }
    //method
    sayMyName() {
        console.log(`my name: ${this.name}`);
    }

    saytuoi(tuoi) {
        console.log(`${this.name} có tuoi la: ${tuoi}`)
    }

    saytuoi1 (tuoi1) {
        console.log(`${this.name} có tuoi la: ${tuoi1}`)
    }
}

let student1 = new Student("Alex", "Hanoi","50");
student1.sayMyName();
student1.saytuoi(20);
student1.saytuoi1();

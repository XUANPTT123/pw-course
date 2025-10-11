//1.
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Engineer"
};
const {firstName, lastName, age, occupation} = person;
console.log('----------Các gia tri của person-------------');
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(occupation);

//2. 
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "White",
};
const {brand, model, year, color} = car;
console.log('-----------Các gia tri của car--------------');
console.log(brand);
console.log(model);
console.log(year);
console.log(color);

//3.
const user = {
    // ...
};
const {name = "Guest"} = user;
console.log('----------- gia tri của user--------------');
console.log(name);

//4. 
let product = {
    // ...
};
const {price = 0} = product;
console.log('----------- gia tri của product--------------');
console.log(price);

//5.
const book = {
    title: "1234",
}
const {title: bookTitle} = book;
console.log('----------- gia tri của book--------------');
console.log(bookTitle);

//6. 
const movie = {
    director : "abcdef",
}
const {director: filmDirector} = movie;
console.log('----------- gia tri của movie--------------');
console.log(filmDirector);

//7.
person = {
    address: {
        street: 'Cat Linh',
        city: 'Hà Nội',
        country: 'Việt Nam',
    }
}
const {address: {street}} = person;
console.log('----------- gia tri của street--------------');
console.log(street);

//8. 
product = {
    detail: {
        brand: "China",
        model: "hehehe",
        color: "red",
    }
}
const {detail: {model: newModel},} = product;
console.log('----------- gia tri của model--------------');
console.log(newModel);

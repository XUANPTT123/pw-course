//1.

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    occupation: "Software Engineer"
}

const { firstName, lastName, age, occupation } = person
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

const { brand, model, year, color } = car;
console.log(brand);
console.log(model);
console.log(year);
console.log(color);

//3. 
const user = {};
const { name = 'Guest' } = user;
console.log(name);


//4. 
let product = {};
const { price = 0 } = product;
console.log(price);

//5.
const book = { title: 'title book' };
const { title: bookTitle } = book;
console.log(bookTitle);

//6. 
const move = { director: 'diretor' };
const { director: filmDirector } = move;
console.log(filmDirector);

//7.
person = {
    address: {
        street: 'Dong Da',
        contry: 'VN',
        city: 'HN'
    }
}
const { address: { street } } = person;
console.log(street);

//8. 
product = {
    detail: {
        brand: 'VN',
        color: 'Yellow',
        model: 'China'
    }
}
const { detail: { model: modelProduct } } = product;
console.log(modelProduct);
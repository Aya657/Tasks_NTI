var car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "White"
};
console.log(car);

console.log(car.brand);
console.log(car["year"]);

car.color = "black";
car.price = 500000;
console.log(car);

delete car.year;
console.log(car.year);
// year was deleted, so it returns undefined.

var student = {
  "student-name": "Sara",
  age: 20
};
console.log(student["student-name"]);

var book = {
  title: "JavaScript Basics",
  author: {
    firstName: "John",
    lastName: "Smith"
  }
};
console.log(book.author.lastName);


var person = {
  name: "Ali",
  age: 25,
  city: "Cairo"
};
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty("job"));


var settings = {
  theme: "dark",
  lang: "en"
};
Object.freeze(settings);
settings.theme = "light";
settings.fontSize = 16;
console.log(settings);
// Object.freeze() prevents modifying, adding, or deleting properties.
// The object remains unchanged.
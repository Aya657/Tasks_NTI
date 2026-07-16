var students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];
for (var i = 0; i < students.length; i++) {
    console.log("Name: " + students[i].name);
    console.log("Grade: " + students[i].grade);
}


var passedStudents = students.filter(function (student) {
    return student.grade >= 80;
});
var studentNames = passedStudents.map(function (student) {
    return student.name;
});
console.log(studentNames);


var products = [
    { name: "Pen", price: 10 },
    { name: "Book", price: 50 },
    { name: "Bag", price: 25 }
];
var totalPrice = products.reduce(function (total, product) {
    return total + product.price;
}, 0);
console.log(totalPrice);


var skills = ["js", "html", "css", "js", "react", "js"];
var count = skills.reduce(function (total, item) {
    if (item === "js") {
        return total + 1;
    }
    return total;
}, 0);
console.log(count);


var classroom = {
    teacher: "Mr. Ahmed",
    students: ["Omar", "Mona", "Ali", "Sara"]
};
console.log(classroom.teacher);
console.log(classroom.students.length);
console.log(classroom.students[classroom.students.length - 1]);


var products = [
    { id: 1, title: "Pen", price: 10 },
    { id: 2, title: "Book", price: 50 },
    { id: 3, title: "Bag", price: 25 }
];
var upperTitles = products.map(function (product) {
    return product.title.toUpperCase();
});
console.log(upperTitles);
var cheapProducts = products.filter(function (product) {
    return product.price < 30;
});
console.log(cheapProducts);
var totalPrice = products.reduce(function (total, product) {
    return total + product.price;
}, 0);
console.log(totalPrice);
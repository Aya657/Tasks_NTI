//A
//task1
/*
function test() {
    x = 10;
}
test();
console.log(x);*/ 

//task2
/*
function test() {
    "use strict";
    try {
        x = 10;
    } catch (error) {
        console.log(error.message);
    }
}
*/

//task3
/*function test() {
    "use strict";
    var localVar = "test";
    try {
        delete localVar;
    } catch (error) {
        console.log(error.message);
    }
    var obj = {
        name: "Aya"
    };
    delete obj.name;
    console.log(obj);
}
test();*/

//B
//tadk4
/*
console.log(x);
var x = 10;
console.log(x);*/

//5
/*
sayHi();
function sayHi() {
    console.log("Hi");
}
    
sayBye();
var sayBye = function () {
    console.log("Bye");
};*/

//6
/*console.log(a);
let a = 5;*/

//7
/*
var n = 1;
function demo() {
    console.log(n);
    var n = 2;
    console.log(n);
}
demo();
console.log(n);*/


//C
//8
/*function test() {
    if (true) {
        var x = 10;
    }
    console.log(x);
}
test();*/

//9
/*if (true) {
    let x = 10;
    const y = 20;
}
console.log(x);
console.log(y);*/

//10
/*var x = 10;
var x = 20;
console.log(x);*/

/*let y = 10;
// let y = 20;
console.log(y);*/


//11
/*
const student = {
    name: "Aya",
    age: 20,
    city: "Kafr Elsheikh"
};
student.age = 21;
console.log(student);
student.grade = "A";
console.log(student);
delete student.city;
console.log(student);
// student = {
//     name: "Ali"
// };*/


//12
/*const nums = [1, 2, 3];
nums.push(4);
console.log(nums);
nums[0] = 10;
console.log(nums);

// nums = [5, 6, 7];*/

//13
/*var a;
let b;
const c;*/

//14
/*
var g1 = "var global";
let g2 = "let global";
const g3 = "const global";
console.log(window.g1);
console.log(window.g2);
console.log(window.g3);*/

//15
/*
const handlers = {};
for (let i = 0; i < 3; i++) {
    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}
console.log(handlers.fn0());
console.log(handlers.fn2());*/


//D
//task16
/*var welcome = (name) => `Welcome, ${name}!`;
console.log(welcome("Aya"));*/


//task17
/*var fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;

console.log(fullInfo("Aya", "Ramadan", 20));*/

//task18
/*var multiply = (a, b) => a * b;
console.log(multiply(5, 4));*/

/*var sum = (a, b) => {
    console.log(a);
    console.log(b);
    return a + b;
};
console.log(sum(5, 4));*/


//E
//task19
/*const product = {
    title: "Laptop",
    price: 15000,
    inStock: true,
    brand: "Dell"
};
var { title, price, inStock } = product;
console.log(title);
console.log(price);
console.log(inStock);*/

//task20
/*var skills = ["HTML", "CSS", "JS", "React"];
var [first, second] = skills;
console.log(first);
console.log(second);*/

//task21
/*var greet = (name = "Guest", message = "Hello") => {
    return `${message}, ${name}!`;
};
console.log(greet("Aya", "Hi"));
console.log(greet("Aya"));
console.log(greet());*/

//22
/*var sumAll = (...numbers) => {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));*/

//23
/*var arr1 = [1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2];
console.log(arr3);*/

//24
/*const user = {
    name: "Sara",
    age: 22
};
const contact = {
    email: "sara@nti.com",
    age: 23
};
var result = {
    ...user,
    ...contact
};
console.log(result);*/

//25
/*const values = [2, 4, 6, 8];
function total(a, b, c, d) {
    return a + b + c + d;
}
console.log(total(...values));*/


//F
//task26
/*let person1 = {
    name: "Ali",
    child: {
        age: 5
    }
};
let person2 = person1;
person2.name = "Omar";
console.log(person1.name);*/

//task27
/*const original = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};
const copy = {
    ...original
};
copy.name = "Aya";
copy.details.city = "Alex";
console.log(original);
console.log(copy);*/

//task28
/*const original = {
    name: "Mona",
    details: {
        city: "Cairo"
    }
};
const copy = structuredClone(original);
copy.details.city = "Alex";
console.log(original);
console.log(copy);/*

//29
/*var user = {
    name: "Ahmed",
    age: 26,
    city: "Alex"
};
localStorage.setItem("userdata", JSON.stringify(user));
var data = JSON.parse(localStorage.getItem("userdata"));
console.log(typeof data);
console.log(data);
localStorage.removeItem("userdata");/*

//30
/*const APP_CONFIG = {
    name: "My App",
    version: "1.0",
    api: {
        baseUrl: "www.test.com",
        timeout: 5000
    },
    features: []
};
APP_CONFIG.api.timeout = 3000;
console.log(APP_CONFIG);
APP_CONFIG.features.push("Login");
console.log(APP_CONFIG);
// APP_CONFIG = {};*/

//31
/*function createCard(title, price = 0, ...tags) {
    return {
        title,
        price,
        tags,
        label: `${title} - ${price} EGP`
    };
}
var card1 = createCard("Laptop", 15000, "Dell", "Core i7");
var card2 = createCard("Mouse");
console.log(card1);
console.log(card2);*/

//32
/*const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];
for (var student of students) {
    var { name, grade } = student;

    console.log(`${name} scored ${grade}`);
}*/



//partA
//1
/*
const fruits = ["apple", "banana", "cherry"];
for (var i in fruits) {
    console.log(i, fruits[i]);
}/*

/*
const fruits = ["apple", "banana", "cherry"];
for (var fruit of fruits) {
    console.log(fruit);
}*/


//2
/*
const fruits = ["apple", "banana", "cherry"];
for (var [index, value] of fruits.entries()) {
    console.log(index, ":", value);
}*/

//3
/*var text = "NTI";
for (var i in text) {
    console.log(i, text[i]);
}*/
/*
var text = "NTI";
for (var ch of text) {
    console.log(ch);
}*/

//4
/*const user = {
    name: "Ali",
    age: 25
};
for (const x of user) {
    console.log(x);
}*/

/*const user = {
    name: "Ali",
    age: 25
};
for (var [key, value] of Object.entries(user)) {
    console.log(key, value);
}*/

//5
/*var numbers = [1, 2, 3, 4, 5, 6];
for (var num of numbers) {
    if (num == 3) {
        continue;
    }

    if (num == 5) {
        break;
    }
    console.log(num);
}*/

//B
//6
/*var map = new Map();
var obj = { id: 1 };
map.set("name", "Ahmed");
map.set(100, "ID");
map.set(obj, "UserObject");
console.log(typeof map);
console.log(map.size);
*/

//7
/*
console.log(map.get("name"));
console.log(map.has("age"));
map.delete(100);
console.log(map.size);*/

//8
/*for (var [key, value] of map) {
    console.log(key, value);
}*/

/*for (var key of map.keys()) {
    console.log(key);
}
*/

/*
for (var value of map.values()) {
    console.log(value);
}*/

//9
/*Reasons to use Map:
1. Map can use any data type as a key (String, Number, Object, ...)
2. Map has a size property to get the number of elements
3. Map provides useful methods like:
   set(), get(), delete(),..
*/

//10
/*map.clear();
console.log(map.size);*/

//C
//task11
/*var set = new Set();
set.add(10);
set.add(21);
set.add(2);
set.add(3);
set.add(2);
set.add(10);
console.log(set);
console.log(set.size);
*/

//12
/*console.log(set.has(2));
set.delete(3);
console.log(set.has(3));
*/

//13
/*
for (var value of set.values()) {
    console.log(value);
}*/

/*for (var entry of set.entries()) {
    console.log(entry);
}
*/

//In Set, the key and the value are the same

//14
/*const nums = [1, 2, 2, 3, 4, 4, 5];
var unique = [...new Set(nums)];
console.log(unique);*/

//15
/*
Differences between Set and Array:
1. Set does not allow duplicate values,
   but Array allows duplicates
2. Set has unique methods like:
   add(), delete(), has()
3. Array stores values by index,
   while Set stores unique values only*/


   //D
   //16
/*const name = "Ahmed";
const age = 25;
// Old Way
var person1 = {
    name: name,
    age: age
};
// Shorthand
var person2 = {
    name,
    age
};
console.log(person1);
console.log(person2);
*/

//17
/*var calculator = {
    add(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    }
};
console.log(calculator.add(5, 3));
console.log(calculator.multiply(5, 3));*/

//18
/*
const key1 = "email";
const key2 = "phone";
var user = {
    [key1]: "ahmed@test.com",
    [key2]: "01000000000",
    ["user_" + 99]: "special user"
};
console.log(user);*/

//19
/*function buildPayload(type, value) {
    return {
        type,
        value,
        createdAt: new Date().toISOString(),

        print() {
            console.log(`${type}: ${value}`);
        },
        [type + "_flag"]: true
    };
}
var payload = buildPayload("order", 12345);
console.log(payload);
payload.print();
*/

//E
//20
/*let a = 10;
let b = a;
b++;
console.log(a, b);*/

//21
/*const person1 = {
    name: "SSS",
    child: {
        age: 5
    }
};
const person2 = person1;
person2.name = "AAA";
console.log(person1.name);*/

//22
/*const original = {
    x: 1,
    nested: {
        y: 2
    }
};
const copy = {
    ...original
};
copy.x = 10;
copy.nested.y = 20;
console.log(original);
console.log(copy);
*/

//23
/*const original = {
    x: 1,
    nested: {
        y: 2
    }
};
const copy = Object.assign({}, original);
copy.nested.y = 50;
console.log(original);
console.log(copy);*/

//24
/*const deepSrc = {
    n: 1,
    d: new Date(),
    arr: [1, { k: 2 }],
    set: new Set([1, 2, 3])
};
const deepClone = structuredClone(deepSrc);
deepClone.arr[1].k = 999;
console.log(deepSrc);
console.log(deepClone);*/

//25
/*const arr1 = [1, [2, 3]];
const arr3 = [...arr1];
arr1[1][0] = 99;
console.log(arr3[1][0]);
*/

/*const arr1 = [1, [2, 3]];
const arr3 = structuredClone(arr1);
arr1[1][0] = 99;
console.log(arr3[1][0]);*/

//F
//26
/*
const m1 = new Map([
    ["k", { v: 1 }]
]);
const m2 = new Map(m1);
m2.get("k").v = 42;
console.log(m1.get("k").v);
*/

//27
/*const m3 = structuredClone(m1);
m3.get("k").v = 7;
console.log(m1.get("k").v);
console.log(m3.get("k").v);*/


//28
/*const ids = [101, 102, 101, 103, 102, 104];
var uniqueIds = new Set(ids);
var map = new Map();
for (var id of uniqueIds) {
    map.set(id, "available");
}
console.log(map.size);
for (var entry of map) {
    console.log(entry);
}*/


//29
/*const name = "JavaScript";
const hours = 40;
const key = "level";
var course = {
    name,
    hours,
    info() {
        console.log(name, hours);
    },

    [key]: "Beginner"
};
for (var [key, value] of Object.entries(course)) {
    console.log(key, value);
}
*/

//30
/*
let personA = {
    name: "SSSSSSS",
    son: {
        age: 5
    }
};
let personB = personA;
personB.name = "Ahmed";
let personC = structuredClone(personA);
personC.son.age = 10;
console.log(personA);
console.log(personB);
console.log(personC);*/

/*Explanation:
 personB is a reference copy, so changing the name
  also changes personA

 personC is a deep copy, so changing son.age
  does not affect personA
*/
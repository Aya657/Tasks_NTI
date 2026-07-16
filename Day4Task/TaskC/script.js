var fruits = ["apple", "banana", "cherry"];
var upperFruits = fruits.map(function (fruit) {
    return fruit.toUpperCase();
});
console.log(upperFruits);
console.log(fruits);


var numbers = [10, 55, 30, 80, 45, 90];
var result = numbers.filter(function (num) {
    return num > 50;
});
console.log(result);


var cities = ["Cairo", "Giza", "Alex", "Aswan"];
var city = cities.find(function (item) {
    return item.startsWith("A");
});
var index = cities.findIndex(function (item) {
    return item.startsWith("A");
});
console.log(city);
console.log(index);


var letters = ["a", "b", "c", "d", "e"];
var copy = letters.slice(1, 4);
console.log(copy);
console.log(letters);


var words = ["one", "two", "three", "four", "five"];
var removed = words.splice(1, 2);
console.log(removed);
console.log(words);


var numbers = [40, 100, 1, 5, 25];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);


var ages = [16, 21, 17, 19];
var hasAdult = ages.some(function (age) {
    return age >= 18;
});
var allAdults = ages.every(function (age) {
    return age >= 18;
});
console.log(hasAdult);
console.log(allAdults);


var numbers = [5, 10, 15, 20];
var total = numbers.reduce(function (sum, num) {
    return sum + num;
}, 0);
console.log(total);
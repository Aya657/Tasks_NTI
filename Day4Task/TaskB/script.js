var cities = ["Cairo", "Alex", "Giza", "Luxor", "Aswan"];
console.log(cities);
console.log(cities.length);


console.log(cities[0]);
console.log(cities[1]);
console.log(cities[cities.length - 1]);


cities.push("Tanta");
console.log(cities);
cities.unshift("Mansoura");
console.log(cities);


cities.pop();
console.log(cities);
cities.shift();
console.log(cities);


var skills = ["HTML", "CSS", "JS", "React"];
console.log(skills.indexOf("JS"));
console.log(skills.includes("Python"));


var items = ["pen", "book", "bag"];

items.forEach(function (item, index) {
    console.log("Item: " + item);
    console.log("Index: " + index);
});


var colors = ["red", "green", "blue", "yellow"];
for (var color of colors) {
    if (color === "blue") {
        break;
    }
    console.log(color);
}


var letters = ["A", "B", "C"];
letters.push("D", "E");
letters.shift();
console.log(letters);
console.log(letters.length);
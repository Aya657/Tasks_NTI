var word = "HELLO";
for (var i = 0; i < word.length; i++) {
    console.log(word[i]);
}


var numbers = [10, 20, 30, 40];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);


var sentence = "JavaScript is amazing and awesome";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] == "a" || sentence[i] == "A") {
        count++;
    }

}
console.log(count);


var grades = [70, 85, 92, 60, 77, 88];
for (var i = 0; i < grades.length; i++) {
    if (grades[i] % 2 == 0) {
        console.log(grades[i]);
    }
}



for (var i = 1; i <= 4; i++) {
    var stars ;
    for (var j = 1; j <= i; j++) {
        stars += "* ";
    }
    console.log(stars);
}



var names = ["ahmed", "sara", "omar", "laila", "hassan"];
var count = 0;
for (var i = 0; i < names.length; i++) {
    var upperName = names[i].toUpperCase();
    if (upperName[0] == "A" || upperName[0] == "S") {
        console.log(upperName);
        count++;
    }

}
console.log("Matched Names = " + count);
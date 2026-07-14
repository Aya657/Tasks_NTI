var name = prompt("Enter your name:");
var birthYear = Number(prompt("Enter your birth year:"));
var isStudent = confirm("Are you a student?");
var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;
var category ;

if (age < 13) {
    category = "Kid";
}
else if (age >= 13 && age <= 17) {
    category = "Teen";
}
else if (age >= 18 && age <= 59) {
    category = "Adult";
}
else {
    category = "Senior";
}

var studentMessage ;
if (isStudent) {
    studentMessage = "Don't forget to study hard!";
}

console.log("Hello " + name + ", you are " + age + " years old.");
console.log("Category: " + category );
console.log(studentMessage);

alert(
    "Hello " + name + ", you are " + age + " years old." +
    "\nCategory: " + category +
    "\n" + studentMessage
);

document.getElementById("result").innerText =
    "Hello " + name + ", you are " + age + " years old." +
    "\nCategory: " + category +
    "\n" + studentMessage;


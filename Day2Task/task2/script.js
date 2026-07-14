var name = prompt("Enter your name ? ");
var age = Number(prompt("Enter your age ? "));
var yearsOfExperience = Number(prompt("Enter your years of experience"));
var rate =Number(prompt("Rate yourself from 1 to 10 "));
var jobCategory , selfRating, bonus ,finalSalary ,shift;
var baseSalary = Number(prompt("Enter your base salary: "));
var currentTime = new Date();
var currentHour = currentTime.getHours();

if (yearsOfExperience < 2) {
    jobCategory = "Junior";
}
else if (yearsOfExperience >= 2 && yearsOfExperience < 5) {
    jobCategory = "Mid-Level";
}
else if (yearsOfExperience >= 5 && yearsOfExperience <= 10) {
    jobCategory = "Senior";
}
else {
    jobCategory = "Expert";
}


switch (true) {
    case (rate >= 9):
        selfRating = "Excellent";
        break;

    case (rate >= 7 && rate <= 8):
        selfRating = "Good";
        break;

    case (rate >= 5 && rate <= 6):
        selfRating = "Average";
        break;

    case (rate < 5):
        selfRating = "Needs Improvement";
        break;

    default:
        selfRating = "Invalid Rating";
}

if (yearsOfExperience >= 0 && yearsOfExperience <= 2) {
    bonus = baseSalary * 0.10;
}
else if (yearsOfExperience >= 3 && yearsOfExperience <= 5) {
    bonus = baseSalary * 0.15;
}
else if (yearsOfExperience > 5) {
    bonus = baseSalary * 0.20;
}

finalSalary = baseSalary + bonus;

if (currentHour >= 9 && currentHour < 18) {
    shift = "Day Shift";
}
else {
    shift = "Night Shift";
}

console.log("Employee Name: " + name);
console.log("Final Salary: " + finalSalary);
alert("Performance: " + selfRating);
document.getElementById("result").innerHTML =
"Employee Name: " + name + "<br>" +
"Age: " + age + "<br>" +
"Job Category: " + jobCategory + "<br>" +
"Performance: " + selfRating + "<br>" +
"Final Salary: " + finalSalary + "<br>" +
"Work Shift: " + shift;
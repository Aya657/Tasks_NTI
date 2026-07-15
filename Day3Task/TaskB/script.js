var number = "45.8";
var result = parseFloat(number);
console.log(result);

var number = 7.6;
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));

console.log(Math.max(12, 5, 28, 9));
console.log(Math.min(12, 5, 28, 9));

var randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

var num = 19.4567;
console.log(num.toFixed(2));

var num1 = Math.floor(Math.random() * 50) + 1;
var num2 = Math.floor(Math.random() * 50) + 1;
var num3 = Math.floor(Math.random() * 50) + 1;
var num4 = Math.floor(Math.random() * 50) + 1;
var num5 = Math.floor(Math.random() * 50) + 1;
console.log(num1, num2, num3, num4, num5);
console.log(Math.max(num1, num2, num3, num4, num5));
console.log(Math.min(num1, num2, num3, num4, num5));
var average = (num1 + num2 + num3 + num4 + num5) / 5;
console.log(average.toFixed(2));

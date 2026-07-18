function multiply(num1, num2) {
  return num1 * num2;
}

function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

function displayResult(result) {
  console.log(result);
}

var result = calculate(5, 4, multiply);
displayResult(result);
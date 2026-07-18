function greetUser() {
  setTimeout(function () {
    console.log("Hello, User!");
  }, 3000);
}
greetUser();

function countdown() {
  var count = 10;
  var interval = setInterval(function () {
    console.log(count);
    count--;

    if (count === 0) {
      console.log("Time's up!");
      clearInterval(interval);
    }
  }, 1000);
}
countdown();

function countdown() {
  var count = 10;

  var interval = setInterval(function () {
    console.log(count);
    count--;
  }, 1000);

  setTimeout(function () {
    clearInterval(interval);
  }, 5000);
}
countdown();

var timer = setTimeout(function () {
  console.log("This will be cleared!");
}, 5000);
clearTimeout(timer);
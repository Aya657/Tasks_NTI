var fullName = "Aya Ramadan";
console.log(fullName.length);

var sentence = "I am learning JavaScript";
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

var email = "student@nti.com";
console.log(email.includes("@"));

var word = "JavaScript";
console.log(word[0]);
console.log(word[word.length - 1]);

var text = "This is a bad day";
var newText = text.replace("bad", "good");
console.log(newText);

var sentence = "I love coding";
var words = sentence.split(" ");
var result = words.join("-");
console.log(result);

var text = "   NTI Egypt training   ";
var result = text.trim()
result = result.toUpperCase()
result = result.replace("EGYPT", "CAIRO");
console.log(result);